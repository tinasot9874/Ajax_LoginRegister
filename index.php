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
        <a href="#" class="navbar-brand"> Signup and Login</a>
        <button type="button" class="navbar-toggler" data-target="#mynav" data-toggle="collapse">
            <span class="navbar-toggler-icon"></span>

        </button>
        <div class="collapse navbar-collapse" id="mynav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="" class="nav-link ">Home</a>

                </li>

            </ul>

        </div>

    </div>
</nav>
<div class="container">
    <div class="row">
        <div class="col-md-8 content">
            <h1>Welcome to my Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid dignissimos dolorem ducimus ea
                error hic labore molestias quo suscipit tempora tempore veritatis. Atque doloribus ipsam obcaecati
                recusandae sit tempora.</p>

        </div>
        <div class="col-md-4 content">
            <div class="signup-cover">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-9">
                                <h3 class="form-heading">Signup</h3>
                                <p>Creating Account</p>
                            </div>
                            <div class="col-md-3 text-right">
                                <i class="fa fa-pencil-square-o fa-2x"></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Enter Your Name...">
                            </div>
                            <div class="name-error error"></div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Enter Your Email...">
                            </div>
                            <div class="email-error error"></div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password"
                                       placeholder="Enter Your Password...">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="confirm"
                                       placeholder="Confirm Password...">
                            </div>
                        </form>
                        <div class="form-group">
                            <button type="button" id="submit" class="btn btn-success btn-block">Create Account</button>
                        </div>
                        <div class="form-group">
                            <a href="#" id="login">Already have an account? Click here to login page!</a>
                        </div>
                    </div>

                </div>
            </div>
            <div class="login-cover">

                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-9">
                                <h3 class="form-heading">Login</h3>
                                <p>Input your infor</p>
                            </div>
                            <div class="col-md-3 text-right">
                                <i class="fa fa-lock fa-2x"></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Enter Your Email...">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password"
                                       placeholder="Enter Your Password...">
                            </div>
                            <div class="form-group">
                                <button type="button" id="login" class="btn btn-success btn-block">Login Account</button>
                            </div>
                            <div class="form-group">
                                <a href="#" id="signup">Create new account! Click here</a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
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

</html>