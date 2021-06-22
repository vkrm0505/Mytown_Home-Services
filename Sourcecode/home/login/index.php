<?php include("../../connection.php");
if(isset($_POST['submit']))
{
  //  echo"<script> alert('submitted');</script>";
            session_start();
            $email=$_POST['email'];
            $pass=$_POST['pass'];
            $to=$_POST['type'];
            include("../../connection.php");

            $qu="SELECT * FROM $to WHERE email='$email' AND pass='$pass'";
                
            if ($res = mysqli_query($con,$qu))
            {
                $rowcount = mysqli_num_rows($res);
                $row = $res->fetch_assoc();
            }
            if($rowcount==0)
            { 
                    echo "<script> alert('invalid credentials');</script>";
                    
            }
            if($rowcount==1)
            {
                    $_SESSION["name"]=$email;
                    $_SESSION["na"]=$row['name'];
                    $_SESSION["typ"]=$to;
                   


                if($to=="workers")
                {
                   
                    header("Location: ../spp/profile.php");
                }
                if($to=="customers")
                {
                    
                    header("Location: ../../services/index.php");
                }
                
                    
            }


mysqli_close($con);

}


?>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>My Town Home-Services , Carpenters, Electricians, Plumbers</title>

    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE = edge">

    <!-- Stylesheets -->
    <link href="../../assets/css/styles4853654356.min.css" rel="stylesheet"/>
   
    <link rel="shortcut icon" href="../../assets/images/favicon1.ico" type="image/x-icon">
    <link rel="icon" href="../../assets/images/favicon1.ico" type="image/x-icon">


    <script src="../../assets/js/jquery.min.js"></script>
    <script type="text/javascript">
        CI_ROOT = "../../index.php";
    </script>
</head>
<body>
<div class="page-overlay"></div>
<!-- Start Header Section -->
<header id="header">
    <nav class="main-navigation navbar-fixed-top" role="navigation" data-spy="affix" data-offset-top="200">
        <div class="container-fluid">
            <div class="row">

                <div class="navbar-header">

                    <div class="logo">
                        <a href="../../" class="navbar-brand"><h2>My Town Home-Services</h2></a>
                    </div>
                    <div class="mlogo">
                        <a href="../../" class="navbar-brand"><h2>My Town Home-Services</h2></a>
                    </div>
                </div>

                <div class="top-contact">
                    <span class="num"><i class="fa fa-phone"> </i>XXXXXXXXX</span>
                </div>

                <!-- Start Navigation Menu -->

                <div id="main_navMenu">
                    <ul class="nav navbar-nav">
                        <li class="hiw-xs">
                            <a href="" data-toggle="modal" data-target="#howItWorks"><img
                                    src="../../assets/images/bright-lightbulb.png"
                                    class="img-responsive"></a>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa fa-bars fa-2x"></i></button>
                                <div class="dropdown-content">


                                                                            <a href="../../aboutUs"><i
                                                class="fa fa-info pull-right"></i>About Us </a>
                                        <a href="../../home/login"><i
                                                class="fa fa-sign-in pull-right"></i>Login </a>
                                        <a href="../../home/spRegistration/index.php"><i
                                                class="fa fa-pencil pull-right"></i>Join Us </a>
                                      
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>

                <!-- End Navigation Menu -->
            </div>
        </div>
    </nav>
</header>
<div class="container header-padding">
    
    <br><br>
    <div class="row">
        <div class="col-md-4 col-xs-12">

            <div class="panel panel-primary">
                <div class="panel-heading"><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Login</div>
                <div class="panel-body">
                    <form action="index.php" method="post" accept-charset="utf-8">
                    <div class="form-group">
                        <label>Login Type</label>
                        <select class="form-control" name="type" id="type">
                            <option value="customers">Customer</option>
                            <option value="workers">Service Provider</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Email-Id</label>
                        <input type="text" class="form-control" id="mobile" name="email"
                               placeholder="Enter your registered Email-id" required>
                    </div>
                   
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="pass"
                                   placeholder="Enter Password" required>
                        </div>
                        <input type="submit" name="submit" class="btn btn-info btn-block">
                
                    </form>
                </div>
            </div>

        </div>
        <div class="col-md-5 hidden-xs">


        </div>

<div class="col-md-3  col-xs-12">
    <div style="margin:0px auto;max-width:300px;">

        <!--Display the Slider -->
        <div id="amazingslider-1" style="display:block;position:relative;margin:0 auto 20px -7px;">
            <ul class="amazingslider-slides" style="display:none;">
                <li><a href="../../services/carpenter/hyderabad" target="_blank"><img src="../../slider/Ramukaka%20Carpenter.jpg" alt="Carpenter" /></a></li>
                <li><a href="../../services/full-home-cleaning/hyderabad" target="_blank"><img src="../../slider/Ramukaka%20DishWasher.jpg" alt="Home cleaming" /></a></li>
                <li><a href="../../services/gardening-services/hyderabad" target="_blank"><img src="../../slider/Ramukaka%20Gardener.jpg" alt="Gardener" /></a></li>
                <li><a href="../../services/plumber/hyderabad" target="_blank"><img src="../../slider/ramukaka%20plumber.jpg" alt="Plumber" /></a></li>
                <li><a href="../../services/electrician/hyderabad" target="_blank"><img src="../../slider/ramukaka%20Technician.jpg" alt="Technician" /></a></li>
            </ul>
            </div>
        <!-- End of body section HTML codes -->
        
    </div>
</div>

</div>
</div>


<script src="../../assets/Mainsliderengine/initslider-1.js"></script>
<script src="../../assets/Mainsliderengine/amazingslider.js"></script>
</br>
</br>
</br>
</br>
</br>

<section id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 footer-text1">
                <p> © <a href="" class="rext-red">My Town Home-Services </a> 2021 All rights reserved.</p>
            </div>
            <div class="col-md-5 col-sm-5 col-xs-12 footer-text2">
                <ul class="list-inline">
                    <li><a href="../../services/index.html">Services </a></li>
                    <li>|</li>
                    <li><a href="../contactUs/index.html">Contact Us </a></li>
                    <li>|</li>
                    <li><a href="../privacyPolicy/index.html">Privacy Policy </a></li>
                    <li>|</li>
                    <li><a href="../termsOfUse/index.html">Terms of Use </a></li>
                </ul>
            </div>
            
        </div>
    </div>
</section>
</body>
</html>