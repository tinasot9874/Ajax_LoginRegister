<?php session_start(); ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax_LoginRegister</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<!--=== NAVBAR ===-->
<nav class="navbar navbar-expand-sm navbar-light bg-light custom-nav">
    <div class="container">
        <a href="#" class="navbar-brand"> Hello <?php if(isset($_SESSION['user_name'])){
                                                        echo "<strong class='username'  style='color: black; display: none;'>". $_SESSION['user_name'] . "</strong>";
                                                }else{
                                                    header("Location: index.php");
                                                }
                                                ?> Welcome to my page !</a>
        <button type="button" class="navbar-toggler" data-target="#mynav" data-toggle="collapse">
            <span class="navbar-toggler-icon"></span>

        </button>
        <div class="collapse navbar-collapse" id="mynav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="index.php" class="nav-link ">Log out <?php unset($_SESSION['user_name']); session_destroy(); ?></a>

                </li>

            </ul>

        </div>

    </div>
</nav>
<div class="container main">
    <div class="row">
        <div class="col-md-12">
        </div>
    </div>
</div>
<!--=== END NAVBAR ===-->
</body>

<script src="assets/js/jquery.min.js" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/simple.js"></script>
<script type="text/javascript" src="assets/js/signup.js"></script>
<script>
    $(document).ready(function () {

        $(".username").fadeIn(4500);
    })
</script>
</html>