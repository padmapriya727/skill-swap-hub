function saveUser(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let teach = document.getElementById("teach").value;
    let learn = document.getElementById("learn").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, teach, learn });
    localStorage.setItem("users", JSON.stringify(users));

    event.target.reset();
}

function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let output = "";

    if (users.length === 0) {
        output = `<p>Be the first to share a skill!</p>`;
    } else {
        users.forEach((u, index) => {
            output += `
            <div class="card">
                <h3>${u.name}</h3>
                <p><strong>Teaches:</strong> ${u.teach}</p>
                <p><strong>Learning:</strong> ${u.learn}</p>
                <button onclick="deleteUser(${index})">Delete</button>
            </div>`;
        });
    }

    document.getElementById("skillList").innerHTML = output;
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

function sendRequest(event) {
    event.preventDefault();
    document.getElementById("msg").innerText = "✔ Request Sent Successfully!";
    event.target.reset();
}

/* LOGIN MODAL FUNCTIONS */

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}
