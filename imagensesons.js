let imagemDaEstrada;
let imagemDaVaca;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCoracao;

var somDaTrilha;
var somDosPontos;
var somColidiu;

function preload(){
  imagemDaEstrada = loadImage("assents/estrada.png");
  imagemDaVaca = loadImage("assents/ator-1.png");
  imagemCarro1 = loadImage("assents/carro-1.png");
  imagemCarro2 = loadImage("assents/carro-2.png");
  imagemCarro3 = loadImage("assents/carro-3.png");
  imagemCarro4 = loadImage("assents/carro-4.png");
  imagemCarro5 = loadImage("assents/carro-5.png");
  imagemCarro6 = loadImage("assents/carro-6.png");
  imagemCoracao = loadImage("assents/coracao.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];  
  somDaTrilha = loadSound("sound/trilha.mp3");
  somDosPontos = loadSound("sound/pontos.wav");
  somColidiu = loadSound("sound/colidiu.mp3");
}