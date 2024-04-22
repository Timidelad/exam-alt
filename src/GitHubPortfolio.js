// GitHubPortfolio.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, CardActions, Link, Button, TextField } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

const GitHubPortfolio = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRepositories, setFilteredRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Timidelad/repos');
        setRepositories(response.data);
        setFilteredRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterRepositories(value);
  };

  const filterRepositories = (searchTerm) => {
    const filtered = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepositories(filtered);
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        My GitHub Repositories
      </Typography>
      <TextField
        label="Search Repositories"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '16px' }}
      />
      {filteredRepositories.map((repo) => (
        <Card key={repo.id} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="h5">
              <Link
                component={RouterLink}
                to={`/repo/${repo.id}`}
                color="primary"
              >
                {repo.name}
              </Link>
            </Typography>
            <Typography variant="body1" style={{ marginTop: '8px' }}>
              {repo.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={RouterLink}
              to={`/repo/${repo.id}`}
              size="small"
              color="primary"
            >
              View Details
            </Button>
          </CardActions>
          <CardContent>
            <Typography variant="body2">Stars: {repo.stargazers_count}</Typography>
            <Typography variant="body2">Forks: {repo.forks_count}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GitHubPortfolio;
