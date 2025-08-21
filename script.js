//your JS code here. If required.
    const squares = document.querySelectorAll('.square');

		squares.forEach((sq) => {
		  sq.addEventListener('mouseover', () => {
		    squares.forEach(other => {
		      if (other !== sq) {
		        other.classList.add("coffee");
		      }
		    });
		  });

		  sq.addEventListener('mouseout', () => {
		    squares.forEach(other => {
		      other.classList.remove("coffee");
		    });
		  });
		});