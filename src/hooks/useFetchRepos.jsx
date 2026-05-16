import { useState, useEffect } from 'react';

export default function useFetchRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If no username is provided, don't execute
    if (!username) return;

    const fetchRepositories = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user repositories sorted by most recently updated
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
          throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Clean up the data: Filter out forks so it only shows original creations
        const originalRepos = data.filter(repo => !repo.fork);

        setRepos(originalRepos);
      } catch (err) {
        setError(err.message || 'Something went wrong while fetching repositories.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]); // Hook reruns only if the username changes

  return { repos, loading, error };
}