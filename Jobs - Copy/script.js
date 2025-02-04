const postsContainer = document.querySelector("#posts")

const searchField = document.querySelector("#search")

const searchForm = document.querySelector("#search-form")

const modeToggle = document.querySelector("#mode-toggle")

const html = document.body.parentElement


const renderPosts = async (term) =>{
    let res;
    if(term) {
        res = await fetch(`https://jsonplaceholder.typicode.com/posts/${term}`).then((res) => res.json())
        .then((json) => console.log(json));
    }
    else{
       res = await fetch("https://jsonplaceholder.typicode.com").then((res) => res.json())
       .then((json) => console.log(json));
    }
    console.log(res)

    if(res && res.length > 0){
        res.forEach((posts) => {
            const postsCard = document.createElement("div")
            postsCard.classList.add("col-md-4", "my-3")
            postsCard.innerHTML = `
            <div class="card">
            <div class="card-body">
                <p>${posts.userId}</p>
            
            <p class="my-2 text-secondary-emphasis">
                <span> ${posts.id}</span>
                <i class="bi bi-dot"></i>
                <span>${posts.title}</span>
            </p>
            <p class="text-primary fw-bold">
                ${posts.body}
            </p>
        </div>
        </div>
        `

        postsContainer.appendChild(postsCard)
        }
    )}
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const term = searchField.value
    postsContainer.innerHTML = ""
    renderPosts(term)
})

console.log(html)

modeToggle.addEventListener("click", function(e) {
    e.preventDefault()
    changeTheme()
})

const changeTheme = () => {
    const theme = localStorage.getItem("theme") || "light"
if (theme === "light"){
    html.setAttribute("data-bs-theme","dark")
    localStorage.setItem("theme", "dark")
    modeToggle.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
}
else{
    html.setAttribute("data-bs-theme","light")
    localStorage.setItem("theme", "light")
modeToggle.innerHTML = `
<i class="bi bi-moon-fill"></i>
`}
}

const storageTheme = localStorage.getItem("theme") || "light"
html.setAttribute("data-bs-theme", storageTheme)
if(storageTheme === "dark"){
    modeToggle.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
}
else{
    modeToggle.innerHTML = `
<i class="bi bi-moon-fill"></i>
`
}

renderPosts()