import { useEffect, useState } from "react";

export default function useGitHubStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GH_TOKEN}`,
          },
          body: JSON.stringify({
            query: `
              query {
                user(login: "ManishMandrai") {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                    }
                  }
                }
              }
            `,
          }),
        });

        const data = await res.json();

        setStats({
          total: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
        });

      } catch (err) {
        console.error("GitHub API error", err);
      }
    }

    loadStats();
  }, []);

  return stats;
}
