//your JS code here. If required.
    const squares = document.querySelectorAll('.square');

    squares.forEach((sq) => {
      sq.addEventListener('mouseenter', () => {
        squares.forEach(other => {
          if (other !== sq) {
            other.style.backgroundColor = "#6F4E37"; // Coffee
          }
        });
      });

      sq.addEventListener('mouseleave', () => {
        squares.forEach(other => {
          other.style.backgroundColor = "#E6E6FA"; // Lavender
        });
      });
    });