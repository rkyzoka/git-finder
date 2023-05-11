const tbody = document.querySelector("tbody");
const input = document.querySelector("#search-user");
const button = document.querySelector(".button");

input.addEventListener("keyup", key => {
  if (key.code === "Enter") {
    load();
    input.value = "";
  }
});

button.addEventListener("click", async () => {
  load();
  input.value = "";
});

async function load() {
  const value = input.value;
  const user = await apiGitHub.getUsers(value);
  if (user.login === undefined) {
    alert("User not found");
    return;
  }
  createTr(user);
  createBio(user);
}

function createTr(user) {
  const tr = document.createElement("tr");
  tr.classList.add("body-tr");

  if (user.name === null || user.name === undefined) user.name = "";

  tr.innerHTML = `
  <td><img src="https://github.com/${user.login}.png" alt="User Image">
                            <a href="https://github.com/${user.login}" target="_blank">
                                <p>${user.name}</p>
                                <span>${user.login}</span>
                            </a>
                        </td>
                        <td>${user.followers}</td>
                        <td>${user.public_repos}</td>
  `;

  tbody.appendChild(tr);
}

function createBio(user) {
  const tr = document.createElement("tr");
  tr.classList.add("tr-bio");

  if (user.bio === null || user.bio === undefined) user.bio = "";

  tr.innerHTML = `
  <tr class="tr-bio">
        <td colspan="3">${user.bio}</td>
    </tr>
  `;
  tbody.appendChild(tr);
}
