<!DOCTYPE html>

<?php include('connection.php')?>


<html class="no-js" lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  
    
    <meta name="title"
          content="Household Services, Carpenters, Electricians, Plumbers">

    <title>Household Services, Carpenters, Electricians, Plumbers</title>

    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE = edge">

    <!-- Stylesheets -->
            <link href="../assets/css/styles4853654356.min.css" rel="stylesheet"/>
    
    <link rel="shortcut icon" href="../assets/images/favicon1.ico" type="image/x-icon">
    <link rel="icon" href="../assets/images/favicon1.ico" type="image/x-icon">


    <script src="../assets/js/jquery.min.js"></script>
    <script type="text/javascript">
        CI_ROOT = "../index.php";
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
                        <a href=# class="navbar-brand"><h2>My Town Home-Services</h2></a>
                    </div>
                    <div class="mlogo">
                        <a href=# class="navbar-brand"><h2>My Town Home-Services</h2></a>
                    </div>
                </div>

                <div class="top-contact">
                    <span class="num"><i class="fa fa-phone"> </i>9154007430</span>
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


                                                                            <a href="../aboutUs"><i
                                                class="fa fa-info pull-right"></i>About Us </a>
                                        <a href="home/login"><i
                                                class="fa fa-sign-in pull-right"></i>Login </a>
                                        <a href="home/spRegistration"><i
                                                class="fa fa-pencil pull-right"></i>Join Us </a>
                                        <a href="home/recommend"><i
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


<!-- Start Header Section -->

<!-- End Header Section -->


<!-- Start Slider Section -->
<section id="main-slider" class="slider">

    <!-- Start Slider -->
    <div class="flexslider">
        <ul class="slides">

            <li>
                <img class="lazyImage img-responsive"  data-src="../comjpeg/ramukaka-06.jpg" alt="My Town Home-Services Carpenter"/>

                <div class="flex-caption">
                    <h3>Carpenter</h3>

                </div>
            </li>
            <li>
                <img class="lazyImage img-responsive"  data-src="../comjpeg/ramukaka-07.jpg" alt="My Town Home-Services Plumber"/>

                <div class="flex-caption">
                    <h3>Plumber</h3>

                </div>
            </li>

            <li>
                <img class="lazyImage img-responsive"  data-src="../comjpeg/ramukaka-15.jpg" alt="My Town Home-Services Gardeners"/>

                <div class="flex-caption">
                    <h3>Gardeners</h3>

                </div>
            </li>
            
            <li>
                <img class="lazyImage img-responsive"  data-src="../../comjpeg/ramukaka-18.jpg" alt="My Town Home-Services Packers & Movers"/>

                <div class="flex-caption">
                    <h3>Packers & Movers</h3>

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

    <!-- Start Main Search Box -->
    <div id="main-searchWraper" class="form-onSlider">
        <div class="container">

            <form class="form-inline" action="../services/raiseTicket" method="POST">
                <div id="searchFrom" class="row text-center">
                    <!-- Normal Form -->
                    <div id="">
                        <div class="input-cont2">
                            <div class="form-group icon-addon1">
                                <i class="fa fa-location-arrow"></i>
                                <a class="btn btn-select">
                                    <input type="hidden" class="btn-select-input" id="" name="city" value=""/>
                                    <span class="btn-select-value">Select an Item</span>
                                    <span class='btn-select-arrow glyphicon glyphicon-chevron-down'></span>
                                    <ul>
                                        <li class="selected">Hyderabad</li>
                                    </ul>
                                </a>
                            </div>
                        </div>

                        <div class="input-cont3">
                            <div class="form-group icon-addon2">
                                <i class="fa fa-map-marker"></i>
                                <input type="text" class="form-control" name="location" id="location"
                                       value="" tabindex="1"
                                       placeholder="Area Eg: Sangareddy"
                                       required>
                                <a class="gps-icon search-location" rel="tooltip" data-title="Locate Me"><i
                                        class="fa fa-location-arrow"></i></a>
                            </div>
                        </div>

                        <div class="input-cont3">
                            <div class="form-group icon-addon2">
                                <i class="fa fa-wrench"></i>
                                <input type="text" id="service_check" class="form-control  services"
                                       name="services" tabindex="2"
                                       value=""
                                       placeholder="Service Eg: carpenter,plumber etc" required>
                            </div>
                        </div>

                        <div class="input-cont2">
                            <div class="form-group icon-addon2">
                                <i class="fa fa-mobile"></i>
                                <input type="text" class="form-control "
                                       name="mobile" id="mob" tabindex="3"
                                       placeholder="Mobile No" required>
                            </div>
                        </div>

                        <div class="input-cont1">
                            <button type="button" id="desktop_form" class="btn btn-search pull-right"><i
                                    class="fa fa-arrow-right"></i> Proceed
                            </button>
                        </div>
                    </div>
                </div>

                <!-- OTP Form -->
                <div class="otp-wrap hidden" id="otp_form">

                    <div id="otpFrom" class="row text-center">

                        <div class="input-cont2">
                            <a href="#" id="goBack" class="btn-back"><i class="fa fa-chevron-circle-left"></i></a>
                        </div>

                        <div class="input-cont4">
                            <div class="form-group icon-addon2">
                                <i class="fa fa-key"></i>
                                <input type="text" class="form-control "
                                       name="otp" id="cust_otp"
                                       placeholder="Enter OTP sent on your mobile" required>
                            </div>

                        </div>

                        <div class="input-cont1">
                            <input type="hidden" name="geo_lat" value="">
                            <input type="hidden" name="geo_lng" value="">
                            <button type="submit" class="btn btn-search pull-right"><i class="fa fa-thumbs-up"></i>
                                Go Ahead
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
    <!-- End Main Search Box -->

