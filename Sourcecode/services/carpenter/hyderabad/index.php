<!DOCTYPE html>


<?php include('../../../connection.php');

session_start();

$q1="SELECT * FROM workers where services='Carpenter' ORDER BY name ASC";
$res = $con->query($q1);


if(isset($_POST['reserve']))
{
    if(isset($_SESSION["name"]))
    {
        $_SESSION["sname"] = $_POST['mobile'];
        $_SESSION["semail"]= $_POST['semail'];
        header("Location:../../../home/reservation/reserve.php");
        
    }
    else
    {
        header("Location:../../../home/login/index.php");
    }
    
}

?>


<html class="no-js" lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
 
    
    <meta name="title"
          content="Carpenter">
    <title>Carpenter Services | My Town Home-Services Carpenter Services</title>

    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE = edge">

    <!-- Stylesheets -->
            <link href="../../../assets/css/styles4853654356.css" rel="stylesheet"/>
    
    
    <link rel="shortcut icon" href="../../../assets/images/favicon1.ico" type="image/x-icon">
    <link rel="icon" href="../../../assets/images/favicon1.ico" type="image/x-icon">


    <script src="../../../assets/js/jquery.min.js"></script>
    <script type="text/javascript">
        CI_ROOT = "../../../";
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
                        <a href="../../../index.php" class="navbar-brand"><h2>My Town Home-Services</h2></a>
                    </div>
                    <div class="mlogo">
                        <a href="../../../index.php" class="navbar-brand"><h2>My Town Home-Services</h2></a>
                    </div>
                </div>

                <div class="top-contact">
                    <span class="num"><i class="fa fa-phone"> </i>XXX-XXXXXXXX </span>
                </div>

                <!-- Start Navigation Menu -->

                <div id="main_navMenu">
                    <ul class="nav navbar-nav">
                        <li class="hiw-xs">
                            <a href="" data-toggle="modal" data-target="#howItWorks"><img
                                    src="../../../assets/images/bright-lightbulb.png"
                                    class="img-responsive"></a>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa fa-bars fa-2x"></i></button>
                                <div class="dropdown-content">


                                                <a href="../../../aboutUs/index.html"><i
                                                class="fa fa-info pull-right"></i>About Us </a>    
                                              <?php  if(!isset($_SESSION["name"]))
                                               { 
                                              ?>   
                                                <a href="../home/login"><i
                                                class="fa fa-sign-in pull-right"></i>Login </a>
                                                <a href="../../../home/spRegistration"><i
                                                class="fa fa-pencil pull-right"></i>Join Us </a>
                                              <?php } 
                                              else{
                                                  ?>
                                                <form action="../../../home/spp/profile.php"method="post">
				                                
                                                <input type="submit" class="trans" value=" Logout" name="log">
			                                    </form>
                                            <?php  } ?>
                                        
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
                <img src="../../../main-slider/ramukaka-08.jpg" alt="My Town Home-Services Technician"/>

                <div class="flex-caption">
                    <h3>Carpenter</h3>
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
    <!-- End How It Works -->

</section>
<div class="clearfix"></div>
<!-- End Slider Section -->

<section id="services">
    <div class="service-header">
        <h1 class="text-center">Carpenter in Hyderabad</h1>
        <div class="round-arrow"><i class="fa fa-angle-down"></i></div>
    </div>

    <div class="container">
        <div class="main-spDiv">

            <?php while($an = $res->fetch_assoc()) { ?>
                
                    <div class="sp-list">

                        <div class="row">
                            <div class="col-md-9 col-sm-6 col-xs-12">
                             <h1><?php echo $an['name']; ?> </h1>
                            </div>

                            <div class="col-md-3 col-sm-6 col-xs-12 ele-align">
                            <form method="post" action="index.php">
						<input class="btn btn-mobile sp-mobile" type="submit" name="reserve" value="&nbsp;&nbsp;&nbsp;Book Service&nbsp;&nbsp;" class="btn-find1"> 
						<input type="hidden" name="mobile" value="<?php echo $an['mobile'];?>">
                        <input type="hidden" name="semail" value="<?php echo $an['Email'];?>">
						</form>
					
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                                                <p class="skill"><?php echo $an['services']; ?></p>
                            </div>

                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <p class="loc"><?php echo $an['location']; ?></p>
                            </div>

                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <p class="exp"><?php echo $an['experiance']; ?> of experience </p>
                            </div>
<!--
                            <div class="col-md-3 col-sm-6 col-xs-12 ele-align">
                                <div id="stars-existing" class="starrr" data-rating=<?php echo $an['experiance']; ?> ></div>
                              
                            </div> -->
                        </div>
                    </div>
                            <?php } ?>
        </div>
    </div>

</section>

<script>
    $(".sp-list").click(function (event) {
        var self=$(this);
        var target = $(event.target);
        if (!target.hasClass("sp-mobile")) {
            window.location = self.find("a:last").attr("href");
            return false;
        }
    });
</script>

<section id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 footer-text1">
                <p> © <a href="" class="rext-red">My Town Home-Services </a>2021 All rights reserved.</p>
            </div>
            <div class="col-md-5 col-sm-5 col-xs-12 footer-text2">
                <ul class="list-inline">
                    <li><a href="../../services">Services </a></li>
                    <li>|</li>
                    <li><a href="../../../home/contactUs">Contact Us </a></li>
                    <li>|</li>
                    <li><a href="../../../home/privacyPolicy">Privacy Policy </a></li>
                    <li>|</li>
                    <li><a href="../../../home/termsOfUse">Terms of Use </a></li>
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


<div id="overlay"></div>
</body>
</html>

<script src="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBfCCB1gtXQG-GyJUt6PIhDDDPMo3ir-nQ" type="text/javascript"></script>

    <script src="../../../assets/js/scripts4853654356.js"></script>

