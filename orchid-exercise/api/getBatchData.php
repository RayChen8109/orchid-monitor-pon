<?php
    $para = json_decode(file_get_contents("php://input"));
    include 'db.php';
    
    $limit = !empty($para->limit) ? $para->limit : null;
    $maxDate = !empty($para->maxDate) ? $para->maxDate : null;
    $minDate = !empty($para->minDate) ? $para->minDate : null;
    
    if($limit != null) {
        $sql = "SELECT * FROM(SELECT * FROM `data` order by datetime desc limit $limit) sub order by id asc;";
    }
    else if($maxDate != null && $minDate != null) {
        $sql = "SELECT * FROM `data` WHERE datetime >= '$minDate' AND datetime <= '$maxDate';";
    }
    else {
        $sql = "SELECT * FROM `data`;";
    }

    $sth = $conn->prepare($sql);
    $sth->execute();
    $data = array();
    while($row = $sth->fetchAll(PDO::FETCH_ASSOC)) {
        $data = $row;
    }
    echo json_encode($data);
    $conn = null;
