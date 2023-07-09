import React, { useEffect, useState } from "react";
import LanguageCard from "../card";

const Stats = ({ username }) => {
  const [languageStats, setLanguageStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const perPage = 100; // Number of repositories per page
        let page = 1;
        let data = [];

        // Fetch all repositories
        while (true) {
          const response = await fetch(
            `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`
          );
          const repos = await response.json();

          if (repos.length === 0) {
            break; // No more repositories to fetch
          }

          data = data.concat(repos);
          page++;
        }

        // Create an object to store language counts
        const languageCounts = {};

        // Iterate over repositories and count languages
        data.forEach((repo) => {
          const language = repo.language;
          if (language) {
            if (languageCounts[language]) {
              languageCounts[language]++;
            } else {
              languageCounts[language] = 1;
            }
          }
        });

        // Calculate the total number of repositories
        const totalRepositories = data.length;

        // Sort languages by count in descending order
        const sortedLanguages = Object.keys(languageCounts).sort(
          (a, b) => languageCounts[b] - languageCounts[a]
        );

        // Prepare the language stats with percentages and counts
        const stats = sortedLanguages.map((language) => {
          const languageCount = languageCounts[language];
          const percentage = (
            (languageCount / totalRepositories) *
            100
          ).toFixed(2); // Calculate percentage

          return {
            language,
            percentage,
            count: languageCount,
          };
        });

        setLanguageStats(stats);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching GitHub data:", error);
      }
    };

    fetchData();
  }, [username]);

  return loading ? (
    "Loading..."
  ) : (
    <LanguageCard languageStats={languageStats} />
  );
};

export default Stats;
