// codigos dos pontos

  var pontos = 0;
  var vidas = 3;
  var perdeu = false;
  
  function mostraPontos(){
    textAlign(CENTER);
    textSize(30);
    fill(color(255,240,60));
    text(pontos, width/2, 29);
    text(vidas, 45, 29);
  }

  function mostraVidas(){
    image(imagemCoracao, 5, 5, 24, 24)
    
  }
  
  function marcarPontos(){
    if (yVaca == 3){
    pontos+= 1;
    somDosPontos.play();
    posicaoInicialVaca();
    } 
  }

  function gameOver(){
    if (vidas == 0){
    perdeu = true;
    pontos = 0;
    vidas = 3;
    }
  }