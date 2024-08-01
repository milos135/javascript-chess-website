document.getElementById("menu-icon").addEventListener("click", function () {
  const links = document.getElementById("links");
  links.classList.toggle("show");
});

document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", function () {
    // Close the menu if it's open (for mobile view)
    if (window.innerWidth <= 480) {
      const links = document.getElementById("links");
      links.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#blog-section img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      // Remove 'enlarged' class from any previously enlarged image
      images.forEach((img) => img.classList.remove("enlarged"));

      // Toggle 'enlarged' class on the clicked image
      this.classList.toggle("enlarged");
    });
  });

  // Optional: Add a click event listener on the document to remove the enlargement
  // when clicking outside the image.
  document.addEventListener("click", function (event) {
    if (!event.target.matches("#blog-section img")) {
      images.forEach((img) => img.classList.remove("enlarged"));
    }
  });
});
