const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];

function checkRepositoryExists(request, response, next) {
  const { id } = request.params;
  let repo = repositories.find(repositorie => repositorie.id == id);
  if (!repo) {
    return response.status(404).json({ error: "Repository not found!" })
  } else {
    request.repo = repo
    return next()
  }
}

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository)

  return response.status(201).json(repository);
});

app.put("/repositories/:id", checkRepositoryExists, (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;
  const validateUpdate = {
    title,
    url,
    techs
  }

  repositoryIndex = repositories.findIndex(repository => repository.id === id);

  const repository = { ...repositories[repositoryIndex], ...validateUpdate };

  repositories[repositoryIndex] = repository;

  return response.status(200).json(repository);
});

app.delete("/repositories/:id", checkRepositoryExists, (request, response) => {
  const { id } = request.params;

  let repositoryToDelete = repositories.find(repository => repository.id == id);

  repositories.splice(repositoryToDelete, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", checkRepositoryExists, (request, response) => {
  const { id } = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }

  ++repositories[repositoryIndex].likes;

  return response.status(200).json(repositories[repositoryIndex]);
});

module.exports = app;
