const readMoreLink = document.getElementById('readMoreLink');
const readLessLink = document.getElementById('readLessLink');
readMoreLink.addEventListener('click', showRemaining);
readLessLink.addEventListener('click', showLess);

function showRemaining() {
  const paragraphs = document.querySelectorAll('.toShowText');
  
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.display = 'block';
    paragraphs[i].classList.add('animate__animated', 'animate__fadeIn');
  }

  // Hide the "Read More" link and show the "Read Less" link
  readMoreLink.style.display = 'none';
  readLessLink.style.display = 'block';
  
}

function showLess() {
  const paragraphs = document.querySelectorAll('.toShowText');
  
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.display = 'none';
  }

  // Show the "Read More" link and hide the "Read Less" link
  readMoreLink.style.display = 'block';
  readLessLink.style.display = 'none';
}
