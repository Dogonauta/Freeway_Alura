// Códigos Carros 

  var xCarros = [600, 600, 600, 0, 0, 0];
  var yCarros = [40, 96, 150, 320, 265 , 212];
  var velocidadeCarros = [2.2, 3, 5, -1.5, -2.8, -4.2];

  function mostraCarros(){
    for (i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    } 
  }

  function movimentaCarros(){ 
    for ( i = 0; i< xCarros.length; i++ ){
    xCarros[i] -= velocidadeCarros[i];
    }
  }

  function voltaPosicaoPistaDeCima(){ 
    for (i = 0; i <3; i++){
      if(xCarros[i] < -100 || perdeu == true){
    xCarros[i] = 600;   
      }
    }
  }

  function voltaPosicaoPistaDeBaixo(){ 
    for (i = 3; i< 6; i++){   
      if(xCarros[i] > 700 || perdeu == true){
      xCarros[i] = 0;  
      }
    }
        if (perdeu == true){
          perdeu = false;
        }
  }