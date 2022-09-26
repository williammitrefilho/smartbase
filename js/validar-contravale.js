// JavaScript Document
window.onload= function(){
  $("#in-numero").focus();
  $("#ajax").hide();
  $("#in-numero").blur(function(){
    
    if(this.value == "")
      return;
      
    $("#ajax").show();
    var xhr= ajaxRequest("GET", "?c=contravale&op=consultar&id="+this.value, function(dados){
      $("#ajax").hide();
      if(dados.indexOf("erro")>-1){
        
        alert("erro"+dados);
        return false;        
      }
      var cv= eval("("+dados+")");
      $("#in-valor").text( Number(cv.valor).toFixed(2));
      $("#in-v-valor").val(cv.valor);
      console.log(Number(cv.status));
      if(Number(cv.status) > 0)
        $("#btn-validar").attr("disabled", "true");
      else
        $("#btn-validar").removeAttr("disabled");
    });
    xhr.send();
  });
}