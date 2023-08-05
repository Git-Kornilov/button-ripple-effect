'use strict';

const buttons = document.querySelectorAll('.ripple'); // for many buttons with this class

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // const x = e.clientX;
    // const y = e.clientY;

    // const buttonTop = e.target.offsetTop;
    // const buttonLeft = e.target.offsetLeft;

    // const xInside = x - buttonLeft;
    // const YInside = y - buttonTop;

    // const circle = document.createElement('span');
    // circle.classList.add('circle');
    // circle.style.top = `${YInside}px`;
    // circle.style.left = `${xInside}px`;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${e.clientY - e.target.offsetTop}px`;
    circle.style.left = `${e.clientX - e.target.offsetLeft}px`;

    this.appendChild(circle); // use function() - not arrow () => {} - because 'this'

    setTimeout(() => circle.remove(), 500);
  });
});
