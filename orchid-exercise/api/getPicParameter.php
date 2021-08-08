<?php
$para = json_decode(file_get_contents("php://input"));
include 'db.php';
$sql = "SELECT * FROM `system` WHERE name='sensor_period' 
                                OR name='checktime1' 
                                OR name='checktime2' 
                                OR name='checktime3' 
                                OR name='checktime4' 
                                OR name='checktime5'
                                OR name='fchecktime1'
                                OR name='fchecktime2'
                                OR name='fchecktime3'
                                OR name='fchecktime4'
                                OR name='fchecktime5';";

$sth = $conn->prepare($sql);
$sth->execute();
$data = array();
while($row = $sth->fetchAll(PDO::FETCH_ASSOC)) {
    $data = $row;
}
echo json_encode($data);
$conn = null;
?>