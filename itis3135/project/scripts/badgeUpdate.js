const requestCount = 2;
const matchCount = 3;

document.addEventListener('DOMContentLoaded', () => {
  const intervalId = setInterval(() => {
    const requestBadge = document.getElementById('reqBadgeId');
    const matchBadge = document.getElementById('matBadgeId');

    if (requestBadge && matchBadge) {
      requestBadge.textContent = requestCount;
      matchBadge.textContent = matchCount;
      clearInterval(intervalId); // Stop checking once updated
    }
  }, 100); // Check every 100 milliseconds
});

