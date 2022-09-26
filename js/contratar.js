// JavaScript Document
function esconder(elem){
  
  elem.setAttribute("style", "display:none");
}
function mostrar(elem){
  
  elem.removeAttribute("style");
}
function Calendario(){
  
  var hthis= this;
  this.div= document.createElement("div");
  this.div.setAttribute("class", "calendario");
  
  this.divHeader= document.createElement("div");
  this.divHeader.setAttribute("class", "header");
  this.div.appendChild(this.divHeader);
  
  this.divDias= document.createElement("div");
  this.divDias.setAttribute("class", "dias");
  this.div.appendChild(this.divDias);
  
  this.divAjax= document.createElement("div");
  this.divAjax.setAttribute("class", "ajax");
  this.div.appendChild(this.divAjax);
  esconder(this.divAjax);
  
  this.hoje= new Date();
  var amanha= new Date(this.hoje.getFullYear(), this.hoje.getMonth()+1, 0),
      primeiroDia= new Date(this.hoje.getFullYear(), this.hoje.getMonth(), 1);
  this.mes= this.hoje.getMonth();
  this.ano= this.hoje.getFullYear();
  var dia1= 1, dia2= amanha.getDate(), diaSemana= primeiroDia.getDay();
  
  this.divHeader.innerHTML= Calendario.mes[this.mes];
  
  for(var i=1-diaSemana; i <= amanha.getDate(); i++){
    
    var dia= new DiaCalendario(i, this.mes, this.ano);
    if(i < 1)
      dia.desativado();
    
    dia.clicked= function(){
      
      console.log(this);
    }
    this.divDias.appendChild(dia.div);        
  } 
}

function DiaCalendario(dia, mes, ano, ativado){
  
  var hthis= this;
  this.div= document.createElement("div");
  this.div.setAttribute("class", "dia");
  this.data= new Date(ano, mes, dia);
  this.div.innerHTML= this.data.getDate();
    
  if(ativado !== false)
    this.div.onclick= function(){
      
      hthis.clicked();
    }
  else
    this.setAttribute("class", "dia desativado");

}

DiaCalendario.prototype.desativado= function(){
  
  this.div.setAttribute("class", "dia desativado");
  this.div.onclick= function(){};
}

Calendario.mes= [
"Janeiro",
"Fevereiro",
"Março",
"Abril",
"Maio",
"Junho",
"Julho",
"Agosto",
"Setembro",
"Outubro",
"Novembro",
"Dezembro"
];

window.onload= function(){
  
  var calendario= new Calendario();
  document.getElementById("agendar-orcamento").appendChild(calendario.div);
}