</section>
<div class="clearfix"></div>
<!-- End Slider Section -->


<!-- Start Mobile Form Section -->
<section class="mobile-form expose">
    <div class="mobile-form-body mform-border">
        <div class="row">
            <div class="col-md-12">
                <form action="../services/raiseTicket" method="POST">
                    <div id="mobile-search-form" class="form-horizontal col-xs-12">
                        <div class="input-cont2">
                            <div class="form-group icon-addon1">
                                <i class="fa fa-location-arrow"></i>
                                <a class="btn btn-select bg-white">
                                    <input type="hidden" class="btn-select-input" name="city" value=""/>
                                    <span class="btn-select-value">Select an Item</span>
                                    <span class='btn-select-arrow glyphicon glyphicon-chevron-down'></span>
                                    <ul>
                                        <li class="selected">Hyderabad</li>
                                    </ul>
                                </a>

                            </div>
                        </div>
                        <div class="clearfix"></div>


                        <div class="input-cont3">
                            <div class="form-group icon-addon2">
                                <i class="fa fa-wrench"></i>
                                <input type="text" id="service_check_mobile" class="form-control  services"
                                       name="services" tabindex="2"
                                       value=""
                                       placeholder="Service Eg: carpenter,plumber etc" required>
                            </div>
                        </div>
                        <div class="clearfix"></div>

                        <div class="form-group">
                            <div class="btn-group btn-group-justified" role="group">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-mobile-group btn-yellow" id="serviceNext">
                                        Next&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="location-mobile-form" class="form-horizontal col-xs-12 hidden">

                        <div class="input-cont3">
                            <div class="form-group icon-addon2">
                                <i class="fa fa-map-marker"></i>
                                <input type="text" class="form-control" name="location" id="location1"
                                       value="" tabindex="1"
                                       placeholder="Area Eg: SP Road, Madhapur"
                                       required>
                            </div>
                        </div>
                        <button class="btn btn-msearch search-location-mobile" aria-label="Go" type="button">
                            <i class="fa fa-location-arrow"></i>
                        </button>

                        <div class="clearfix"></div>

                        <div class="input-cont2">
                            <div class="form-group icon-addon2">
                                <i class="fa fa-mobile"></i>
                                <input type="text" class="form-control "
                                       name="mobile" id="mob1" tabindex="3"
                                       placeholder="Mobile No" required>
                            </div>
                        </div>


                        <div class="clearfix"></div>

                        <div class="form-group">
                            <div class="btn-group btn-group-justified" role="group">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default btn-mobile-group" id="servicesBack"><i
                                            class="fa fa-angle-double-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;Back
                                    </button>
                                </div>
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-mobile-group btn-yellow" id="mobile_form">
                                        Next&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="otp-form" class="hidden">
                        <div class="input-cont3">
                            <div class="form-group icon-addon2">
                                <i class="fa fa-key"></i>
                                <input type="text" class="form-control"
                                       name="otp" id="cust_otp1"
                                       placeholder="Enter OTP sent on your mobile" required>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div class="form-group">
                            <div class="btn-group btn-group-justified" role="group">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default btn-mobile-group" id="mobileBack"><i
                                            class="fa fa-angle-double-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;Back
                                    </button>
                                </div>
                                <div class="btn-group" role="group">
	                                <input type="hidden" name="geo_lat" value="">
	                                <input type="hidden" name="geo_lng" value="">

                                    <button type="submit" class="btn btn-mobile-group btn-yellow">Submit&nbsp;&nbsp;&nbsp;&nbsp;<i
                                            class="fa fa-thumbs-up"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</section>
