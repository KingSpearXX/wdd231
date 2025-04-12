window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
  
    document.getElementById('firstName').textContent = params.get('firstName') || '';
    document.getElementById('lastName').textContent = params.get('lastName') || '';
    document.getElementById('contact').textContent = params.get('contact') || '';
    document.getElementById('email').textContent = params.get('email') || '';
    document.getElementById('membership').textContent = params.get('membership') || '';
  });