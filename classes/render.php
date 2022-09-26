<?php
class Renderer {
  
  private static $titulo_pagina = "";
  private static $output;
  private static $scripts= array();
  
  public static function addScript($script){
    
    self::$scripts[]= $script;
  }

  public static function getOutput(){
      
    $html= '<html>
              <head>
                <meta http-equiv="content-type" content="text/html; charset=utf-8">
                <title>'.self::$titulo_pagina.'</title>';
    $scripts= '';
    foreach(self::$scripts as $script){
      
      $scripts .= '<script type="text/javascript" src="'.DIR_SCRIPTS.$script.'.js"></script>';
    }            
    $html.= $scripts
              .'<link rel="stylesheet" type="text/css" href="css/smart.css">'
              .'<link href="css/bootstrap.min.css" rel="stylesheet">'
              .'</head><body>'.DIR_TEMPLATE.self::$output."</body></html>";
              
    return $html;
  }
  
  public static function getTitulo(){
    
    return self::$titulo_pagina;
  }
  
  public static function renderBloco($bloco){
    
    $pts= explode("/", $bloco);
    $nome= $pts[0];
    if(isset($pts[1]))
      $metodo= $pts[1];
    else
      $metodo= "index";

    if(!is_file(DIR_CONTROLE.$nome.".php") || !is_file(DIR_MODEL.$nome.".php")){
      
      $nome = 'index';
      $metodo = 'nao_encontrado';
    }
    exit("ok");
    require_once DIR_CONTROLE.$nome.".php";
    require_once DIR_MODEL.$nome.".php";
  
    $classe = 'Controle'.$nome;
    $obj = new $classe();
//   print_r($obj);
    if(!method_exists($obj, $metodo)){
      
      $metodo = 'nao_encontrado';
    }
    $obj->$metodo();
    $dados = $obj->_getDados();

    extract($dados);
    $template= $obj->getTemplate();
    if(!$template)
      $template= $nome."/".$metodo;
    
    echo DIR_TEMPLATE;  
    if(!is_file(DIR_TEMPLATE.$template.".tpl"))
      return false;
    ob_start();
    require DIR_TEMPLATE.$template.".tpl";
    self::$output = ob_get_contents();
    ob_end_clean();
    return self::$output;
  }
  
  public static function setTitulo($titulo){
    
    self::$titulo_pagina= $titulo;
  }
}
?>