<?php include ("../connection/db.php"); ?>
<?php
function login(){
    GLOBAL $db;
    if (isset($_GET['login_form']) &&  $_GET['login_form'] == 'true'){
         $email = $_POST['email_login'];
         $password = $_POST['password_login'];
         $query = $db->prepare("SELECT * FROM user WHERE email = ?");
         $query->execute(array($email));
         if ($query->rowCount() == 0){
             echo json_encode(array('error' => 'no_email', 'msg' => 'Sorry, please enter correct email!'));
         }else {
             $result = $query->fetch(PDO::FETCH_OBJ);
             $db_password = $result->password;
             if (password_verify($password, $db_password)) {
                 $name = $result->name;
                 $_SESSION['user_name'] = $name;
                 echo json_encode(array('error' => 'success', 'msg' => 'success.php'));
             } else {
                 echo json_encode(array('error' => 'fail', 'msg' => 'Sorry, please enter correct password!'));
             }
         }
    }
}
login();
?>
