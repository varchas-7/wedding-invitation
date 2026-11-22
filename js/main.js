(() => {
  // Wedding ceremony: 15 February 2027, 10:00 AM Malaysia/India local display time.
  // The browser interprets this as local time; the countdown is a convenience display.
  const target = new Date(2027, 1, 15, 10, 0, 0).getTime();
  const ids = ["days", "hours", "minutes", "seconds"];
  function updateCountdown() {
    const diff = Math.max(0, target - Date.now());
    const values = [
      Math.floor(diff / 86400000),
      Math.floor(diff / 3600000) % 24,
      Math.floor(diff / 60000) % 60,
      Math.floor(diff / 1000) % 60
    ];
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(values[i]).padStart(2, "0");
    });
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
