document.addEventListener('DOMContentLoaded', () => {
   init();
})


  var mousePressed = false;
  var lastX, lastY;
  var ctx;
  let firma;

  function init() {
    // init canvas
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    resetCanvas();
   
    // canvas events
    canvas.onmousedown = function(e) {
      draw(e.layerX, e.layerY);
      mousePressed = true;
    };

    canvas.onmousemove = function(e) {
      if (mousePressed) {
        draw(e.layerX, e.layerY);
      }
    };

    canvas.onmouseup = function(e) {
      mousePressed = false;
    };
    
    canvas.onmouseleave = function(e) {
      mousePressed = false;
    };
  }

  function draw(x, y) {
    if (mousePressed) {
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.lineJoin = 'round';
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
    }
    lastX = x; lastY = y;
  }  
  
  function resetCanvas() {
    // just repaint canvas white
    ctx.fillStyle = '#EEEEEE';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } 

  document.getElementById('btn-clear').addEventListener('click', e => {
     e.preventDefault();
     resetCanvas();
  })

  document.getElementById('btn-save').addEventListener('click', e => {
    e.preventDefault();
    
    firma = canvas.toDataURL('image/png');
    document.getElementById('firma').src = firma;  

  })
