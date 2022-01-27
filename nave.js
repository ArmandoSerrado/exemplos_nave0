const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.width = 200;
ctx.height=300;

var nome=navigator.userAgent; 
var direita=39;
var esquerda=37;

if (nome.indexOf('Chrome')!=-1) {
    direita=100;
    esquerda=97;
}

var fundo = new function(){
    this.img = new Image();
    this.img.src = 'fundo.png';  
    this.iniframe =0;
    this.w =200;
    this.h =30;
    this.length=10;
}

var nave =  new function(){
    this.x=88;
    this.y=220;
    this.w=24;
    this.h=24;
    this.frame=1;
    this.img = new Image();
    this.img.src = './player.png';  
}

function limpa(){
    ctx.fillStyle = '#d0e7f9';  
    ctx.rect(0, 0,  ctx.width,  ctx.height);    
    ctx.fill();  
}

function desenha(){
    desenhaFundo();
    ctx.drawImage(nave.img,nave.w*nave.frame,0,nave.w, nave.h,nave.x,nave.y,nave.w, nave.h);  
}

function desenhaFundo(){
    for (let i = 0; i < fundo.length; i++) {
       posicaoOrigemY= fundo.h*((fundo.iniframe+i)% fundo.length);
       y = fundo.h*(fundo.length-i);
       ctx.drawImage(fundo.img,0,posicaoOrigemY,fundo.w, fundo.h,0,y,fundo.w, fundo.h);  
    }
    fundo.iniframe = (fundo.iniframe+1)% fundo.length;
}

var GameLoop = function(){
    desenha();
    setTimeout(GameLoop, 100);
}

GameLoop();


