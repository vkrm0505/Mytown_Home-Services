/**
 * Created by idrisjafer on 8/20/14.
 */
var pre;
var next=0;
var res=0;
var min_exp=0;
var max_exp=100;

var geocoder;


function GetDatafromServer(lat,lng,service,min_exp,max_exp,rad,offset,type)
{

    $(".showing").html(' <h3>Showing results for "'+service+'"</h3> ');
    /*  var searchUrl = '../Services/PHPCode/getSP_List.php?lat=' + $('#lat').val() + '&lng=' + $('#lon').val() + '&service=' + $('#main-services').val() + '&radius=15&experience=1';*/
    var searchUrl = '../Services/PHPCode/getSP_List.php?lat=' + lat + '&lng=' + lng + '&service=' + service + '&radius='+rad+'&min_experience='+min_exp+'&max_experience='+max_exp+'&offset='+offset+'&type='+type;
    downloadUrl(searchUrl, function (data1) {
        var xml = parseXml(data1);
        markerNodes = xml.documentElement.getElementsByTagName("splist");

        $(".SP_List").html("");
        if(markerNodes.length>0){
            res=1;
            for (var i = 0; i < markerNodes.length; i++) {
                var id = markerNodes[i].getAttribute("id");
                var name = markerNodes[i].getAttribute("name");
                var type = markerNodes[i].getAttribute("type");
                var location = markerNodes[i].getAttribute("location");
                var city = markerNodes[i].getAttribute("city");
                var pancard = markerNodes[i].getAttribute("pancard");
                var voterid = markerNodes[i].getAttribute("voterid");
                var aadhaar = markerNodes[i].getAttribute("aadhaar");
                var experience = markerNodes[i].getAttribute("experience");
                var licence = markerNodes[i].getAttribute("licence");
                var link = markerNodes[i].getAttribute("image");

                var image;

                if(link=="false")
                {
                    image="../Assets/images/no-image.png";
                }
                else{

                    image="../Assets/Data/"+id+"/"+id+".jpg";
                }

                var html="";var checkProof=0;
                if(licence!="false")
                {
                    html=html+'Driving License &nbsp; &nbsp;';
                    checkProof=1;
                }
                if(pancard!="false")
                {
                    html=html+'PAN Card &nbsp; &nbsp;';
                    checkProof=1;
                }
                if(voterid!="false")
                {
                    html=html+'Voter ID &nbsp;&nbsp;';
                    checkProof=1;
                }
                if(aadhaar!="false")
                {
                    html=html+'Aadhaar Card &nbsp;&nbsp;';
                    checkProof=1;
                }

                if(checkProof==1){
                    html='<p><span class="glyphicon glyphicon-check"></span>&nbsp;&nbsp;Verified:&nbsp;&nbsp;'+html+'</p>';
                }

                $(".SP_List").append('<div class="row animated fadeInUp hidden-xs"><div class="col-md-11"> <div class="panel panel-info">  <div class="panel-heading"><h2 class="panel-title" style="font-size: 25px;"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;'+name+' </h2> </div> <div class="panel-body row"><div class="col-md-3"><img src='+image+' alt="Loading images...." class="sp_pics"/></div>           <div class="col-md-7 col-md-offset-1"><p><span class="glyphicon glyphicon-barcode"></span>&nbsp;&nbsp;  Service Provider ID: RK'+id+'A </p>  <p><span class="glyphicon glyphicon-tags"></span>&nbsp;&nbsp;  Service Type: '+type+' </p><p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;&nbsp; Location : '+location+' , '+city+'  </p> '+html+' <p><span class="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp;Total Experience : '+experience+' Years</p> <div class="pull-right">  </div></div> </div></div></div></div><div class="row animated fadeInUp visible-xs"><div class="col-md-11"> <div class="panel panel-info">  <div class="panel-heading"><h2 class="panel-title" style="font-size: 25px;"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;'+name+' </h2> </div> <div class="panel-body row"><div class=" col-xs-6 col-xs-offset-3"><img src='+image+' alt="Loading images...." class="sp_pics1"/></div>           <div class="col-xs-11 col-xs-offset-1">  <p><span class="glyphicon glyphicon-barcode"></span>&nbsp;&nbsp;  Service Provider ID: RK'+id+'A </p> <p><span class="glyphicon glyphicon-tags"></span>&nbsp;&nbsp;  Service Type: '+type+' </p><p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;&nbsp; Location : '+location+' , '+city+'  </p> '+html+' <p><span class="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp;Total Experience : '+experience+' Years</p> <div class="pull-right"> </div></div> </div></div></div></div>');

             /* $(".SP_List").append('<div class="row animated fadeInUp hidden-xs"><div class="col-md-11"> <div class="panel panel-info">  <div class="panel-heading"><h2 class="panel-title" style="font-size: 25px;"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;'+name+' </h2> </div> <div class="panel-body row"><div class="col-md-3"><img src='+image+' alt="Loading images...." class="sp_pics"/></div>           <div class="col-md-7 col-md-offset-1"><p><span class="glyphicon glyphicon-barcode"></span>&nbsp;&nbsp;  Service Provider ID: RK'+id+'A </p>  <p><span class="glyphicon glyphicon-tags"></span>&nbsp;&nbsp;  Service Type: '+type+' </p><p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;&nbsp; Location : '+location+' , '+city+'  </p> '+html+' <p><span class="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp;Total Experience : '+experience+' Years</p> <div class="pull-right"> <button class="btn btn-lg btn-primary hire-me" data-toggle="modal" data-target="#myModal1" style="height:48px;margin-top: -50px" type="button">More Details</button> </div></div> </div></div></div></div><div class="row animated fadeInUp visible-xs"><div class="col-md-11"> <div class="panel panel-info">  <div class="panel-heading"><h2 class="panel-title" style="font-size: 25px;"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;'+name+' </h2> </div> <div class="panel-body row"><div class=" col-xs-6 col-xs-offset-3"><img src='+image+' alt="Loading images...." class="sp_pics1"/></div>           <div class="col-xs-11 col-xs-offset-1">  <p><span class="glyphicon glyphicon-barcode"></span>&nbsp;&nbsp;  Service Provider ID: RK'+id+'A </p> <p><span class="glyphicon glyphicon-tags"></span>&nbsp;&nbsp;  Service Type: '+type+' </p><p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;&nbsp; Location : '+location+' , '+city+'  </p> '+html+' <p><span class="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp;Total Experience : '+experience+' Years</p> <div class="pull-right"> <button class="btn btn-lg btn-primary hire-me" data-toggle="modal" data-target="#myModal1"  style="height:48px;" type="button">More Details </button> </div></div> </div></div></div></div>');*/

            }
            $(".SP_List").append('<div class="row"><div class="col-md-8 col-md-offset-2 col-xs-12"> <button class="btn btn-default" id="previous" style="font-size: 15px;" type="button"><span class="glyphicon glyphicon-backward"></span>&nbsp;&nbsp;Previous Page</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-default"  style="font-size: 15px" type="button" id="next">Next Page&nbsp;&nbsp;<span class="glyphicon glyphicon-forward"></span></button><br><br> </div></div>');

            pre=offset;
            if(pre<=0){

                $('#previous').attr('disabled','disabled');
            }
            else{
                $('#previous').removeAttr('disabled');
            }
           /* if(next<0){
                $('#next').attr('disabled','disabled');
            }
            else{
                $('#next').removeAttr('disabled');
            }*/

            $("#next").on("click",function(){
                next=next+20;
                $('body,html').animate({'scrollTop':0},1000, 'linear');
                $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

                GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,next,"false");
            });


            $("#previous").on("click",function(){

                next=next-20;
                $('body,html').animate({'scrollTop':0},1000, 'linear');
                $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');
                GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,next,"false");
            });

        }
        else if(res==0)
        {
            $(".SP_List").append(' <img src="../Assets/images/data-not-found.jpg" class="loader" >');
        }
        else{
            $(".SP_List").html('<p style="text-align: center;font-size: 20px;color: #999999">No more results to display.........</p><br><center><button class="btn btn-default"  style="font-size: 19px" type="button" id="back"><span class="glyphicon glyphicon-backward"></span>&nbsp;&nbsp;Go Back</button></center><br><br> </div></div>');

            $("#back").on("click",function(){
                next=next-20;
                $('body,html').animate({'scrollTop':0},1000, 'linear');

             /*   $(".SP_List").html('<p style="text-align: center;font-size: 20px;color: #999999">Loading results.........</p>');*/
                $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');
                GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,0,"false");
            });
        }

    });


}

