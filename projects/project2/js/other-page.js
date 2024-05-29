
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
      header.addEventListener("click", function () {
          const content = this.nextElementSibling;
          const isOpen = content.style.display === "block";

          // Close all accordion content
          document.querySelectorAll(".accordion-content").forEach(content => {
              content.style.display = "none";
          });

          // Toggle the current accordion content
          if (!isOpen) {
              content.style.display = "block";
          }
      });
  });
});


  function showToast(message) {
    var toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

