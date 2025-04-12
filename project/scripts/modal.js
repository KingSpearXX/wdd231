const membershipDetails = {
    bronze: ['Learns the recipe of taho'],
    silver: ['Learns the recipe of taho', 'Learns packaging'],
    gold: ['Learns the recipe of taho', 'Learns packaging', 'Learns marketing strategy']
  };

  function openModal(level) {
    document.getElementById('modal-title').innerText = level.charAt(0).toUpperCase() + level.slice(1) + ' Membership';
    const list = document.getElementById('modal-content-list');
    list.innerHTML = '';
    membershipDetails[level].forEach(item => {
      const li = document.createElement('li');
      li.innerText = item;
      list.appendChild(li);
    });
    document.getElementById('modal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  // Close modal on outside click
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }