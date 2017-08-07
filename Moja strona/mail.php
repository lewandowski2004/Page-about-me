<?php
$to      = 'radek.lewandowski2004@gmail.com';
$name = $_POST['name'];
$message = $_POST['message'];
$headers = 'From: ' . $_POST['email'] ."\r\n" .
    'Content-type: text/html; charset=iso-8859-1';

mail($to, $name, $message, $headers);
header('location: index.html');
?>