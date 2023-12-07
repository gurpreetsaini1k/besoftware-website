  // Add a scroll event listener to update the progress bar
  document.addEventListener('scroll', function() {
    var scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrolled = (window.scrollY / scrollableHeight) * 100;
    updateProgressBar(scrolled);
  });

  // Function to update the progress bar width
  function updateProgressBar(value) {
    // Limit the value within the range of 0 to 100
    value = Math.min(100, Math.max(0, value));
    var progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.style.width = value + '%';
      progressBar.setAttribute('aria-valuenow', value);
    }
  }