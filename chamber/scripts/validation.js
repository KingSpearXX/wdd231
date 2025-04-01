document.getElementById("membershipForm").addEventListener("submit", function (e) {
  const phone = document.getElementById("phone")
  const email = document.getElementById("email")

  if (!phone.checkValidity()) {
    e.preventDefault()
    showValidationModal("Invalid Phone Number", "Please enter a valid phone number (10–15 digits).")
    return
  }

  if (!email.checkValidity()) {
    e.preventDefault()
    showValidationModal("Invalid Email Address", "Please enter a valid email address.")
    return
  }
})