<!-- End Mobile Form Section -->


<script>

    var check_session = '';
    if (check_session!='') {
        localStorage.setItem('services', check_session);
    }


    $("#serviceNext").on('click', function (e) {

        var service = $.trim($("#service_check_mobile").val());
        if (service != "" && (checkServiceInCache('mobile') || localStorage.getItem('services') === $("#service_check_mobile").val())) {
            $('#mobile-search-form').toggleClass('hidden');
            $('#location-mobile-form').toggleClass('hidden');

            if ($("#location1").val() == "") {
                $("#location1").focus();
            }
            else {
                $("#mob1").focus();
            }
        }
        else {
            swal("Oops!", "Please select a service from auto-complete box only.", "error");
        }
    });

    $("#mobileNext").on('click', function (e) {
        $('#location-mobile-form').toggleClass('hidden');
        $('#otp-form').toggleClass('hidden');
        $("#cust_otp1").focus();
    });

    $("#servicesBack").on('click', function (e) {
        $('#mobile-search-form').toggleClass('hidden');
        $('#location-mobile-form').toggleClass('hidden');
    });

    $("#mobileBack").on('click', function (e) {
        $('#otp-form').toggleClass('hidden');
        $('#location-mobile-form').toggleClass('hidden');
    });

</script>
<section id="services">

    <div class="service-header">
        <h1 class="text-center"> Browse Services</h1>
        <div class="round-arrow"><i class="fa fa-angle-down"></i></div>
    </div>


    <section>
        <div class="parent-list-bg">
            <div class="container-fluid">
                <div class="service-list">


                    <div class="parent-list wow animated fadeInUp">


                                <div class="col-md-10 col-sm-10 col-xs-12 category-list">
                                    <ul class="list-inline service-list-click">
                                                                                
                                            <li class="isLeaf">
                                                <a href="#">
                                                    <span class="icon-plumber list-icon">
                                                          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span>
                </span>
                                                    <h5 class="Plumber">Plumber</h5>
                                                </a>
                                            </li>

                                                                                    
                                            <li class="isLeaf">
                                                <a href="#">
                                                    <span class="icon-electrician list-icon">
                                                          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span>
                </span>
                                                    <h5 class="Electrician">Electrician</h5>
                                                </a>
                                            </li>

                                                                                    
                                            <li class="isLeaf">
                                                <a href="#">
                                                    <span class="icon-carpenter list-icon">
                                                          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span>
                </span>
                                                    <h5 class="Carpenter">Carpenter</h5>
                                                </a>
                                            </li>
                                                                                    
                                            <li class="isLeaf">
                                                <a href="#">
                                                    <span class="icon-full-home-cleaning list-icon">
                                                          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span>
                </span>
                                                    <h5 class="Full Home Cleaning">Full Home Cleaning</h5>
                                                </a>
                                            </li>

                                                                                    
                                            <li class="isNode">
                                                <a href="#">
                                                    <span class="icon-packers list-icon">
                                                          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span>
                </span>
                                                    <h5 class="Packers & Movers">Packers & Movers</h5>
                                                </a>
                                            </li>

                                                                            
                                                                                                                        </ul>

                                </div>
                            </div>

                            <hr>
                                            </div>

                </div>
            </div>
        </div>
    </section>

