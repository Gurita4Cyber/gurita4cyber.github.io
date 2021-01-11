<?php 
  $level='one'; 
  $page='home'; 
  require ('inc/base.php')
?>
<?php require ('inc/meta.php')?>
<?php require ('inc/header.php')?>

<div class="site-container">
<h1 class="hide">Firman nabawi</h1>


  <div class="column content_center">
    <ul>
      <li class="column-big column-left">

        <?php require ('module/latest-project.php')?>
        <?php require ('module/big-portofolio.php')?>
        <?php require ('module/small-portofolio.php')?>

      </li>
    </ul>
  </div>


</div>


<?php require ('inc/footer.php')?>