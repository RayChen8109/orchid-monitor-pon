<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json');
header('Accept: application/json');

$servername = "localhost";
$username = "root";
$password = "810109";
$dbname = "exercise";

try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //$conn = new mysqli($servername, $username, $password, $dbname);
    // 避免中文亂碼的指令
    $conn->query("SET NAMES 'utf8'");
}
catch (PDOException $e) {
    echo "Connected failed : " . $e->getMessage();
}
?>