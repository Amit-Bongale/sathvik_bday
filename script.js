const birthday = new Date("June 29, 2026 19:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();

  const distance = birthday - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

function copyAddress() {
  navigator.clipboard.writeText("Hotel The White Lotus, Udupi");

  alert("Venue copied to clipboard!");
}

function addCalendar() {
  const title = "Sathvik Birthday Celebration";

  const location = "Hotel The White Lotus, Udupi";

  const start = "20260629T193000";

  const end = "20260629T223000";

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&location=${encodeURIComponent(location)}`;

  window.open(url);
}
