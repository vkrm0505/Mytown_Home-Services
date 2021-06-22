<?php
session_start();
include("../connection.php");

?>


<!DOCTYPE html>
<!--[if IE 8 ]>
<html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]>
<html lang="en" class="no-js"> <![endif]-->
<html class="no-js" lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Household Services, Carpenters, Electricians, Plumbers</title>

    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE = edge">

    <!-- Stylesheets -->
            <link href="../assets/css/styles4853654356.css" rel="stylesheet"/>

    <script src="../assets/js/jquery.min.js"></script>
    <script type="text/javascript">
        CI_ROOT = "#";
    </script>

<style>
    .trans{
        background-color:transparent;
        width:209px;
        height:31px;
        border:none;
        text-align:left;
    }
    .trans:hover {
  background-color: #63c8da; /* Green */
  color: white;
    }
    </style>


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
                        <a href="../index.php" class="navbar-brand"><h2>My Town Home-Services</h2></a>
                    </div>
                    <div class="mlogo">
                        <a href="../index.php" class="navbar-brand"><h2>My Town Home-Services</h2></a>
                    </div>
                </div>

                <div class="top-contact">
                    <span class="num"><i class="fa fa-phone"> </i>XXXXXXXXXX</span>
                </div>

                <!-- Start Navigation Menu -->

                <div id="main_navMenu">
                    <ul class="nav navbar-nav">
                        <li class="hiw-xs">
                            <a href="" data-toggle="modal" data-target="#howItWorks"><img
                                    src="../assets/images/bright-lightbulb.png"
                                    class="img-responsive"></a>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa fa-bars fa-2x"></i></button>
                                <div class="dropdown-content">


                                                                            <a href="../"><i
                                                class="fa fa-info pull-right"></i>Home </a>
                                                   
                                              <?php  if(!isset($_SESSION["name"]))
                                               { 
                                              ?>   
                                                <a href="../home/login"><i
                                                class="fa fa-sign-in pull-right"></i>Login </a>
                                              <?php } 
                                              else{
                                                  ?>
                                                <form action="../home/spp/profile.php"method="post">
				                                
                                                <input type="submit" class="trans" value=" Logout" name="log">
			                                    </form>
                                            <?php  }
                                              ?>
                                                   <a href="../../aboutUs"><i
                                                class="fa fa-comment pull-right"></i>About Us </a>
                                    
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

<!-- Start Header Section -->

<!-- End Header Section -->


<!-- Start Slider Section -->
<section id="main-slider" class="slider">

    <!-- Start Slider -->
    <div class="flexslider">
        <ul class="slides">

            <li>
                <img src="../comjpeg/ramukaka-06.jpg" alt="Ramukaka Technician"/>

                <div class="flex-caption">
                    <h3>Carpenter Services</h3>
                </div>
            </li>
            <li>
                <img class="lazyImage img-responsive"  data-src="../comjpeg/ramukaka-08.jpg" alt="Ramukaka Carpenter"/>

                <div class="flex-caption">
                    <h3>Electrician</h3>

                </div>
            </li>
            <li>
                <img class="lazyImage img-responsive"  data-src="../comjpeg/ramukaka-07.jpg" alt="Ramukaka Plumber"/>

                <div class="flex-caption">
                    <h3>Plumber</h3>

                </div>
            </li>
            <li>
                <img class="lazyImage img-responsive"  data-src="../comjpeg/ramukaka-15.jpg" alt="Ramukaka Gardeners"/>

                <div class="flex-caption">
                    <h3>Gardeners</h3>

                </div>
            </li>

            <li>
                <img class="lazyImage img-responsive"  data-src="../comjpeg/ramukaka-17.jpg" alt="Ramukaka Packers & Movers"/>

                <div class="flex-caption">
                    <h3>Home-Cleaning</h3>

                </div>
            </li>


        </ul>
    </div>
    <!-- End Slider -->

    <!-- Start How It Works -->
    <div class='hiw-wrapper-xl'>
            <span id="appearOnClick" class='hiwDiv animated fadeInUp'>
             <ul class="hiw-list">
                 <li><span class="hiw-no">1</span> <span class="hiw-text">You share your Service requirement and Personal details</span>
                 </li>
                 <li><span class="hiw-no">2</span> <span class="hiw-text">Your requirement is sent to the Top Service Providers</span>
                 </li>
                 <li><span class="hiw-no">3</span> <span
                         class="hiw-text">Service Providers compete to offer you the best quotes </span></li>
                 <li><span class="hiw-no">4</span> <span class="hiw-text">You pick a Service Provider that best fits your budget and requirement</span>
                 </li>
             </ul>
            </span>
        <button id='btnHowItWorks' class=" btn btn-hiw">+ How it works</button>
    </div>
   
   

