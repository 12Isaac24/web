<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contacto.css">
    <title>contacto</title>
</head>
<body>

<header>
<div class="container-hero">
            <div class="container hero">
                <div class="customer-support">
                    <i class="fa-solid fa-headset"></i>
                    <div class="content-customer-support">
                        <span class="text">Soporte al cliente</span>
                        <span class="number">+504 8891-0956</span>
                    </div>
                </div>
                <div class="container-logo">
                    <i class="fa-solid fa-spray-can-sparkles"></i>
                    <h1 class="logo"><a href="index.html">Perfumes</a></h1>
                </div>
                
                    <!-- Prueba carrito -->
            <div>
                <ul>
                    <li class="submenu">
                        <img src="imagenes/car.svg " id="img-carrito" alt="">
                        <div id="carrito">
                            <table id="lista-carrito">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                            <a href="#" id="vacia-carrito" class="btn-2">Vaciar Carrito</a>
                        </div>
                    </li>
                </ul>
            </div>
                    <!-- Fin de la prueba carrito -->
                

                </div>
            </div>
        </div>
        <div class="container-navbar">
            <nav class="navbar container">
                <i class="fa-solid fa-bars"></i>
                <ul class="nav-links">
                    <li><a href="index.html">Inicio</a></li>
                    
                    
                    <li><a href="contacto.php">Contacto</a></li>
                    

                </ul>
</header>

    <form method="post">
        <h1>Contactanos</h1>
        <input type="text" name="nombre" placeholder="Nombre">
        <input type="text" name="apellido" placeholder="Apellido">
        <input type="email" name="email" placeholder="Email">
        <textarea type="text" name="comentario" placeholder="Mensaje"></textarea>
        <input  type="submit" name="enviar">
        
    <?php
    include("registro.php");
    ?>
    
    </form>

    


<footer class="footer">
        <div class="container container-footer">
            <div class="menu-footer">
                <div class="contact-info">
                    <p class="title-footer">Informacion de Contacto</p>
                    <ul>
                        <li>Direccion: Choloma, Cortes. Honduras</li>
                        <li>Telefono: +504 8891-0956</li>
                        <li>Email: Perfumes@gmail.com</li>
                    </ul>
                    <div class="social-icons">
                        <span class="facebook" >
                        <a href="https://www.facebook.com/"> <i class="fa-brands fa-facebook"></a></i></span>
                        
                        <span class="instagram" ></a>
                        <a href="https://www.instagram.com/"> <i class="fa-brands fa-instagram"></a></i></span>
                        
                        <span class="threads" >
                        <a href="https://www.threads.net/?hl=es-la"> <i class="fa-brands fa-threads"></a></i></span>
                        
                        <span class="X-twitter" >
                        <a href="https://x.com/?lang=es"> <i class="fa-brands fa-x-twitter"></a></i></span>
                        
                    </div>
                </div>

                <div class="information">
                    <p class="title-footer">Perfumes</p>
                    <ul>
                        <li><a href="index.html">Pagina Principal</a></li>
                        <li><a href="catalogoH.html">Perfumes para Hombre</a></li>
                        <li><a href="catalogoM.html">Perfumes para Mujer</a></li>
                    </ul>
                </div>


                

            </div>
        </div>
        <div class="copyright">
            <P>
                Desarrollado por F.I.M.H &copy; 2024
            </P>

            <img src="imagenes/payment (1).png" alt="Pagos">
            
        </div>
    </footer>

    <!-- Iconos -->
    <script src="https://kit.fontawesome.com/e394427575.js" 
    crossorigin="anonymous"
    ></script>

    <!-- Conexion JS -->
<script src="Java.js"></script>

</body>
</html>