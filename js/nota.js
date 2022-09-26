// JavaScript Document
window.onload= function(){
  
  var inNome= new AutoInput();
  inNome.input.name="nfornecedor";
  document.getElementById("container-in-nome").appendChild(inNome.input);
  document.getElementById("container-in-nome").appendChild(inNome.div);
  
  inNome.inputKeyUp= function(){
    
    document.getElementById("in-id-fornecedor").value= 0;
  }
  inNome.escolheuNome= function(nome){
    
    document.getElementById("in-id-fornecedor").value= nome.dados.id;
  }
  var calendario= new Calendario();
  esconder(calendario.div);
  document.getElementById("in-data").parentNode.appendChild(calendario.div);
  document.getElementById("in-data").onfocus= function(){
    
    mostrar(calendario.div);
  }
  document.getElementById("in-data").onblur= function(e){
    
    esconder(calendario.div);
  }
  document.getElementById("in-data").onkeypress= function(e){
    
    e.preventDefault();
  }
  calendario.clickedDia= function(dia){

    document.getElementById("in-data-f").value= dia.data.formatUS();  
    document.getElementById("in-data").value= dia.data.formatBR();
    document.getElementById("in-data").blur();      
    esconder(calendario.div);      
  }  
}