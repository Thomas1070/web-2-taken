let ctx = document.getElementById('canvas').getContext('2d');
  const WIDTH = 800;
  const HEIGHT = 600;
  function random(number) 
  {
    return Math.round(Math.random() * number)
  }

  
  function makeRGBA(red, green, blue, alpha) 
  {
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  }
  
  function createCircle() {
    let rgbaColor = makeRGBA(random(255), random(255), random(255), random(1))
    ctx.beginPath();
    ctx.fillStyle = rgbaColor;
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }

  createCircle();

  let i;
  let hoeveelKeerLoopen = 100;
  for (i = 0; i < hoeveelKeerLoopen; i++)
  {
    createCircle();
  }
