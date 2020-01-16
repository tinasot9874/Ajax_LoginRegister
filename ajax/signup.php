<?php
include ("../connection/db.php");
function check_email(){
    GLOBAL $db;
    if (isset($_POST['check_email'])){
        $email = $_POST['check_email'];
        $query = $db->prepare("SELECT email FROM user WHERE email =?");
        $query->execute(array($email));
        if ($query->rowCount() == 0){
            echo json_encode(array('error' => 'email_success'));
        }else{
            echo json_encode(array('error' => 'email_fail', 'message' => 'Sorry, this email is already exist'));
        }
    }
}
check_email();

function signup(){
    GLOBAL $db;
    if (isset($_GET['signup']) && $_GET['signup'] == true){
        $name = $_POST['name'];
        $email = $_POST['email_signup'];
        $password = password_hash($_POST['password_signup'], PASSWORD_DEFAULT);
        $query = $db->prepare("INSERT INTO user (name, email, password) VALUES(?,?,?)");
        $query->execute([$name, $email, $password]);
        if ($query){
            echo json_encode(array('error' => 'success'));
        }
    }
}
signup();

?>