function downloadUrl(url, callback) {
    var request = window.ActiveXObject ?
        new ActiveXObject('Microsoft.XMLHTTP') :
        new XMLHttpRequest;

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request.responseText, request.status);
        }
    };

    request.open('GET', url, true);
    request.send(null);
}

function parseXml(str) {
    if (window.ActiveXObject) {
        var doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.loadXML(str);
        return doc;
    } else if (window.DOMParser) {
        return (new DOMParser).parseFromString(str, 'text/xml');
    }
}

function doNothing() {
}

function initialize(){
    geocoder = new google.maps.Geocoder();
}

function codeAddress() {

    var address = $("#location1").text()+","+ $("#city1").text();
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            //$('#lat').val(),$('#lon').val()
            $('#lat').val(results[0].geometry.location.lat());
            $('#lon').val(results[0].geometry.location.lng());

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

function checkLocation(){
    if($('#lat').val()=="" || $('#lon').val()=="")
    {
        alert("Please set the location");
        $('#myModal').modal('show');
    }

}

$("#exp0").on("click",function(){
    min_exp=0;
    max_exp=1;
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,0,"false");
});


$("#exp1").on("click",function(){
    min_exp=1;
    max_exp=5;
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,0,"false");
});


$("#exp2").on("click",function(){
    min_exp=6;
    max_exp=10;
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,0,"false");
});


