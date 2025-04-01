function getFormParams() {
  const params = new URLSearchParams(window.location.search)

  return {
    firstName: params.get("firstName"),
    lastName: params.get("lastName"),
    title: params.get("title"),
    email: params.get("email"),
    phone: params.get("phone"),
    organization: params.get("organization"),
    membership: params.get("membership"),
    description: params.get("description")
  }
}

function displayThankYouMessage() {
  const data = getFormParams()
  const container = document.getElementById("confirmationdata")

  if (!data.firstName) {
    container.innerHTML = "<p>Sorry, we couldn't find your form submission.</p>"
    return
  }

  container.innerHTML = `
    <h2>Thank You, ${data.firstName} ${data.lastName}!</h2>
    <p>Your application for <strong>${data.membership}</strong> membership has been received.</p>
    <p><strong>Title:</strong> ${data.title}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Organization:</strong> ${data.organization}</p>
    <p><strong>Description:</strong> ${data.description}</p>
  `
}

window.addEventListener("DOMContentLoaded", displayThankYouMessage)
