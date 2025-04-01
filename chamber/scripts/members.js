function getRandomSubset(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

async function loadMemberSpotlight(dom) {
  const response = await fetch("./data/members.json")
  const data = await response.json()

  const members = data // no `.members` unless your JSON is wrapped like { "members": [ ... ] }
  const eligible = members.filter(m => m.membershipLevel === "Gold" || m.membershipLevel === "Silver")

  const selected = getRandomSubset(eligible, 3)

  const cardsHTML = selected
    .map(
      member => `
      <div class="member-card">
        <img src="${member.logo}" alt="${member.name} logo">
        <div class="member-details">
          <h4>${member.name}</h4>
          <p>${member.description}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        </div>
      </div>
    `
    )
    .join("")

  dom.innerHTML = cardsHTML
}

const spotlightSection = document.querySelector(".member-spotlight")
loadMemberSpotlight(spotlightSection)