</section>
<div class="clearfix"></div>
<!-- End Slider Section -->



<section id="services">

    <div class="service-header">
        <h1 class="text-center"> Services Offered</h1>
        <div class="round-arrow"><i class="fa fa-angle-down"></i></div>
    </div>

    <section>
        <div class="parent-list-bg">
            <div class="container-fluid">
                <div class="service-list">

                    <div class="parent-list wow animated fadeInUp">

                                                                                <div class="row">
                                <div class="col-md-2 col-sm-2 col-xs-12 text-center">
                                    <div class="category-div">
                                        <div class="category-title">
                                            Daily Needs
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-10 col-sm-10 col-xs-12 category-list">
                                    <ul class="list-inline">
                                      <li>
                                         <a href="carpenter/hyderabad">
                                                <img src="../comjpeg/ramukaka-06.jpg">
                                                       <h5>Carpenter</h5>
                                         </a>
                                      </li>
                                                                                                  
                                      <li>
                                             <a href="electrician/hyderabad">
                                                <img src="../comjpeg/ramukaka-08.jpg">
                                                    <h5>Electrician</h5>
                                             </a>
                                     </li>
                                     <li>
                                        <a href="plumber/hyderabad/">
                                               <img src="../comjpeg/ramukaka-07.jpg">
                                                      <h5>Plumber</h5>
                                        </a>
                                     </li>
                                     <li>
                                        <a href="gardner/hyderabad">
                                               <img src="../comjpeg/ramukaka-15.jpg">
                                                      <h5>Gardener</h5>
                                        </a>
                                     </li>
                                     <li>
                                        <a href="home_cleaning/hyderabad/">
                                               <img src="../comjpeg/ramukaka-17.jpg">
                                                      <h5>Home cleaning</h5>
                                        </a>
                                     </li>
                                      <hr>                                  
                                </div>
                            </div>

                        </div>

                </div>
            </div>
        </div>
    </section>

</section>
    
<section id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 footer-text1">
                <p> © <a href="" class="rext-red">My Town Home-Services </a>2021 All rights reserved.</p>
            </div>
            <div class="col-md-5 col-sm-5 col-xs-12 footer-text2">
                <ul class="list-inline">
                    <li><a href="services">Services </a></li>
                    <li>|</li>
                    <li><a href="../home/contactUs">Contact Us </a></li>
                    <li>|</li>
                    <li><a href="../home/privacyPolicy">Privacy Policy </a></li>
                    <li>|</li>
                    <li><a href="../home/termsOfUse">Terms of Use </a></li>
                </ul>
            </div>
           
        </div>
    </div>
</section>

<div id="fb-root"></div>
<!-- Modal Start -->
<div id="howItWorks" class="modal fade" role="dialog" style="z-index: 9999999">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><i class="fa fa-cogs" aria-hidden="true"></i>How It Works?</h4>

            </div>
            <div class="modal-body mobile-hiw-list">
                <p> 4 Quick Steps </p>
                <dl class="mlist">
                    <dt>You share your Service requirement and Personal details</dt>
                    <dt>Your requirement is sent to the Top Service Providers</dt>
                    <dt>Service Providers compete to offer you the best quotes</dt>
                    <dt>You pick a Service Provider that best fits your budget and requirement</dt>
                </dl>

            </div>
        </div>

    </div>
</div>
<!-- Modal End -->


<div class="mobile-contact">
    <a href="tel:XXXXXXXX" class="mtalk"> <i class="fa fa-phone" aria-hidden="true"></i></a>
</div>

<div id="overlay"></div>
</body>
</html>

<script src="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBfCCB1gtXQG-GyJUt6PIhDDDPMo3ir-nQ" type="text/javascript"></script>

    <script src="../assets/js/scripts4853654356.min.js"></script>


