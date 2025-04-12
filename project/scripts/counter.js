let reloadCount = localStorage.getItem("reloadCount") || 0;

reloadCount++;

localStorage.setItem("reloadCount", reloadCount);

function getOrdinalSuffix(number) {
  if (number % 10 === 1 && number % 100 !== 11) return "st";
  if (number % 10 === 2 && number % 100 !== 12) return "nd";
  if (number % 10 === 3 && number % 100 !== 13) return "rd";
  return "th";
}

document.addEventListener("DOMContentLoaded", () => {
  reloadCount = `${reloadCount}${getOrdinalSuffix(reloadCount)}`;
  document.getElementById("counter").textContent = reloadCount;
});
