<?php
class ControleIndex extends ControleBloco{
  
  public function acesso(){
    
    if( isset($_POST['usuario']) && isset($_POST['senha']) ){
//      print_r($_POST);
      $usuario= preg_replace("/[^A-Za-z0-9@\._]/", "", $_POST['usuario']);
      $senha= preg_replace("/[^A-Za-z0-9]/", "", $_POST['senha']);
      
      if(!Session::criar($usuario, $senha, 7)){
        exit("");
//        header("location:index.php?c=index&op=acesso");
        return false;
      }
      header("location:index.php?c=index&op=index");
    }    
  }
  
  public function header(){

    $mi = new ModelIndex();
    $paginas = $mi->getPaginas(Session::$usuario['uid'], Session::$usuario['permissao']);
    $this->_addDado('paginas', $paginas);
  }
  
  public function index(){
      

  }
  
  public function logout(){
    
    Session::encerrar();
    header("location:index.php?c=index&op=acesso");
  }
  
  public function nao_encontrado(){
  
  }
}
?>