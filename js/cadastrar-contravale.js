// JavaScript Document
window.onload= function(){
  
  var inValor= new InputValor();
  inValor.inputReal.setAttribute("name", "valor");
  $("#valor").append(inValor.input, inValor.inputReal);
  $("#in-numero").focus();
}