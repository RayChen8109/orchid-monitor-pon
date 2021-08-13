<?php

include 'db.php';
$para = json_decode(file_get_contents("php://input"));

$username = $para->user;
$password = $para->password;

$sql = "SELECT * FROM `admin` WHERE user = '$username' AND password = '$password';";

$data = array();

$sth = $conn->prepare($sql);
$sth->execute();
while($row = $sth->fetch(PDO::FETCH_ASSOC)){
    $data = $row;
}
echo json_encode($data);
$conn = null;

?>