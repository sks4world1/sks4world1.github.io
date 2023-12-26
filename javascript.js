<script>
    // Your JavaScript code
    const hoverText = document.getElementById('hover-text');
    const displayText = document.getElementById('display-text');

    hoverText.addEventListener('mouseover', function() {
      displayText.style.display = 'block';
    });

    hoverText.addEventListener('mouseout', function() {
      displayText.style.display = 'none';
    });



// JavaScript for FAQ accordion functionality
const accordions = document.getElementsByClassName('accordion');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

  </script>