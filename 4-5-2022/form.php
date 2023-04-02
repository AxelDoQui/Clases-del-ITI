<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

<h1 class="titulo">Datos del formulario</h1>
<h2 class="titulo">estos son los datos que hs envido: </h2>
<div class="texto">
<?php

$nombre = $_GET['nombre'];
$edad = $_GET['edad'];
$cumple = $_GET['cumple'];
$mail = $_GET['mail'];
$mensaje = $_GET['mensaje'];

echo"Nombre: ".$nombre,"<br/>"
echo"Edad: ".$edad,"<br/>"
echo"Cumpleaños: ".$cumple,"<br/>"
echo"E-mail: ".$mail,"<br/>"
echo"Tu mensaje: ".$mensaje,"<br/>"
?>
<br><br>
<button type="button">
    <a href="index.html" class="button">Volver l Inicio</a>
</button>
</div>
</body>
</html>