document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("company-container")
  const gridViewBtn = document.getElementById("gridViewBtn")
  const listViewBtn = document.getElementById("listViewBtn")

  // Fetch data from the provided URL
  fetch("https://kingspearxx.github.io/wdd231/chamber/data/members.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      return response.json()
    })
    .then(companies => {
      companies.forEach(company => {
        const companyCard = document.createElement("div")
        companyCard.classList.add("company-card")

        companyCard.innerHTML = `
                    <img src="${company.logo}" alt="${company.name} Logo">
                    <h3>${company.name}</h3>
                    <p>📍 ${company.address}</p>
                    <p>📞 ${company.phone}</p>
                    <p>🌐 <a href="${company.website}" target="_blank">${company.website}</a></p>
                    <p>⭐ Membership Level: ${company.membershipLevel}</p>
                `

        container.appendChild(companyCard)
      })
    })
    .catch(error => {
      container.innerHTML = `<p>Error loading data: ${error.message}</p>`
    })

  // Toggle between Grid and List view
  gridViewBtn.addEventListener("click", () => {
    container.classList.remove("list-view")
    container.classList.add("grid-view")
  })

  listViewBtn.addEventListener("click", () => {
    container.classList.remove("grid-view")
    container.classList.add("list-view")
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      container.classList.add("grid-view")
      container.classList.remove("list-view")
    }
  })
})
