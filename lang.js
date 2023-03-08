const englishButton = document.querySelector('#english-button');
const arabicButton = document.querySelector('#arabic-button');

// English button click event
englishButton.addEventListener('click', () => {
  // Show English content
  document.querySelectorAll('#menu-eng').forEach(el => {
    el.style.display = 'block';
  });
  // Hide Arabic content
  document.querySelectorAll('#menu-ara').forEach(el => {
    el.style.display = 'none';
  });
});

// Arabic button click event
arabicButton.addEventListener('click', () => {
  // Show Arabic content
  document.querySelectorAll('#menu-ara').forEach(el => {
    el.style.display = 'block';
  });
  // Hide English content
  document.querySelectorAll('#menu-eng').forEach(el => {
    el.style.display = 'none';
  });
});