$("#exp3").on("click",function(){
    min_exp=11;
    max_exp=15;
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,0,"false");
});


$("#exp4").on("click",function(){
    min_exp=16;
    max_exp=20;
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,0,"false");
});


$("#exp5").on("click",function(){
    min_exp=21;
    max_exp=100;
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer(1,1,sessionStorage.service,min_exp,max_exp,20,0,"false");
});


$("#rad0").on("click",function(){
    checkLocation();
        $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer($('#lat').val(),$('#lon').val(),sessionStorage.service,min_exp,max_exp,10,0,"true");
});


$("#rad1").on("click",function(){
    checkLocation();
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer($('#lat').val(),$('#lon').val(),sessionStorage.service,min_exp,max_exp,20,0,"true");
});



$("#rad2").on("click",function(){
    checkLocation();
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer($('#lat').val(),$('#lon').val(),sessionStorage.service,min_exp,max_exp,30,0,"true");
});



$("#rad3").on("click",function(){
    checkLocation();
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer($('#lat').val(),$('#lon').val(),sessionStorage.service,min_exp,max_exp,40,0,"true");
});



$("#rad4").on("click",function(){
    checkLocation();
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer($('#lat').val(),$('#lon').val(),sessionStorage.service,min_exp,max_exp,50,0,"true");
});


$("#rad5").on("click",function(){
    checkLocation();
    $('body,html').animate({'scrollTop':0},1000, 'linear');
    $(".SP_List").html(' <img src="../Assets/images/loader.gif" class="loader" >');

    GetDatafromServer($('#lat').val(),$('#lon').val(),sessionStorage.service,min_exp,max_exp,80,0,"true");
});

$('#main-services').on("keypress", function(e) {
    if (e.keyCode == 13) {
        if($("#main-services").val().trim()!=""){

            if(typeof(Storage) !== "undefined") {
                sessionStorage.service=$("#main-services").val().trim();
            }

            var service= $("#main-services").val().trim();
            if(availableTags1.indexOf(service)!=-1)
            {
                var str = $("#main-services").val().trim();
                str = str.replace(/ +/g, "");
                var url="http://ramukaka.com/"+str+"/index.html";
                window.location=url;
            }
            else
            {
                window.location="http://ramukaka.com/OtherServices/index.html";
            }

            $("#empty").addClass("hidden");
        }
        else
        {
            $("#empty").removeClass("hidden").addClass("show");
        }
    }
});








