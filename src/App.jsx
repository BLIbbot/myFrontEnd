import "./App.css";
import { Route, Routes } from "react-router-dom";
import ArticlesList from "./Components/ArticlesList";
import IndividualArticlePage from "./Components/IndividualArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route
          path="/articles/:article_id"
          element={<IndividualArticlePage />}
        />
      </Routes>
    </>
  );
}

export default App;
