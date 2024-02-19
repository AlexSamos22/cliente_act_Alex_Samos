<?php

$ciudades = array(
    "Nueva York",
    "Los Ángeles",
    "Chicago",
    "Houston",
    "Fénix",
    "Filadelfia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San José",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Columbus",
    "Indianápolis",
    "Fort Worth",
    "Charlotte",
    "Seattle",
    "Denver",
    "Washington",
    "Londres",
    "París",
    "Berlín",
    "Madrid",
    "Roma",
    "Barcelona",
    "Ámsterdam",
    "Viena",
    "Praga",
    "Dublín"
);



$letra = $_GET['letra']; 
$coincidencias = [];


foreach ($ciudades as $ciudad) {
    if (strtolower(substr($ciudad, 0, 1)) == strtolower($letra)) {
        $coincidencias[] = $ciudad;
    }
}

echo json_encode($coincidencias);
?>
