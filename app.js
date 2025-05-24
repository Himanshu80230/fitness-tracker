document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links (only for same-page links)
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      const targetId = link.getAttribute('href');

      // Check if the link is an internal section (e.g., #progress) or a separate page (e.g., index.html)
      if (targetId.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for sticky header
            behavior: 'smooth',
          });
        }
      } else {
        // Allow normal navigation for other pages
        window.location.href = targetId;
      }
    });
  });
});

document.getElementById('calories-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activityLevel = parseFloat(document.getElementById('activity-level').value);

  // Calculate BMR
  let bmr;
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  // Calculate daily calories needs
  const caloriesNeeds = Math.round(bmr * activityLevel);

  // Display result
  document.getElementById('result').textContent = `${caloriesNeeds} calories/day`;
});



