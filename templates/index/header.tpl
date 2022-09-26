<div class="header" id="main-header">
  <div class="usuario">
    <span class="boas-vindas">Olá, <?php echo Session::$usuario['nome']?></span>
    <a href="<?php echo URL::criar('index/logout')?>" class="btn-logout">Sair</a>
  </div>
  <ul class="nav nav-pills">
  <?php foreach($paginas as $pagina){?>
    <li class="pagina" role="presentation">
      <a href="<?php echo URL::criar($pagina['link'])?>"><?php echo $pagina['nome']?></a>
    </li>
  <?php }?>
  </ul>
</div>