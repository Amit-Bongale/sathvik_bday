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

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
});

// Scroll Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};

// Copy Venue

function copyAddress() {
  navigator.clipboard.writeText("Hotel The White Lotus, Udupi");

  const btn = event.target;

  const old = btn.innerHTML;

  btn.innerHTML = "Copied!";

  setTimeout(() => {
    btn.innerHTML = old;
  }, 2000);
}

// Google Calendar

function addCalendar() {
  const title = "SATHVIK Birthday Celebration";

  const location = "Hotel The White Lotus, Udupi";

  const details = "Birthday Celebration";

  const start = "20260629T193000";

  const end = "20260629T223000";

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

  window.open(url);
}
