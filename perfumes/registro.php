<?php  
include("con_db.php");
if (isset($_POST['enviar'])) {
    if(strlen($_POST['nombre']) >= 1 && strlen($_POST['apellido']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['comentario']) >= 1) {
        $name = trim($_POST['nombre']); 
        $apellido = trim($_POST['apellido']);
        $email = trim($_POST['email']);
        $comentario = trim($_POST['comentario']);
        $fechareg = date ("d/m/y");
        $consulta = "INSERT INTO datos (nombre,apellido,email,comentario,fecha_reg) VALUES ('$name','$apellido','$email','$comentario','$fechareg')";
        $resultado = mysqli_query($conex,$consulta);
        if ($resultado) {
            ?>
                <h3 class="ok">Gracias por Contactarte con nosotros</h3>
            <?php
        } else {
            ?>
                <h3 class="bad">Ups,algo salio mal,vuelve a intentarlo</h3>
            <?php
        }
    } else {
        ?>
            <h3 class="bad"> Por favor, rellena los campos</h3>
        <?php
    }
}
?>
