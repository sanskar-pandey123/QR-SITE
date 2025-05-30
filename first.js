// Custom Cursor Effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        document.querySelector('.cursor').classList.add('hover');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A') {
        document.querySelector('.cursor').classList.remove('hover');
    }
});
// typewriter

  const text = ["Explore our services.", "Discover our history.", "Learn more about us."];
  let count = 0, index = 0, currentText = '', letter = '';
  
  (function type() {
    if (count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter').textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 100);
    }
  })();




  window.addEventListener('scroll', function () {
    document.querySelectorAll('.feature-card').forEach(card => {
      const pos = card.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.2;
      if (pos < screenPos) {
        card.style.animationPlayState = 'running';
      }
    });
  });

  function freetrial(){
    Window.location.href = "first.html";
    alert("Enjoy Seven Days Free Trial");
  }


  