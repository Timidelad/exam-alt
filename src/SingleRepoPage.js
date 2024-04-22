// SingleRepoPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const SingleRepoPage = () => {
  const { repoId } = useParams();
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repositories/${repoId}`);
        setRepoData(response.data);
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchRepoData();
  }, [repoId]);

  if (!repoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h3">{repoData.name}</Typography>
      <Typography variant="body1">{repoData.description}</Typography>
      <Typography variant="body2">Stars: {repoData.stargazers_count}</Typography>
      <Typography variant="body2">Forks: {repoData.forks_count}</Typography>
      {/* Add more details as needed */}
    </div>
  );
};

export default SingleRepoPage;
