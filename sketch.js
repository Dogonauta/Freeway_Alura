function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}



function draw() {
  background(imagemDaEstrada);
  mostraVaca();
  mostraCarros();
  mostraVidas();
  movimentaCarros();
  movimentaVaca();
  voltaPosicaoPistaDeCima();
  voltaPosicaoPistaDeBaixo();
  verificaColisao();
  gameOver();
  mostraPontos();
  marcarPontos();
}

