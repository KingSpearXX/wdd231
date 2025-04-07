document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("discover-container")
  const gridViewBtn = document.getElementById("gridViewBtn")
  const listViewBtn = document.getElementById("listViewBtn")

  // Fetch data from the provided URL
  fetch("./data/interest.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      return response.json()
    })
    .then(companies => {
      companies.forEach(discover => {
        const discoverCard = document.createElement("div")
        discoverCard.classList.add("discover-card")

        discoverCard.innerHTML = `
                    <h2>${discover.name}</h2>  
                    <figure>
                        <img src="images/${discover.image}" alt="${discover.name} Image" class="discover-image">
                        <figcaption>${discover.name}</figcaption>
                    </figure>          
                    <p>${discover.description}</p>
                    <p><a href="${discover.address}" target="_blank">${discover.address}</a></p>
                    <button>Learn More</button>
                `

        container.appendChild(discoverCard)
      })
    })
    .catch(error => {
      container.innerHTML = `<p>Error loading data: ${error.message}</p>`
    })

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      container.classList.add("grid-view")
      container.classList.remove("list-view")
    }
  })
})
const greetings = document.getElementById("greetings")

// Get last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit")
const now = new Date()
let message = ""

if (!lastVisit) {
  // First visit
  message = "Welcome! Let us know if you have any questions."
} else {
  const previousVisit = new Date(lastVisit)
  const diffTime = now - previousVisit
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    message = "Back so soon! Awesome!"
  } else if (diffDays === 1) {
    message = "You last visited 1 day ago."
  } else {
    message = `You last visited ${diffDays} days ago.`
  }
}

// Save current visit
localStorage.setItem("lastVisit", now.toISOString())

// Display the message in the greetings
greetings.textContent = message
