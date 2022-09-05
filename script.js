window.onload =function() {
  function button() {
      const clickPaleta = document.querySelectorAll('.color');
      const newButton = document.getElementById('button-random-color');
      
      newButton.addEventListener('click', () => {
        for (let index = 0; index < clickPaleta.length; index += 1) {
          const cor1 = Math.floor(Math.random() * 255);
          const cor2 = Math.floor(Math.random() * 255);
          const cor3 = Math.floor(Math.random() * 255);
          localStorage.setItem('colorPalette', JSON.stringify(newButton));
          if (index === 0) {
            clickPaleta[index].style.backgroundColor = 'black';
          } else {
            clickPaleta[index].style.backgroundColor = `rgb(${cor1}, ${cor2}, ${cor3})`;
          }


        }
      });
    }
    button();
    let save = localStorage.getItem('colorPalette');
   
    const pixel = document.querySelectorAll('pixel');
    
    function anotherColorSelected(event) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
    clickPaleta[0].addEventListener('click', anotherColorSelected);
    clickPaleta[1].addEventListener('click', anotherColorSelected);
    clickPaleta[2].addEventListener('click', anotherColorSelected);
    clickPaleta[3].addEventListener('click', anotherColorSelected);
  
    
    function paint(event) {
      const paintpixel = document.getElementsByClassName('selected')[0];
      event.target.style.backgroundColor = paintpixel.style.backgroundColor;
    }
    
    for (let index = 0; index < 25; index += 1) {
      let square = document.getElementsByClassName('pixel')[index];
    
      square.addEventListener('click', paint);
    }

    const positionButtonClear = document.querySelector('#clear-board');
    function clear() {
      for (let index = 0; index < 25; index += 1) {
        const square = document.getElementsByClassName('pixel')[index];
        square.style.backgroundColor = 'white';
      }
    }
    positionButtonClear.addEventListener('click', clear);
  
  
  }



  const clickPaleta = document.querySelectorAll('.color'); 
  
