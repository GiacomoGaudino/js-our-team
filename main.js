
const team = [
    {
        name: "MARIO BIANCHI",
        role: "Designer",
        email: "mariobianchi@team.com",
        image: "./img/male1.png"
    },
    {
        name: "LAURA ROSSI",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        image: "./img/female1.png"
    },
    {
        name: "GIORGIO VERDI",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        image: "./img/male2.png"
    },
    {
        name: "MARTA IPSUM",
        role: "SEO Specialist",
        email: "martaipsum@team.com",
        image: "./img/female2.png"
    },
    {
        name: "ROBERTO LOREM",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        image: "./img/male3.png"
    },
    {
        name: "DANIELA AMET",
        role: "Analyst",
        email: "danielaamet@team.com",
        image: "./img/female3.png"
    }
]

/*
<div class="col-lg-4">
    <div class="card bg-black text-white">
        <div class="row g-0">
            <div class="col-3">
                    <img id="image" src="${team.image}" class="img-fluid rounded-start" alt="Foto di Laura Rossi">
            </div>
            <div class="col-9">
                <div class="card-body px-4 py-2">
                    <h5 id="name" class="card-title fw-bold">${team.name}</h5>
                    <p id="role" class="card-subtitle mb-1">${team.role}</p>
                    <a id="email" href="mailto:laurarossi@team.com" class="card-link text-decoration-none text-info">${team.email}</a>
                </div>
            </div>
        </div>
    </div>
</div>
*/

const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");
const emailEl = document.getElementById("email");
const imageEl = document.getElementById("image");
const rowEl = document.querySelector(".row");
const formEl = document.querySelector("form");


let teamMarkup = []

for (let i = 0; i < team.length; i++) {
    const element = team[i];
    console.log(element);
    const { name, role, email, image } = team[i];
    const objectMarkup = `
        <div class="col-lg-4">
            <div class="card bg-black text-white">
                <div class="row g-0">
                    <div class="col-3">
                        <img id="image" src="${image}" class="img-fluid rounded-start" alt="${name}">
                    </div>
                    <div class="col-9">
                        <div class="card-body px-4 py-2">
                            <h5 id="name" class="card-title fw-bold">${name}</h5>
                            <p id="role" class="card-subtitle mb-1">${role}</p>
                            <a id="email" href="mailto:${email}" style="font-size: 0.9rem" class="card-link text-decoration-none text-info">${email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    teamMarkup.push(objectMarkup)
}
rowEl.innerHTML = teamMarkup.join("");


formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = nameEl.value;
    const role = roleEl.value;
    const email = emailEl.value;
    const image = imageEl.value;
    const objectMarkup = `
        <div class="col-lg-4">
            <div class="card bg-black text-white">
                <div class="row g-0">
                    <div class="col-3">
                        <img src="${image}" class="img-fluid rounded-start" alt="${name}">
                    </div>
                    <div class="col-9">
                        <div class="card-body px-4 py-2">
                            <h5 class="card-title fw-bold">${name}</h5>
                            <p class="card-subtitle mb-1">${role}</p>
                            <a href="mailto:${email}" style="font-size: 0.9rem" class="card-link text-decoration-none text-info">${email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    rowEl.innerHTML += objectMarkup
    formEl.reset();
})

