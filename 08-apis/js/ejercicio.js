

async function renderUsers() {

const usersSection = document.getElementById("usersSection");

try {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await res.json(); // [{},{}]

    console.log(users);

    let html = "";

    users.forEach(user => {
        html += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
           <h5 class="card-title">${user.name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>
           <p class="card-text">${user.company.catchPhrase}</p>
           <a href="#" class="card-link">${user.phone}</a>
           <a href="#" class="card-link">${user.company.name}</a>
          </div>
        </div>
        `
    });

    usersSection.innerHTML = html;
    
} catch (error) {
    console.log(error);
};
};

renderUsers();
