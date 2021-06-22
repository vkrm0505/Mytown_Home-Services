<!DOCTYPE html>
<?php 
session_start();
include("connection.php");

?>
<html class="no-js" lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE = edge">



    <!-- Stylesheets -->
            <link href="assets/css/styles3738458999.css" rel="stylesheet"/>
            <link href="assets/css/index.css" rel="stylesheet"/>
    
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400" rel="stylesheet">
  <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">


    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <script type="text/javascript">
        CI_ROOT = "index.php";
    </script>
 <!-- Bootstrap CSS File -->
 <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
<div class="page-overlay"></div>


<!-- Inner Header Section Start --><section class="nav-container">       
<nav class="navbar navbar-expand-lg header-sticky bg-transparent">
      <a class="navbar-brand" href="#"><h1>&nbsp;&nbsp;My Town Home-Services</h1></a>   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-bars"></i>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#top">Home</a>
      </li>
      <?php 
      if(!isset($_SESSION["typ"]))
      {    
      ?>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Register
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="home/customerRegistration/index.php"><font color="#000">Customer</font></a>
            <a class="dropdown-item" href="home/spRegistration/index.php"><font color="#000">Service Provider</font></a>
        </div>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="home/login/index.php">Login</a>
      </li>
      <?php }?>
        <li class="nav-item">
        <a class="nav-link" href="services/index.php">Services</a>
		</li>
      <li class="nav-item">
        <a class="nav-link" href="aboutUs/">About us</a>
      </li>
        <li class="nav-item">
        <a class="nav-link" href="home/contactUs/">Contact us</a>
      </li>
	  	<?php 
				if(isset($_SESSION["name"]))
	  { ?>
       
        <li class="nav-item">
        <a class="nav-link" href="home/spp/profile.php">
        profile</a>
        </li>
        <li class="nav-item">
			<form action="home/spp/profile.php"method="post">
				<input type="submit" value="Logout" name="log" >
			</form>
        </li>  
						<?php } 
                        
                        
                        ?>
    </ul>
  </div>
</nav> 
</section>

<!-- Inner Header Section End -->

<!-- Banner Section Start -->
<section id="home" class="parallax-section" data-stellar-background-ratio="0.3">


        <div class="parallax-inner">
            <div class="parallax-content">
                <div class="container-fluid text-center cont-pad">
                   
			<h1><b>MY TOWN HOME-SERVICES</b></h1>

                                    <div class="container" id="search_frm">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                              
                            </div>

                        </div>
                        
                    </div>
                    

                </div>
                
            </div>

        </div>



</section>
<div class="clearfix"></div>
<!-- Banner Section End -->


<!-- All Services Section Start -->
<section class="sec-space all-service">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-pull-0 col-sm-pull-0"></div>
            <div class="col-md-8 col-sm-8 col-xs-8">
                <h3 class="sec-heading head-left"> Trending Services</h3>
            </div>
            
        </div>

        <div class="row">
            <!-- Item slider-->
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="carousel carousel-showmanymoveone slide" id="itemslider">
                            <div class="carousel-inner">

                                <div class="item active">
                                        <div class="col-xs-12 col-sm-6 col-md-2 service-list-click">
                                            <a href="services/carpenter/hyderabad/index.php">
                                                <img width="300px" src="comjpeg/ramukaka-06.jpg">
                                            </a>
                                            <p class="text-center">Carpenter</p>
                                        </div>
                                    </div>
                                    
                                  <div class="item">
                                     <div class="col-xs-12 col-sm-6 col-md-2 service-list-click">
                                            <a href="services/electrician/hyderabad/index.php">
                                                 <img width="300px" src="comjpeg/ramukaka-08.jpg">
                                            </a>
                                            <p class="text-center">Electrician</p>
                                        </div>
                                    </div>
                                          
                                          <div class="item">
                                               <div class="col-xs-12 col-sm-6 col-md-2 service-list-click">

                                                    <a href="services/plumber/hyderanad/index.php">
                                                <img width="300px" src="comjpeg/ramukaka-07.jpg">
                                            </a>
                                            <p class="text-center">Plumber</p>
                                        </div>
                                    </div>
                                               <div class="item">
                                        <div class="col-xs-12 col-sm-6 col-md-2 service-list-click">

                                            <a href="services/gardner/hyderabad/index.php">
                                                <img width="300px" src="comjpeg/ramukaka-15.jpg">
                                            </a>
                                            <p class="text-center">Gardener</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="col-xs-12 col-sm-6 col-md-2 service-list-click">

                                            <a href="services/home_cleaning/hyderabad/index.php">
                                                <img width="300px" src="comjpeg/ramukaka-17.jpg">
                                            
                                            <p class="text-center">Home Cleaning</p>
                                            </a>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div id="slider-control">
                                    <a class="left carousel-control" href="#itemslider" data-slide="prev"><i class="fa fa-angle-left"></i></a>
                                    <a class="right carousel-control" href="#itemslider" data-slide="next"><i class="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Item slider end-->
            </div>

            <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
                    <h1 class="text-center">Rajamma got her leaking flush repaired
                        without calling her son for help!</h1>
                </div>
            </div>

        </div>
</section>
<!-- All Services Section End -->

<!-- How It Works Section Start -->
<section class="sec-space">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3 class="sec-heading"> How My Town Home-Services Works</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                <div class="card">
                    <div class="card-block d-flex">
                        <p class="card-text">You Share your service requirements and personal details</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                <div class="card">
                    <div class="card-block d-flex">
                        <p class="card-text">Your requirement is sent to the top service providers</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                <div class="card">
                    <div class="card-block d-flex">
                        <p class="card-text">Service provider compete to give you the best Quotes</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                <div class="card">
                    <div class="card-block d-flex">
                        <p class="card-text">You Pick the service provider best fits to your budget and requirement</p>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
