<?php
include 'db.php';

$para = json_decode(file_get_contents("php://input"));
$sql = '';

try {
    foreach ($para as $key => $value) {
        $sql .= "UPDATE `system` SET value = '$value->value' WHERE name = '$value->name';";
    }
    $sth = $conn->prepare($sql);
    $sth->execute();
    echo true;
} catch (\Throwable $th) {
    echo false;
}
$conn = null;
