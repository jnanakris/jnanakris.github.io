const requestCount = 2;
const matchCount = 3;

document.addEventListener('DOMContentLoaded', () => {
  const requestBadge = document.querySelector('a[href="requests.html"] .badge');
  if (requestBadge) requestBadge.textContent = requestCount;

  const matchBadge = document.querySelector('a[href="matches.html"] .badge');
  if (matchBadge) matchBadge.textContent = matchCount;
});