</section>

<section id="feedback" class="parallax">
    <div class="overlay">
        <div class="container">
            <div class="row">

                <div class="section-title text-center white wow animated fadeInDown">
                    <h1>What Customers Are Saying...</h1>
                    <div class="line"> <hr> </div>
                </div>

                <div class="col-sm-8 col-sm-offset-2">

                    <div class="carousel slide" data-ride="carousel" id="quote-carousel">
                        <!-- Bottom Carousel Indicators -->

                        <!-- Carousel Slides / Quotes -->
                        <div class="carousel-inner text-center">

                            <!-- Quote 1 -->
                            <div class="item active">
                                <blockquote>
                                    <div class="row">
                                        <div class="col-sm-10 col-sm-offset-1">
                                            <p>I was in need of a Pest Control Service and my colleague recommended My Town Home-Services. I contacted their call center and they instantly sent me details of their top 5 most recommended professionals in my locality. I spoke to couple of them and found them to be soft spoken, experienced and the pricing was also quite competitive.</p>
                                            <small>Srinivas Sai</small>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                            <!-- Quote 2 -->
                            <div class="item">
                                <blockquote>
                                    <div class="row">
                                        <div class="col-sm-10 col-sm-offset-1">

                                            <p>Whenever I need a plumber I search in google for the numbers and would call each of them to check their availability. This was always a time consuming process. Recenty, I came across My Town Home-Services, through which i was getting plumbers who are readily available. The person who i shorlisted visited my house within 30 minutes and i was happy with his overall service as well.</p>
                                            <small>Yashwanth Paka</small>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="item">
                                <blockquote>
                                    <div class="row">
                                        <div class="col-sm-10 col-sm-offset-1">

                                            <p>Any Household Service is just one call away. Prompt Service is what I always get. Thanks.</p>
                                            <small>Arjun Chandran</small>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>

                        <!-- Carousel Buttons Next/Prev -->
                        <a data-slide="prev" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
                        <a data-slide="next" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
                    </div>


                    <!-- /Careers Carousel -->

                </div>
            </div>
        </div>
    </div>
</section>


<script>
    function init() {
        var imgDefer = document.getElementsByTagName('img');

        for (var i=0; i<imgDefer.length; i++) {
            if(imgDefer[i].getAttribute('data-imgsrc')) {
                imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-imgsrc'));
            } } }
    window.onload = init;
</script>
<section id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 footer-text1">
                <p> © <a href="" class="rext-red">My Town Home-Services </a> 2013-2016 All rights reserved.</p>
            </div>
            <div class="col-md-5 col-sm-5 col-xs-12 footer-text2">
                <ul class="list-inline">
                    <li><a href="services">Services </a></li>
                    <li>|</li>
                    <li><a href="home/contactUs">Contact Us </a></li>
                    <li>|</li>
                    <li><a href="home/privacyPolicy">Privacy Policy </a></li>
                    <li>|</li>
                    <li><a href="home/termsOfUse">Terms of Use </a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 footer-text3">
                <ul class="list-inline">
                    <li><a href="https://www.facebook.com/RamuKaka" target="_blank"><i class="fa fa-facebook"> </i> </a>
                    </li>
                    <li><a href="https://twitter.com/Ramukakaservice" target="_blank"><i class="fa fa-twitter"> </i>
                        </a></li>
                    <li><a href="https://plus.google.com/106879009386477052613" target="_blank"><i
                                class="fa fa-google-plus"> </i> </a></li>
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
    <a href="tel:04040405050" class="mtalk"> <i class="fa fa-phone" aria-hidden="true"></i></a>
</div>

<div id="overlay"></div>
</body>
</html>

<script src="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBfCCB1gtXQG-GyJUt6PIhDDDPMo3ir-nQ" type="text/javascript"></script>

    <script src="../assets/js/scripts4853654356.min.js"></script>



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
