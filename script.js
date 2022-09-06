window.onload =function() {
  
  
  const blackBg = document.querySelectorAll('.color')[0];
  const secondBg = document.querySelectorAll('.color')[1];
  const thirdBg = document.querySelectorAll('.color')[2];
  const fourthBg = document.querySelectorAll('.color')[3];
  const button = document.querySelector('#button-random-color');

  function backgroundColor() {
    blackBg.style.backgroundColor = 'black';
    secondBg.style.backgroundColor = 'red';
    thirdBg.style.backgroundColor = 'blue';
    fourthBg.style.backgroundColor = 'green';
  }
  backgroundColor();
  

  
  
  const clickPaleta = document.querySelectorAll('.color');
      
  function selectColor() {
    clickPaleta[0].classList.add('selected');
  }
  selectColor();
  
      
    
      
  function randomColor() {
    button.addEventListener('click', () => {
      for (let index = 1; index < clickPaleta.length; index += 1) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rr = `rgb(${r}, ${g}, ${b})`;
        clickPaleta[index].style.backgroundColor = rr;
        
      }
    });
  }
  
  
      randomColor();
    
    function colorPut() {
      if (localStorage.length !== 0) {
        const recoveredColor = JSON.parse(localStorage.getItem('colorPalette'));
        const recov1 = recoveredColor.cor1;
        const recov2 = recoveredColor.cor2;
        const recov3 = recoveredColor.cor3;
        clickPaleta[1].style.backgroundColor = recov1;
        clickPaleta[2].style.backgroundColor = recov2;
        clickPaleta[3].style.backgroundColor = recov3;
      }
    }
    colorPut();
    
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
  
