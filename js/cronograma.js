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

function AtividadeObra(dados){
  
  var hthis= this;
  
  this.div= document.createElement("div");
  this.div.setAttribute("class", "atividade");
  
  this.divBarra= document.createElement("div");
  this.divBarra.setAttribute("class", "container-barra");
  
  this.barraProgresso= new BarraProgresso(dados.progresso);
  this.divBarra.appendChild(this.barraProgresso.div);
  
  this.divNome= document.createElement("div");
  this.divNome.setAttribute("class", "nome");
  this.divNome.innerHTML= dados.nome;
  
  this.divDescricao= document.createElement("div");
  this.divDescricao.setAttribute("class", "descricao");
  
  this.divImagem= document.createElement("div");
  this.divImagem.setAttribute("class", "imagem");
  this.srcImg= "img/obra.jpg";
    
  this.imgDescricao= new Image();
  this.divImagem.appendChild(this.imgDescricao);
  
  this.divTexto= document.createElement("div");
  this.divTexto.setAttribute("class", "texto");
  this.divTexto.innerHTML= dados.descricao;
  
  esconder(this.divImagem);
  esconder(this.divTexto);  
  
  this.divAjax= document.createElement("div");
  this.divAjax.setAttribute("class", "ajax");
  var imgAjax= new Image();
  imgAjax.src= "img/ajax.gif";
  this.divAjax.appendChild(imgAjax);
  
  this.divDescricao.appendChild(this.divImagem);
  this.divDescricao.appendChild(this.divTexto);
  this.divDescricao.appendChild(this.divAjax);  
  
  var div= document.createElement("div");
  div.setAttribute("class", "principal");
        
  div.appendChild(this.divNome);
  div.appendChild(this.divBarra);
  this.div.appendChild(div);
  this.div.appendChild(this.divDescricao);      

  esconder(this.divDescricao);
  this.mostrando= false;
    
  this.div.onclick= function(){
    
    if(hthis.mostrando){
      esconder(hthis.divDescricao);
      hthis.mostrando= false;
    }
    else {
      mostrar(hthis.divDescricao);
      hthis.mostrando= true;      
      setTimeout(function(){
        
        esconder(hthis.divAjax);
        mostrar(hthis.divImagem);
        mostrar(hthis.divTexto);
      }, 5000);
/*    hthis.imgDescricao.onload= function(){
        
        esconder(hthis.divAjax);
        mostrar(hthis.divImagem);
        mostrar(hthis.divTexto);
      }*/         
      hthis.imgDescricao.src= hthis.srcImg;
    }  
  }
}

window.onload= function(){
  
  var d= document.getElementById("lista-atividades"), g=document.getElementById("progresso-geral"), ar= [];
  var bp= new BarraProgresso(Number(g.innerHTML));
  g.innerHTML= "";
  g.appendChild(bp.div);
  for(var i=0; i < d.childNodes.length; i++){
    console.log(d.childNodes[i].nodeName);
    if(d.childNodes[i].nodeName != ("DIV" || "div"))
      continue;
      
    var nome= d.childNodes[i].childNodes[0].innerHTML,
        descricao= d.childNodes[i].childNodes[1].innerHTML,
        progresso= d.childNodes[i].childNodes[2].innerHTML;
    
    var at= new AtividadeObra({nome:nome, descricao:descricao, progresso:progresso});
    console.log(at);
    ar.push(at);
  }
  console.log(ar);
  while(d.childNodes.length > 0){
    
    d.removeChild(d.childNodes[0]);
  }
  for(var i=0; i < ar.length; i++){
    
    d.appendChild(ar[i].div);
  }
}