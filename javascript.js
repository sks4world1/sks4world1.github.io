<script>
    // Your JavaScript code
    document.addEventListener('DOMContentLoaded', function() {
      const hoverText = document.getElementById('hover-text');
      const displayText = document.getElementById('display-text');

      hoverText.addEventListener('mouseover', function() {
        displayText.style.display = 'block';
      });

      hoverText.addEventListener('mouseout', function() {
        displayText.style.display = 'none';
      });
    });
  </script>