// Example: Show an alert when user clicks "Getting Started"
document.addEventListener("DOMContentLoaded", () => {
  const gettingStarted = document.querySelector("#getting-started h2");

  gettingStarted.addEventListener("click", () => {
    alert("Let's get started with Git!");
  });
});

// Example: Add dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} ShortCourse Git Gen30`;
});
