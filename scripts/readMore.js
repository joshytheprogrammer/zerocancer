const readMoreLink = document.getElementById('readMoreLink');
readMoreLink.addEventListener('click', showRemaining);

function showRemaining() {
  const paragraphs = document.querySelectorAll('.toShowText');
  for (let i = 3; i < paragraphs.length; i++) {
    paragraphs[i].style.display = 'block';
    paragraphs[i].classList.add('animate__animated', 'animate__fadeIn');
  }

  // Hide the "Read More" link after showing remaining paragraphs
  document.getElementById('readMoreLink').style.display = 'none';
}