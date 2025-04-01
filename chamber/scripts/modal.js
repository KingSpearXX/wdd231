const membershipDescriptions = {
  np: "The NP (Non-Profit) Membership is designed for organizations operating in the non-profit sector, offering discounted rates and networking support.",
  bronze: "Bronze members enjoy basic access to our platform, community discussions, and local events — ideal for small startups.",
  silver: "Silver membership includes all Bronze benefits, plus promotional support, event priority, and featured directory placement.",
  gold: "Gold members receive premium visibility, exclusive networking opportunities, and personalized support from our team."
}

const modal = document.getElementById("membership-modal")

function showModal(level) {
  const title = level.charAt(0).toUpperCase() + level.slice(1) + " Membership"
  document.getElementById("modal-title").textContent = title
  document.getElementById("modal-description").textContent = membershipDescriptions[level] || "More details coming soon."
  modal.showModal()
}

function closeModal() {
  modal.classList.add("closing")
  setTimeout(() => {
    modal.close()
    modal.classList.remove("closing")
  }, 200)
}
