//Bolinha
let xBolinha = 300;
let yBolinha = 200;
let Raio = 18;
let Circuf = Raio / 2;
let VeloX = 7;
let VeloY = 7;
let BolinhaParada = false; 

//Minha Raquete
let xRaquete = 3;
let yRaquete = 150;
let LarguraRaquete = 10;
let AlturaRaquete = 100;

//Raquete Oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let VeloY2;

//Placar
let MeusPontos = 0;
let PontosOponente = 0;


  function setup() {
    createCanvas(600, 400);
  }

  function draw() {
    background("black");
    Bolinha();
    MovimentoBola();
    Colisão();
    Raquete(xRaquete, yRaquete);
    Raquete(xRaquete2, yRaquete2);
    MovimentoRaquete();
    MovimentoRaquete2();
    ColisãoRaquete();
    ColisãoRaquete2();
    Placar();
    Marcador();
  }

  function Bolinha() {
    circle (xBolinha, yBolinha, Raio);
    fill (" white");
  }
  function Raquete(x, y) {
    rect (x, y, LarguraRaquete, AlturaRaquete)
    fill (" white");
  }
  function Raquete2(x, y) {
    rect (x, y, LarguraRaquete, AlturaRaquete)
    fill (" white");
  }
  function MovimentoBola() {
    xBolinha += VeloX;
    yBolinha += VeloY;
  }
  function MovimentoRaquete()   {
    if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
    }
    if (yRaquete < 0) {
    yRaquete = 0;
    }
  if (yRaquete + AlturaRaquete > height) {
    yRaquete = height - AlturaRaquete;
    }
  }

  function MovimentoRaquete2(){
    VeloY2 = yBolinha - yRaquete2 - LarguraRaquete / 2 - 30;
    yRaquete2 += VeloY2;

    if (yRaquete2 < 0) {
    yRaquete2 = 0;
    }
    if (yRaquete2 + AlturaRaquete > height) {
    yRaquete2 = height - AlturaRaquete;
    }
  }
  function Colisão() {
    if (xBolinha + Circuf > width || xBolinha < 0)  {
    VeloX *= -1;
    }
    if (yBolinha + Circuf > height || yBolinha < 0)  {
    VeloY *= -1;
    }
  }
  function ColisãoRaquete() {
    if (xBolinha - Raio < xRaquete + LarguraRaquete && yBolinha     - Raio < yRaquete + AlturaRaquete && yBolinha + Raio >           yRaquete)    {
    VeloX *= -1; 
    } 
  }
  function ColisãoRaquete2() {
    if (xBolinha + Raio > xRaquete2 && yBolinha - Raio <             yRaquete2 + AlturaRaquete && yBolinha + Raio > yRaquete2) {
    VeloX *= -1;
    }
  }
  function Placar() {
    fill("white");
    textAlign(CENTER);
    textSize (16);
    text(MeusPontos, 150, 26);
    text ("-", 300, 26);
    text(PontosOponente, 450, 26)
  }
  function Marcador() {
    if (xBolinha > 599){
    MeusPontos += 1;
    xBolinha = 300; yBolinha = 200;
    }
    if (xBolinha < 1){
    PontosOponente += 1;
    Espere();
    }
  }
  function Espere(){
    BolinhaParada = true;
    VeloX = 0; VeloY = 0;
    xBolinha = 300; yBolinha = 200;
    Mensagem();
    }
  function Mensagem() {
    fill("white");
    textAlign(CENTER);
    textSize(25);
    text("Pressione ENTER!", 300, 200);
    }
  
  function keyPressed() {
  if (keyCode === ENTER && BolinhaParada ) {
    VeloX = 7;
    VeloY = 7;
    BolinhaParada = false;
  }
}
