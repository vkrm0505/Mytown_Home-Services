<!DOCTYPE html>
<?php
session_start();
include("../../connection.php");
$name = $_SESSION["name"];	
$tp = $_SESSION["typ"];	

	$qu="SELECT * FROM $tp WHERE email='$name'";
		if($res = mysqli_query($con,$qu))
		{
			 if($row = $res->fetch_assoc()) 
			 {
				$nam = $row['name'];
				$ema = $row['Email'];
				$Mobile = $row['mobile'];
				if($_SESSION["typ"]!="customers")
                {
				$services = $row['services'];
				$experiance = $row['experiance'];
                }
				$location = $row['location'];
				$Address = $row['address'];
				$photo = $row['photo'];
			 }
			
		}	
        
        
        


		if(isset($_POST['log']))
		{
			
			session_destroy();
			header("Location:../../index.php");
		}






?>




<html class="no-js" lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>Household Services, Carpenters, Electricians, Plumbers</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE = edge">

    <!-- Stylesheets -->
            <link href="../../assets/css/styles4853654356.min.css" rel="stylesheet"/>
    <link rel="shortcut icon" href="../../assets/images/favicon1.ico" type="image/x-icon">
    <link rel="icon" href="../../assets/images/favicon1.ico" type="image/x-icon">
    <script src="../../assets/js/jquery.min.js"></script>
    <script src="../../assets/js/Sregister.js"></script>

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
                        <a href="../../index.php" class="navbar-brand"><h1>My Town Home-Services</h1></a>
                    </div>
                    <div class="mlogo">
                        <a href="../../index.php" class="navbar-brand"><h1>My Town Home-Services</h1></a>
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
                        
                    </ul>

                </div>

                <!-- End Navigation Menu -->
            </div>
        </div>
    </nav>
</header>


<div class="container header-padding">

<div class="row">

    <div class="col-md-9 animated slideInRight">

        <div class="section-title text-center black">
        <?php 
				if($_SESSION["typ"]!="customers")
	  { ?>  
            <h1 class="thin caps"><b><?php echo $nam; ?></b></h1>
        <?php
      }
      else{
        ?>

      <h1 class="thin caps"><b>Profile</b></h1>
      
      <?php }?>
            <div class="line"> <hr class="red-line"> </div>
        </div>

        
        

        <form role="form" action="profile.php" method="POST" onsubmit="return valid()">

            <div class="col-md-6">
          
        <div class="form-group">
                    <label for="name">
                        Name
                    </label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name"
                           value="<?php echo $nam; ?>" default="<?php echo $nam; ?>" required readonly>
                </div>
          
                        

                <div class="form-group">
                    <label for="location">
                        Location
                    </label>
                    <input type="text" class="form-control" name="location"
                    value="<?php echo $location; ?>"  default="<?php echo $location; ?>" required readonly>
                   </div>
                   <?php 
				if($_SESSION["typ"]=="customers")
	  { ?>  
                   <div class="form-group">
                            <label for="address">
                                Address
                            </label>
                            <input type="text" class="form-control"  name="address" id="address"
                                      placeholder="Enter your address" value="<?php echo $Address ?>" default="<?php echo $Address ?>"
                                      required readonly></textarea>
                        </div>
    <?php }?>


                <div class="form-group" id="aTextBoxesGroup">

                    <label for="mobile">
                        Mobile No
                    </label>
                    <input type="text" class="form-control" name="mobile" id="mobile" 
                           placeholder="Enter 10 digit mobile no " value="<?php echo $Mobile; ?>" default="<?php echo $Mobile; ?>" required readonly>
                </div>

                <div class="form-group" id="aTextBoxesGroup">

                    <label for="mobile">
                        Email Id
                    </label>
                    <input type="text" class="form-control" name="email" id="mobile" 
                           placeholder="Enter 10 digit mobile no " value="<?php echo $name; ?>" default="<?php echo $name; ?>" required readonly>
                </div>




            </div>
            
            <div class="col-md-6 ">
            <?php 
				if($_SESSION["typ"]!="customers")
	  { ?>    
      
      <div class="form-group">
                    <label for="name">
                        Service Type
                    </label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name"
                           value="<?php echo $services; ?>" default="<?php echo $services; ?>" required readonly>
                </div>


      <div class="form-group">
                    <label for="city">
                        Experiance
                    </label>
                    <input type="number" class="form-control" name="experiance" 
                           placeholder="Enter Experiance" value="<?php echo $experiance?>" default="<?php echo $experiance?>" required readonly>
                </div>
                
                <div class="form-group">
                            <label for="address">
                                Address
                            </label>
                            <input type="text" class="form-control"  name="address" id="address"
                                      placeholder="Enter your address" value="<?php echo $Address ?>" default="<?php echo $Address ?>"
                                      required readonly></textarea>
                        </div>


            <?php  }?>
            </div>
      </br>
      </br>
                <div class="col-md-5 col-md-offset-3 col-xs-12">
                    <div>
                        <input type="hidden" name="submit" value="Udate Details" class="btn btn-info">
                        
                      </div>


            </div>

        </form>
     </div>


<!--<script src="http://maps.googleapis.com/maps/api/js?sensor=true&libraries=places" type="text/javascript"></script>-->

<script>
    $(document).ready(function () {


        var options = {
            bounds: new google.maps.Circle({
                center: new google.maps.LatLng(17.3660, 78.4760),
                radius: 5000
            }).getBounds(),
            //  types:  ['geocode'],
            componentRestrictions: {country: 'in'}
        };

        var input1 = document.getElementById('location');
        var autocomplete = new google.maps.places.Autocomplete(input1, options);*/


     
</script>
<div class="col-md-3  col-xs-12">
    <div style="margin:0px auto;max-width:300px;">

        <!--Display the Slider -->
        <div id="amazingslider-1" style="display:block;position:relative;margin:0 auto 20px -7px;">
            <ul class="amazingslider-slides" style="display:none;">
                <li><a href="../../services/carpenter/hyderabad" target="_blank"><img src="../../slider/Ramukaka%20Carpenter.jpg" alt="Carpenter" /></a></li>
                </ul>
            <div class="amazingslider-engine" style="display:none;"><a href="#"></a></div>
        </div>
    </div>
</div>

</div>
</div>


<script src="../../assets/Mainsliderengine/initslider-1.js"></script>
<script src="../../assets/Mainsliderengine/amazingslider.js"></script>


<section id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 footer-text1">
                <p> © <a href="" class="rext-red">My Town Home-Services </a> 2021 All rights reserved.</p>
            </div>
            <div class="col-md-5 col-sm-5 col-xs-12 footer-text2">
                <ul class="list-inline">
                    <li><a href="../../services">Services </a></li>
                    <li>|</li>
                    <li><a href="../home/contactUs">Contact Us </a></li>
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
    <a href="tel:9154007430" class="mtalk"> <i class="fa fa-phone" aria-hidden="true"></i></a>
</div>

<div id="overlay"></div>
</body>
</html>

<script src="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBfCCB1gtXQG-GyJUt6PIhDDDPMo3ir-nQ" type="text/javascript"></script>

    <script src="../../assets/js/scripts4853654356.min.js"></script>

