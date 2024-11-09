import { useEffect, useState } from "react";
import { getAllTopics } from "../../api";
import { Link, useSearchParams } from "react-router-dom";

export const AllTopicsPage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <ul>
      {topics.map((topic) => {
        return (
          <Link
            className="link"
            to={`/articles?topic=${topic.slug}`}
            key={topic.slug}
          >
            <li className="TopicLinks">{topic.slug} (copy to clipboard)</li>
          </Link>
        );
      })}
    </ul>
  );
};
