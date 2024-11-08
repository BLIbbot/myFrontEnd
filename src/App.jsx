import "./App.css";
import { Route, Routes } from "react-router-dom";
import ArticlesList from "./Components/ArticlesList";
import IndividualArticlePage from "./Components/IndividualArticlePage";
import { useEffect, useState } from "react";
import { UserContext } from "./Components/UserContext";
import { getUserByUsername } from "../api";
import { NavBar } from "./Components/NavBar";
import { AllTopicsPage } from "./Components/AllTopicsPage";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(sessionStorage.getItem("user"));
  }, [user]);

  const trySignIn = (e) => {
    e.preventDefault();
    getUserByUsername(input).then((response) => {
      setUser(response.username);
      sessionStorage.setItem("user", response.username);
    });
    setInput("");
  };

  const signOut = () => {
    setUser("");
    sessionStorage.removeItem("user");
  };

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        {!user ? (
          <form className="signinFlex" onSubmit={trySignIn}>
            <label>
              sign in:
              <input value={input} onChange={(e) => setInput(e.target.value)} />
              <button type="submit">Sign in</button>
            </label>
          </form>
        ) : (
          <>
            <div className="signinFlex">
              <p>{`Currently logged in as ${user}`}</p>
              <p> </p>
              <button onClick={signOut}>sign out</button>
            </div>
          </>
        )}
        <Routes>
          <Route path="/articles" element={<ArticlesList />} />
          <Route
            path="/articles/:article_id"
            element={<IndividualArticlePage user={user} />}
          />
          <Route path="/topics" element={<AllTopicsPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
