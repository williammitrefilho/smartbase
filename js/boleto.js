// JavaScript Document
window.onload= function(){
  
  esconder(document.getElementById("ajax-boleto"));
  esconder(document.getElementById("conteudo-boleto"));
  var st= 0;
  var inFornecedor= new AutoInput(), inIpte= new InIpte();    
  document.getElementById("in-barras").onkeyup= function(e){
    
    if(e.keyCode== 17)
      return;
    document.getElementById("in-cod-barras").value= null;
    if(this.value.length != 44){

      esconder(document.getElementById("conteudo-boleto"));
      return;
    }
    
    mostrar(document.getElementById("ajax-boleto")); 
    mostrar(document.getElementById("conteudo-boleto"));
    esconder(document.getElementById("dados-boleto"));
    
    var xhr= ajaxRequest("POST", "op.php?c=index&op=verBoleto", function(dados){
      
      if(dados.indexOf("invalido") > -1){
        
        esconder(document.getElementById("conteudo-boleto"));        
        alert("codigo invalido");
        return;
      }
      
      esconder(document.getElementById("ajax-boleto")); 
      mostrar(document.getElementById("dados-boleto"));
      var dadosBoleto= eval("("+dados+")");

      document.getElementById("nome-banco").innerHTML= dadosBoleto.banco;
      document.getElementById("data-vencto").innerHTML= dadosBoleto.vencto;
      document.getElementById("valor").innerHTML= dadosBoleto.valor;
      document.getElementById("in-vencto").value= dadosBoleto.venctoUS;
      document.getElementById("in-cod-barras").value= dadosBoleto.codBarras;
                 
    });
    xhr.send("codBarras="+this.value);
  }
  inIpte.concluiuPreenchimento= function(linha){
    
    mostrar(document.getElementById("ajax-boleto")); 
    mostrar(document.getElementById("conteudo-boleto"));
    esconder(document.getElementById("dados-boleto"));
    
    var xhr= ajaxRequest("POST", "op.php?c=index&op=verBoleto", function(dados){

      if(dados.indexOf("invalido") > -1){
        
        esconder(document.getElementById("conteudo-boleto"));
        alert("codigo invalido");
        return;
      }
      
      esconder(document.getElementById("ajax-boleto")); 
      mostrar(document.getElementById("dados-boleto"));
      var dadosBoleto= eval("("+dados+")");

      document.getElementById("nome-banco").innerHTML= dadosBoleto.banco;
      document.getElementById("data-vencto").innerHTML= dadosBoleto.vencto;
      document.getElementById("valor").innerHTML= dadosBoleto.valor;
      document.getElementById("in-vencto").value= dadosBoleto.venctoUS;
      document.getElementById("in-cod-barras").value= dadosBoleto.codBarras;                 
    });
    xhr.send("ipte="+linha);
  }
  
  document.getElementById("check-leitor").onchange= function(){
    
    if(this.checked){
      
      mostrar(document.getElementById("entrada-codbarras"));
      esconder(document.getElementById("entrada-ipte"));     
    }
    else{
      
      esconder(document.getElementById("entrada-codbarras"));
      mostrar(document.getElementById("entrada-ipte"));      
    }
  }

  inFornecedor.input.setAttribute("class", "in nome");
  inFornecedor.input.setAttribute("name", "nfornecedor");
  document.getElementById("nome-fornecedor").appendChild(inFornecedor.input);
  document.getElementById("nome-fornecedor").appendChild(inFornecedor.div);
  inFornecedor.escolheuNome= function(nome){
    
    document.getElementById("in-fornecedor").value=nome.dados.id; 
  }
  inFornecedor.inputKeyUp= function(){
    document.getElementById("in-fornecedor").value=0;    
  }
  document.getElementById("entrada-ipte").appendChild(inIpte.div);
  esconder(document.getElementById("entrada-ipte"));  

}