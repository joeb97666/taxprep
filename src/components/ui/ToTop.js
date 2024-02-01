
export default function ToTop() {
document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById('back-to-top-btn');
  
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    });
  
    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}