// JavaScript Document
function AcoesBoleto(id, status){
  
  this.idb= id;
  this.status= status;
  
  var hthis= this;
  this.div = document.createElement("div");
  this.div.setAttribute("class", "acoes");
  
  this.ajax= new Image();
  this.ajax.src= "img/ajax.gif";
  this.ajax.setAttribute("class", "ajax");
  esconder(this.ajax);
  
  this.spanStatus= document.createElement("span");
  this.spanStatus.setAttribute("class", "status");
  this.div.appendChild(this.spanStatus);
  
  this.btnAtualizado= document.createElement("span");
  this.btnAtualizado.setAttribute("class", "btn atualizado");
  this.btnAtualizado.innerHTML= "Marcar como atualizado";
  this.btnAtualizado.onclick= function(){
    
    if(!confirm("Marcar boleto como atualizado?")){
      
      return;
    }
    mostrar(hthis.ajax);
    var xhr= ajaxRequest("GET", "op.php?c=boleto&op=setStatus&bid="+hthis.idb+"&status=2", function(dados){
      esconder(hthis.ajax);
      if(dados.indexOf("erro") > -1){
        
        alert("erro");
        return;
      }
      hthis.status= 2;
      hthis.div.setAttribute("class", "acoes atualizado");
      esconder(hthis.btnPago);
      esconder(hthis.btnAtualizado);
      hthis.spanStatus.innerHTML= "atualizado";      
    });
    xhr.send();
  }
  this.div.appendChild(this.btnAtualizado);
  
  this.btnPago= document.createElement("span");
  this.btnPago.setAttribute("class", "btn pago");  
  this.btnPago.innerHTML= "Marcar como pago";
  this.btnPago.onclick= function(){
    
    if(!confirm("Marcar boleto como pago?")){
      
      return;
    }
    mostrar(hthis.ajax);
    var xhr= ajaxRequest("GET", "op.php?c=boleto&op=setStatus&bid="+hthis.idb+"&status=1", function(dados){
      esconder(hthis.ajax);
      if(dados.indexOf("erro") > -1){
        
        alert("erro");
        return;
      }
      hthis.status= 1;
      hthis.div.setAttribute("class", "acoes pago");
      esconder(hthis.btnPago);
      esconder(hthis.btnAtualizado);
      hthis.spanStatus.innerHTML= "pago";
    });
    xhr.send();
  }
  this.div.appendChild(this.btnPago);
  this.div.appendChild(this.ajax);
  
  if(this.status > 0){
    esconder(this.btnAtualizado);
    esconder(this.btnPago);
    
    if(this.status == 1){
      this.spanStatus.innerHTML= "pago";
      this.div.setAttribute("class", "acoes pago");
    }
    else if(this.status == 2){
      this.spanStatus.innerHTML= "atualizado";
      this.div.setAttribute("class", "acoes atualizado");
    }
  }
}

window.onload= function(){
  
  var inData1= new InputCalendario(), inData2= new InputCalendario();
  
  inData1.input.setAttribute("class", "in data");
  inData1.input.setAttribute("name", "vencto1");
  
  inData2.input.setAttribute("class", "in data");
  inData2.input.setAttribute("name", "vencto2");
  
  document.getElementById("container-vencto-1").appendChild(inData1.input);
  document.getElementById("container-vencto-1").appendChild(inData1.calendario.div);  
  
  document.getElementById("container-vencto-2").appendChild(inData2.input);
  document.getElementById("container-vencto-2").appendChild(inData2.calendario.div);
  
  $(".boleto").each(function(){
    
    console.log(this);
    var ab= new AcoesBoleto($(this).attr("id").replace("b", ""), $(this).attr("class").replace("boleto s", ""));
    $(this).append(ab.div);
  });    
}

function imprimirLista(){
  
  esconder(document.getElementById("main-header"));
  esconder(document.getElementById("form-datas"));
  window.print();
  
  mostrar(document.getElementById("main-header"));
  mostrar(document.getElementById("form-datas"));
}