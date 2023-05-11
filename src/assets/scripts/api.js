const apiGitHub = {};

apiGitHub.getUsers = function (username) {
  const url = `https://api.github.com/users/${username}`;

  return fetch(url).then(resp => resp.json().then(data => data));
};
