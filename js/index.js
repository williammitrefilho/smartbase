// JavaScript Document
function esconder(elem){
  
  elem.setAttribute("style", "display:none");
}
function mostrar(elem){
  
  elem.removeAttribute("style");
}
function BarraProgresso(progresso){
  
  this.progresso= Number(progresso).toFixed(0);
  if(this.progresso === NaN || this.progresso < 0 || this.progresso > 100)
    return false;
  
  this.div= document.createElement("div");
  this.div.setAttribute("class", "barra-progresso");
  
  var div= document.createElement("div");
  div.setAttribute("class", "texto-progresso"); 
  div.innerHTML= this.progresso+"%";
  
  this.divProg= document.createElement("div");
  this.divProg.setAttribute("class", "progresso");
  this.divProg.setAttribute("style", "width:"+this.progresso+"%");
  this.divProg.appendChild(div);
  
  this.div.appendChild(this.divProg);  
}

window.onload= function(){
  
  var p=document.getElementById("progresso-obra");
  var bp= new BarraProgresso(Number(p.innerHTML));
  p.innerHTML= "";
  p.appendChild(bp.div);
}