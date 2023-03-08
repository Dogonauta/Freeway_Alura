 // // Códigos da Vaca

  var xVaca = 300;
  var yVaca = 366;
  var colisao = false;
  
  function mostraVaca(){
    image(imagemDaVaca, xVaca, yVaca, 30, 30);
  }
    
  function movimentaVaca(){
  if (keyIsDown(UP_ARROW)){
    yVaca -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yVaca += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xVaca -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xVaca += 3;
  } 
  if (yVaca > 366)
    yVaca = 366;
  }
  function posicaoInicialVaca(){
     xVaca = 300;
     yVaca = 366;
  }

  function verificaColisao(){
    for ( i = 0; i < xCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xVaca, yVaca, 10)
      if  (colisao) {
      posicaoInicialVaca();
      vidas = vidas -1;
      somColidiu.play();
      }  
    }
  }

  