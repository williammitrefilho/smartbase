window.onload= function(){
  
  var inCliente= new AutoInput();
  inCliente.src= "index.php?c=cliente&op=lista";
  document.getElementById("c-nome-cliente").appendChild(inCliente.input);
  document.getElementById("c-nome-cliente").appendChild(inCliente.div);
  inCliente.escolheuNome= function(nome){
    
    document.getElementById("in-cliente").value= nome.dados.id;
  }
}