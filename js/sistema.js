// JavaScript Document
function ajaxRequest(metodo, url, callback){
  
  var xhr = new XMLHttpRequest();
  xhr.open(metodo, url, true);
  xhr.onreadystatechange = function(){
    
    if(this.readyState == 4 && this.status == 200){
      
      console.log(url, this.responseText);
      callback(this.responseText);
    }
    else if(this.readyState == 4){
      
      alert("erro ajax");
    }
  }
  if(metodo == "POST"){
    
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  return xhr;
}

function esconder(elem){
  
  if(!elem.attributes["style"]){
    elem.setAttribute("style", "display:none");
    return;
  }
    
  var params= elem.attributes["style"].value.split(";"), k=0;
  for(var i=0; i < params.length; i++){
    
    var pts= params[i].split(":");
    if(pts[0] == "display"){
      
      pts[1]= "none";
      params[i]= pts.join(":");
      elem.setAttribute("style", params.join(";"));
      return;
    }
  }
  params.push("display:none");
  elem.setAttribute("style", ""+params.join(";"));    
}

function mostrar(elem){
  
  if(!elem.attributes["style"])
    return;  
  
  var params= elem.attributes["style"].value.split(";");
  for(var i=0; i < params.length; i++){
    
    var pts= params[i].split(":");
    if(pts[0] == "display"){
      
      params.splice(i, 1);
      break;
    }
  }
  elem.setAttribute("style", ""+params.join(";"));    
}
function next(input, input2){
  
  input.onkeyup= function(){
    
    if(this.value.length == this.attributes.maxlength.value)
      input2.focus();
  }
}

function nextFunc(input, callback){
  
  input.onkeyup= function(e){
  
    if(e.keyCode== 17)
      return;
    
    if(this.value.length == this.attributes.maxlength.value)
      callback();
  }  
}

function InIpte(){
  
  var hthis= this;
  this.div= document.createElement("div");
  this.div.setAttribute("class", "iptes");
  
  this.in1= document.createElement("input");
  this.in1.setAttribute("class", "in ipte i1");
  this.in1.setAttribute("maxlength", 5);
  this.in1.setAttribute("size", 5);
    
  this.in2= document.createElement("input");
  this.in2.setAttribute("class", "in ipte i2");
  this.in2.setAttribute("maxlength", 5);
  this.in2.setAttribute("size", 5);
    
  this.in3= document.createElement("input");
  this.in3.setAttribute("class", "in ipte i3");
  this.in3.setAttribute("maxlength", 5);
  this.in3.setAttribute("size", 5);
    
  this.in4= document.createElement("input");
  this.in4.setAttribute("class", "in ipte i4");
  this.in4.setAttribute("maxlength", 6);
  this.in4.setAttribute("size", 6);
    
  this.in5= document.createElement("input");
  this.in5.setAttribute("class", "in ipte i5");
  this.in5.setAttribute("maxlength", 5);
  this.in5.setAttribute("size", 5);
    
  this.in6= document.createElement("input");
  this.in6.setAttribute("class", "in ipte i6");
  this.in6.setAttribute("maxlength", 6);
  this.in6.setAttribute("size", 6);
    
  this.in7= document.createElement("input");
  this.in7.setAttribute("class", "in ipte i7");
  this.in7.setAttribute("maxlength", 1);
  this.in7.setAttribute("size", 1);
  
  this.in8= document.createElement("input");
  this.in8.setAttribute("class", "in ipte i8");
  this.in8.setAttribute("maxlength", 14);
  this.in8.setAttribute("size", 14);
  
  this.div.appendChild(this.in1);
  this.div.appendChild(this.in2);
  this.div.appendChild(this.in3);
  this.div.appendChild(this.in4);
  this.div.appendChild(this.in5);
  this.div.appendChild(this.in6);
  this.div.appendChild(this.in7);
  this.div.appendChild(this.in8);
  
  next(this.in1, this.in2);
  next(this.in2, this.in3);
  next(this.in3, this.in4);
  next(this.in4, this.in5);
  next(this.in5, this.in6);
  next(this.in6, this.in7);
  next(this.in7, this.in8);
  nextFunc(this.in8, function(){
    
    hthis.linha= hthis.in1.value
          + "."+hthis.in2.value
          + " "+hthis.in3.value
          + "."+hthis.in4.value
          + " "+hthis.in5.value
          + "."+hthis.in6.value
          + " "+hthis.in7.value
          + " "+hthis.in8.value;
    
    console.log(hthis.linha);
    hthis.concluiuPreenchimento(hthis.linha);              
  });
  this.concluiuPreenchimento= function(){};       
}

function AutoInput(){
  
  var hthis= this;
  this.minLength= 3;
  this.oldLength= 0;
  this.input= document.createElement("input");
  this.input.setAttribute("type", "text");
  this.div= document.createElement("div");
  this.div.setAttribute("class", "auto-nomes");  
  this.divNomes= document.createElement("div");
  this.divAjax= document.createElement("div");
  this.divAjax.setAttribute("class", "ajax");  
  this.div.appendChild(this.divAjax);
  this.div.appendChild(this.divNomes);
  this.divAjax.innerHTML= "<img src='img/ajax.gif'>";
  esconder(this.divAjax);
  esconder(this.div);
  this.nomes= [];
  
  this.src= "op.php?c=fornecedor&op=lista";
  this.input.onblur= function(){
    
    esconder(hthis.div);
  }
  this.div.onmousedown= function(e){
    
    e.preventDefault();
  }
  this.input.onkeyup= function(){
    
    if(this.value.length < hthis.minLength)
      return;
      
    this.nomeEscolhido= null;
    mostrar(hthis.div);
    mostrar(hthis.divAjax);
    esconder(hthis.divNomes);

    var xhr= ajaxRequest("GET", hthis.src+"&nome="+this.value, function(dados){
      
      esconder(hthis.divAjax);
      var nomes= eval("("+dados+")");
      hthis.setNomes(nomes);
      mostrar(hthis.divNomes);
      return;
    });
    xhr.send(/*"nome="+this.value*/);
    hthis.inputKeyUp();
    hthis.oldLength= this.value.length;    
  }
  this.inputKeyUp= function(){};
  
  this.clickedNome= function(nome){
    
    this.input.value=nome.dados.nome;
    esconder(this.div);
    this.nomeEscolhido= nome;
    this.escolheuNome(nome); 
  };
  this.escolheuNome= function(){};
}

AutoInput.prototype.setNomes= function(nomes){
  
  var hthis= this;
  while(this.nomes.length > 0){
    
    var nome= this.nomes.pop();
    this.divNomes.removeChild(nome.div);
  }
  
  for(var i=0; i < nomes.length; i++){
    
    var nome= new NomeAuto(nomes[i]);
    this.divNomes.appendChild(nome.div);
    nome.clicked= function(){
      
      hthis.clickedNome(this);
    }
    this.nomes.push(nome);
  }
}

function InputValor(){
  
  var hthis= this;
  this.input= document.createElement("input");
  this.inputReal= document.createElement("input");
  this.inputReal.setAttribute("type", "hidden");
  
  this.input.onkeyup= function(){
    
    var v= (this.value.replace(/[^0-9]/, "")/100).toFixed(2).toString(),
        pts= v.split(".");
        
    hthis.inputReal.value= Number(v);        
    hthis.input.value= pts[0]+","+pts[1];
  }
}

function NomeAuto(dados){
  
  var hthis= this;
  this.dados= dados;
  
  this.div= document.createElement("div");
  this.div.setAttribute("class", "nome");
  this.div.innerHTML= this.dados.nome;
  this.div.onclick= function(){
    
    hthis.clicked();
  }
  this.clicked= function(){};
}

Number.prototype.zeroPad= function(){
  
  var s= this.toString();
  while(s.length < 2){
    
    s= "0"+s;
  }
  return s;
}

Date.prototype.formatBR= function(){
  
  return this.getDate().zeroPad()+"/"+(this.getMonth() + 1).zeroPad()+"/"+this.getFullYear();
}

Date.prototype.formatUS= function(){
  
  return this.getFullYear()+"-"+(this.getMonth() + 1).zeroPad()+"-"+this.getDate().zeroPad();
}

function InputCalendario(){
  
  var hthis= this;
  this.input= document.createElement("input");
  this.input.onkeyup= function(e){
    
    e.preventDefault();
  }
  
  this.calendario= new Calendario();
  esconder(this.calendario.div);
  this.input.onblur= function(){
    
    esconder(hthis.calendario.div);
  }
  this.input.onfocus= function(){
    
    mostrar(hthis.calendario.div);
  }
  this.calendario.clickedDia= function(dia){
    
    hthis.input.value=dia.data.formatUS();
    esconder(this.div); 
  }
}

function Calendario(){
  
  var hthis= this;
  this.div= document.createElement("div");
  this.div.onmousedown= function(e){
    
    e.preventDefault();
  }
  this.div.setAttribute("class", "calendario");
  
  this.divHeader= document.createElement("div");
  this.divHeader.setAttribute("class", "header");
  this.div.appendChild(this.divHeader);
  
  this.btnMenos= document.createElement("span");
  this.btnMenos.innerHTML= "<";
  this.btnMenos.setAttribute("class", "btn menos");
  this.divHeader.appendChild(this.btnMenos);
  this.btnMenos.onclick= function(){
    
    hthis.setMes(hthis.mes - 1, hthis.ano);
  }
  
  this.spanNome= document.createElement("span");
  this.spanNome.setAttribute("class", "nome mes");
  this.divHeader.appendChild(this.spanNome);
  
  this.btnMais= document.createElement("span");
  this.btnMais.innerHTML= ">";
  this.btnMais.setAttribute("class", "btn mais");
  this.divHeader.appendChild(this.btnMais);
  this.btnMais.onclick= function(){
    
    hthis.setMes(hthis.mes + 1, hthis.ano);
  }
  
  this.divDias= document.createElement("div");
  this.divDias.setAttribute("class", "dias");
  this.div.appendChild(this.divDias);
  
  this.divAjax= document.createElement("div");
  this.divAjax.setAttribute("class", "ajax");
  this.div.appendChild(this.divAjax);
  esconder(this.divAjax);
  
  this.hoje= new Date();

  this.mes= this.hoje.getMonth();
  this.ano= this.hoje.getFullYear();
  this.setMes(this.hoje.getMonth(), this.hoje.getFullYear());
  
  this.clickedDia= function(){}; 
}

Calendario.prototype.setMes= function(mes, ano){

  var hthis= this;
  while(this.divDias.childNodes.length > 0){
  
    this.divDias.removeChild(this.divDias.childNodes[0]);  
  }
  var amanha= new Date(ano, mes+1, 0),
      primeiroDia= new Date(ano, mes, 1);

  var dia1= 1, dia2= amanha.getDate(), diaSemana= primeiroDia.getDay();
  
  this.mes= primeiroDia.getMonth();
  this.ano= primeiroDia.getFullYear();
  
  this.spanNome.innerHTML= Calendario.mes[this.mes]+"/"+this.ano;
  
  for(var i=1-diaSemana; i <= amanha.getDate(); i++){
    
    var dia= new DiaCalendario(i, this.mes, this.ano);
    if(i < 1)
      dia.desativado();
    
    dia.clicked= function(){
      
      hthis.clickedDia(this);
    }
    this.divDias.appendChild(dia.div);        
  }
} 

function DiaCalendario(dia, mes, ano, ativado){
  
  var hthis= this;
  this.div= document.createElement("div");

  this.data= new Date(ano, mes, dia);
  var hoje= new Date();

  if(hoje.formatUS() == this.data.formatUS())
    this.div.setAttribute("class", "dia hoje");
  else
    this.div.setAttribute("class", "dia");
     
  this.div.innerHTML= this.data.getDate();
  this.div.onmousedown= function(e){
    
    e.preventDefault();
  }
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

function InData(data){
  
  if(data)
    this.data= new Date(data);
  else
    this.data= new Date();
  
  this.div= document.createElement("div");
  this.div.setAttribute("class", "indata");
  
  this.mesAtual= this.data.getMonth();
  console.log(this.mesAtual);
  
}

function DataInData(data){
  
  this.data= new Date(data);
  this.div= document.createElement("div")
}