</section>
<!-- How It Works Section Start -->

<section class="testimonials">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3 class="sec-heading"> What customers are saying!</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12 test-sec1">
                <p class="font-weight600">Our Mission:</p>
                <p>Our Motto is to provide the best service to our customers.  At the end, our customer should feel satisfied with every rupee spent for the service. </p>
            </div>
            <div class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                <!-- Testimonial Carousel Start -->
                <div class="carousel slide" data-ride="carousel" id="test-carousel">

                    <!-- Carousel Slides / Quotes -->
                                   <!-- Testimonial Carousel End -->
            </div>
        </div>
    </div>
</section>


<nav class="header-sticky top-pad navbar navbar-inverse navbar-fixed-top" id="home_header_sticky" style="display: none;">
    <div class="container">

        <div class="row nav-menu">
                	<h1><b>My Town Home-Services</b></h1>	

        <div class="mobile-header">
            
            <div class="row">

                <div class="navbar-collapse collapse" style="height: 1px;">
                    <ul class="nav navbar-nav">

                            <li><a href="home/login/index.html">Login</a></li>

<li  >
    <a href="services/index.php">Services</a>
</li>


<li><a href="aboutUs.html">About Us</a></li>
<li><a href="home/spRegistration/index.html">Join Us</a></li>
<li class="fint-text">Find us on</li>
                 </ul>
                </div>

            </div>
        </div>
    </div>
</nav>


<script>
    var check_session = '';
    if (check_session!='') {
        localStorage.setItem('services', check_session);
    }

    $(window).scroll(function(){

        var winScroll = $(window).scrollTop()+30;
        var frmoffset = $('#search_frm').offset();

        if(winScroll>frmoffset.top){
            $('#home_header_sticky').show();
        }else{
            $('#home_header_sticky').hide();
        }
    });

    function init() {
        var imgDefer = document.getElementsByTagName('img');

        for (var i=0; i<imgDefer.length; i++) {
            if(imgDefer[i].getAttribute('data-imgsrc')) {
                imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-imgsrc'));
            } } }
    window.onload = init;

</script><!-- Footer Section Start -->
<!-- Footer Big Start-->
<footer class="footer-main hidden-xs ">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4">
                <div class="row">
                    <div class="col-md-4 no-lr-pad">
                        <ul class="fthin-links">
                            <li><a href="services/carpenter/hyderabad/index.php">Carpenter</a></li>
                            <li><a href="services/plumber/hyderabad/index.php">Plumber</a></li>
                            <li><a href="services/electrician/hyderabad/index.php">Electrician</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 no-lr-pad">
                        <ul class="fthin-links">
                            <li><a href="services/gardner/hyderabad/index.php">Gardner</a></li>
                            <li><a href="services/home cleaning/hyderabad/index.php">Home Cleaning</a></li>
                        </ul>
                    </div>
                                    </div>
            </div>
            <div class="col-md- col-sm-4 text-center">
                <p class="copy-right">©My Town Home-Services 2021 All Rights Reserved.</p>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="row">
                    <div class="col-md-4 no-lr-pad">
                        <ul class="fthin-links">




                                                            <li><a href="home/login/index.php">Customer Login</a></li>
                                <li><a href="home/login/index.php">SP Login</a></li>
                            
                        </ul>
                    </div>
                    <div class="col-md-4 no-lr-pad">
                        <ul class="fthin-links">
                            <li><a href="services/index.html">Services</a></li>
                            <li><a href="aboutUs/index.html">About Us</a></li>
                            <li><a href="home/spRegistration/index.php">Join Us</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 no-lr-pad">
                        <ul class="fthin-links no-border">
                            <li><a href="home/contactUs/index.html">Contact Us</a></li>
                           </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>



<script>
    $(document).ready(function() {
        $('select:not(.ignore)').niceSelect();
        /*FastClick.attach(document.body);*/
    });
</script>


<script>
    (function(){

        $('#itemslider').carousel({ interval: 3000 });
    }());

    (function(){
        $('.carousel-showmanymoveone .item').each(function(){
            var itemToClone = $(this);

            for (var i=1;i<6;i++) {
                itemToClone = itemToClone.next();


                if (!itemToClone.length){
                    itemToClone = $(this).siblings(':first');
                }

                itemToClone.children(':first-child').clone()
                    .addClass("cloneditem-"+(i))
                    .appendTo($(this));
            }
        });
    }());
</script>



<script type="text/javascript">

    $('.carousel[data-type="multi"] .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<1;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
</script>

<script>
    $(document).ready(function() {
        //Set the carousel options
        $('#test-carousel').carousel({
            pause: true,
            interval: 4000,
        });
    });
</script>

<script>
    $(document).ready(function () {
        $('.navbar-toggle').click(function() {
            $(this).toggleClass('menuActive');
        });
    });
</script>

<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBfCCB1gtXQG-GyJUt6PIhDDDPMo3ir-nQ" type="text/javascript"></script>

    <script src="assets/js/scripts3738458999.min.js"></script>



<script type="text/javascript">
    window.heap = window.heap || [], heap.load = function (t, e) {
        window.heap.appid = t, window.heap.config = e;
        var a = document.createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = ("https:" === document.location.protocol ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + t + ".js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(a, n);
        for (var o = function (t) {
            return function () {
                heap.push([t].concat(Array.prototype.slice.call(arguments, 0)))
            }
        }, p = ["clearEventProperties", "identify", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++)heap[p[c]] = o(p[c])
    };
    heap.load("705504568");
</script>
<script type="text/javascript">
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>
