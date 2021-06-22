<?php include("../../connection.php");

require("../../PHPMailer_5.2.4/class.phpmailer.php");
session_start();




if(isset($_POST['reserve']))
{
    $cat = $_POST['services'];
    $loc = $_POST['loc'];
    $tim = $_POST['t1'] . " to " . $_POST['t2'];
    $phone = $_SESSION['name'];
    $q1 = "SELECT * FROM customers WHERE Email='$phone' ";
    $res = mysqli_query($con,$q1);
    $row = $res->fetch_assoc();
    $name = $row['name'];
    $num =  $_SESSION["sname"];
    $semail=$_SESSION["semail"];
    $q5 = "SELECT * FROM workers WHERE mobile='$num' ";
    $res2 = mysqli_query($con,$q5);
    $row2 = $res2->fetch_assoc();
    $na = $row2['name'];

    
    $mail = new PHPMailer();
    
            $mail->IsSMTP();
            $mail->SMTPDebug = 0;
            $mail->From='vkrm0505@gmail.com';
            $mail->Port=465;
            $mail->Host="smtp.gmail.com";
            $mail->SMTPSecure= "ssl";
            $mail->SMTPAuth=true;
            $mail->Username = '';//enter your mail
            $mail->Password ='';//enter your password
            $mail->AddAddress($phone,$semail,'Admin');
            $mail->AddAddress($semail,'Admin');
            $mail->FromName="My Town Home-Services";
            $mail->isHTML(true);

            $mail->Subject="Reserve";
            
            $mail->Body="<p>Dear Customer,<h3> Mr/Mrs.$name<br/> </h3><br/> You has reserved the Service Provider<br/><br/><h3>Service Provider Name :  $na<br/> :Phone number $num<br/> Category : $cat <br/> Timings : $tim <br/> Location : $loc</h3></p>";
 
            $mail->AltBody="..........";

if($mail->send())
{
    $_SESSION['sent']=$phone;
    echo "<script> alert('$phone');</script>";
    header("Location:../../index.php");
       
    echo "we will catch you soon";
                   
}  
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
    <link href="../../assets/css/styles4853654356.css" rel="stylesheet"/>
    <link href="../../assets/css/reserve.css" rel="stylesheet"/>

   
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
                                        <a href="../../home/recommend"><i
                                                class="fa fa-comment pull-right"></i>Recommend </a>
                                    
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

<script src="../../assets/Mainsliderengine/initslider-1.js"></script>
<script src="../../assets/Mainsliderengine/amazingslider.js"></script>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>

<section class="reserve">
       <div class="container">
       <div class="row">
       <div class="col-md-12 text-center">
           <div class="lead-form">
    <form method="post" action="reserve.php">
    <label class="lbl1">Service Type</label>
<select name="services" class="input-box" required>
<option value="Plumber">Plumber</option>
<option value="Carpenter">Carpenter</option>
<option value="Gardener">Gardener</option>
<option value="Home_Cleaning">Full Home Cleaning</option>
<option value="Electrician">Electrician</option>
</select> <br/>
<label class="lbl1" >Location</label>
<input type="text" placeholder="location" class="input-box" name="loc" required><br/>
    
      <label class="lbl1">Available Timings</label><br/><br/>
<input type="time" class="input-box2" name="t1" required> &nbsp; &nbsp; <input type="time" required class="input-box2" name="t2"><br/>
    <input type="submit" class="submit-btn" name="reserve" value="Book Service"><br/><br/><br/>
        </form>
   
</div>
       </div>
       </div> 
        </div>
   </section>
   </br>
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
