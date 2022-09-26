<?php
class ModelIndex extends ModelBloco{

  public function getPaginas($usuario, $permissao= 7){
    
    $db= Database::getConnection();
    $query = "SELECT p.*, up.usuario FROM paginas p INNER JOIN usuarios_paginas up ON p.id= up.pagina WHERE p.status=1 AND p.permissao <= '".$permissao."' AND up.usuario= '".$usuario."' ORDER BY ordem";
    $stmt = $db->query($query);
    if(!$stmt){
      
      $this->erro = join(";", $db->errorInfo());
      return false;
    }
    $ret = array();
    while($result = $stmt->fetch(PDO::FETCH_ASSOC)){
      
      $ret[] = $result;
    }
    return $ret;
  }  
}
?>