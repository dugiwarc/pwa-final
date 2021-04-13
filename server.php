<?php 
    if(isset($_POST)) {

        $con = mysqli_connect("mysql-georgebotnaru.alwaysdata.net", "214676_test", "069249335", "georgebotnaru_pwa");

        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $nomAdultes = $_POST['numAdultes'];
        $numEnfants = $_POST['numEnfants'];
        $dateAr = $_POST['dateAr'];
        $dateDep = $_POST['dateDep'];
        $code = $_POST['code'];


        $query = mysqli_query($con, "INSERT INTO orders (nom, prenom, numAdultes, numEnfants, dateDep, dateAr, code) VALUES ('$nom','$prenom','$numAdultes','$numEnfants', '$dateAr', '$dateDep', '$code')");

        if($query) {
            echo 'Success';
        } else {
            echo 'Failure';
        }
    }
?>