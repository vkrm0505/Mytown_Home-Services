



            $(function () {
                var availableTags2 = [
                    "Hyderabad",
                    "Secunderabad"
                ];

              /*  $("#city").autocomplete({
                    source: availableTags2
                });*/
$("#city").autocomplete({
  source: function( request, response ) {
    var matches = $.map( availableTags2, function(availableTags2) {
      if ( availableTags2.toUpperCase().indexOf(request.term.toUpperCase()) === 0 ) {
        return availableTags2;
      }
    });
    response(matches);
  }
})
            });


                var availableTags = [
                    "Akberbagh",
                    "Azampura",
                    "Aliabad",
                    "Attapur",
                    "Asif Nagar",
                    "Ahmed Nagar",
                    "Amberpet",
                    "Adikmet",
                    "Ashok nagar",
                    "Alwal",
                    "Addagutta",
                    "Ameerpet",
                    "Abids",
                    "A S Rao Nagar",
                    "Afzalgunj",
                    "Ananad Bagh",
                    "A C Guards",
                    "Auto Nagar",
                    "Adarsh Nagar",
                    "Alkapuri - Kothapet",
                    "Aghapura",
                    "Azamabad",
                    "boduppal",
                    "Barkas",
                    "Begum Bazar",
                    "Barkatpura",
                    "Bagh Amberpet",
                    "Bagh Lingampally",
                    "Bholakpur",
                    "Balkampet",
                    "Banjara Hills",
                    "Borabanda",
                    "Bouddha Nagar",
                    "Bansilalpet",
                    "Begumpet",
                    "Bowenpally",
                    "Bala Nagar",
                    "Basheerbagh",
                    "BHEL",
                    "Bahadurpura",
                    "Bachupally",
                    "Bolarum",
                    "Bandlaguda",
                    "Balapur",
                    "Cherlapalli",
                    "Champapet",
                    "Chandrayan Gutta",
                    "Chavni",
                    "Chintalbasti",
                    "Charminar",
                    "Chanda Nagar",
                    "Chintal",
                    "Chilkalguda",
                    "Chikkadpally",
                    "Chintal",
                    "Chaitanyapuri",
                    "Cherlapally",
                    "Chenoy Trade Center",
                    "Chaderghat",
                    "Chilkur",
                    "Chirag Ali Lane",
                    "Choutuppal",
                    "Chanchalguda",
                    "Dabirpura",
                    "Dhoolpet",
                    "Darussalam",
                    "Doodhbowli",
                    "Dayara/Musheerabad",
                    "Defence Colony",
                    "Dilsukh Nagar",
                    "Domalguga",
                    "Durgarbai Deshukh Colony",
                    "Dammaiguda",
                    "Dundigal",
                    "Dabeerpura",
                    "Dewan Devdi - Charminar",
                    "Dharam Karam Road - Ameerpet",
                    "Darulshifa",
                    "Diamond Point - Sikh Village",
                    "Erramanzil - Punjagutta",
                    "Edulabad - Ghatkesar",
                    "ECIL",
                    "Erragadda",
                    "East Maredpally",
                    "ESI Hospital - Nacharam",
                    "ESI",
                    "East Anandbagh",
                    "Esamia Bazar",
                    "Edi Bazar",
                    "Engine Bowli - Falaknuma",
                    "East Nehru Nagar",
                    "Ella Hotel - Gachibowli",
                    "Eden Bagh",
                    "E C Nagar - Cherlapally",
                    "Falaknuma",
                    "Fathe Darwaza",
                    "Film Nagar",
                    "Fathe Nagar",
                    "Feel Khana",
                    "Ferozguda",
                    "Fathe Maidan",
                    "Film Nagar - Banjarahills",
                    "Ferozguda - Bowenpally",
                    "Fever Hospital - Nallakunta",
                    "Fort View Colony - Himayatnagar",
                    "Farook Nagar -Chandrayangutta",
                    "Fatima Nagar",
                    "Fathe Maidan - Abids",
                    "Gaddi Annaram",
                    "Gowlipura",
                    "Ghansi Bazar",
                    "Gosha Mahal",
                    "Gudi Malkapur",
                    "Gunfoundry",
                    "Golnaka",
                    "Gandhinagar",
                    "Gachibowli",
                    "Gajula Ramaram",
                    "Ganesh Nagar/Jeedimetla",
                    "Gautham Nagar",
                    "Gulzar House",
                    "Gandhi Nagar",
                    "Ghatkesar",
                    "Gowli Guda",
                    "Gandipet",
                    "Golconda",
                    "General Bazar",
                    "Green Lands",
                    "GVK One Mall - Banjara Hills",
                    "Gun Rock Enclave",
                    "Habsiguda",
                    "Hayath Nagar",
                    "Hussain Alam",
                    "Himayath Nagar",
                    "Hafeezpet",
                    "Hydernagar",
                    "hanuman nagar",
                    "Hasmathpet",
                    "HMT Nagar",
                    "High Tech City",
                    "Hyder Guda",
                    "Hyder Nagar - Kukatpally",
                    "Humayun Nagar",
                    "High Court",
                    "Hakeempet",
                    "Hyder Shah Kote",
                    "IS Sadan",
                    "IDA Bollarum - Miyapur",
                    "Ibrahimpatnam",
                    "IDPL",
                    "Indira Park",
                    "Inorbit Mall - Hitech City",
                    "IDPL Colony",
                    "Indira Nagar - Lingampally",
                    "IDA - Jeedimetla",
                    "Ibrahim Bagh",
                    "Indira Nagar - Gachibowli",
                    "I S Sadan - Santosh Nagar",
                    "Imlibun - Malakpet",
                    "Inderbagh",
                    "Indirabagh",
                    "Indira Nagar - Falaknuma",
                    "Indira Gandhi Nagar",
                    "Jangammet",
                    "Jahanuma",
                    "Jambagh",
                    "Jubilee Hills",
                    "Jagadgiri Gutta",
                    "Jeedimetla",
                    "JNTU - Kukatpally",
                    "Jagadish Market - Abids",
                    "Jamia Osmania",
                    "Jiyaguda",
                    "Jillelaguda",
                    "Jeedimetla Village",
                    "Kapra",
                    "Kothapet",
                    "Karmanghat",
                    "Kurmaguda",
                    "Kanchanbagh",
                    "Kishanbagh",
                    "Karwan",
                    "Kachiguda",
                    "Kavadiguda",
                    "Khairtabad",
                    "KPHB Colony",
                    "Kukatpally",
                    "Kothapet",
                    "Kushaiguda",
                    "Kondapur",
                    "Koti",
                    "Kompally",
                    "KarKhana",
                    "King Koti",
                    "Lalithabagh",
                    "Langar Houz",
                    "Lala Guda",
                    "Lal Darwaja",
                    "L B Nagar",
                    "Lakdi Ka Pool",
                    "Lingampally",
                    "Lower Tank Bund",
                    "Lothkunta",
                    "Liberty",
                    "Lalapet",
                    "Lal Bazar",
                    "Mallapur",
                    "Mansoorabad",
                    "Moosrambagh",
                    "Moghalpura",
                    "Mylardevpally",
                    "Manghalhat",
                    "Muradnagar",
                    "Mehdipatnam",
                    "Mallepally",
                    "Moosapet",
                    "Mothinagar",
                    "Macha Bollaram",
                    "Moula Ali",
                    "Mettuguda",
                    "Maredpally",
                    "Minister Road",
                    "Madhapur",
                    "Miyapur",
                    "Malakpet",
                    "Malkajgiri",
                    "Masab tank",
                    "Manikonda",
                    "Musheerabad",
                    "Moti Nagar",
                    "Madinaguda",
                    "Marredpally",
                    "Medchal",
                    "Midhani",
                    "Midhani Quarters",
                    "MLA Quarters",
                    "Mozamjahi Market",
                    "Nallagandla",
                    "Noorkhan Bazar",
                    "Nawabsaheb kunta",
                    "Nanalnagar",
                    "Nallakunta",
                    "Nampally",
                    "Narayananaguda",
                    "Nizampet",
                    "Nagole",
                    "Nacharam",
                    "Neredmet",
                    "Necklace Road",
                    "Nagaram",
                    "New Bowenpally",
                    "Nanakramguda",
                    "Nanalnagar - Tolichowki",
                    "Narsingi",
                    "New MLA Quarters",
                    "Namalagundu",
                    "Old Malakpet",
                    "Old Bowenpally",
                    "Osmanjung",
                    "Osmania University",
                    "Old Alwal",
                    "Old Feelkhana",
                    "O U Colony - Shaikpet",
                    "Osman Shahi",
                    "Old Bhoiguda",
                    "Osmania Medical College",
                    "Osman Sagar Road",
                    "Osmanpura",
                    "Owaisi Nagar - Kanchan Bagh",
                    "PNT Colony",
                    "Pathergatti",
                    "Purana pul",
                    "Patancheru",
                    "Padmarao Nagar",
                    "Panjagutta",
                    "Paradise",
                    "Parklane",
                    "Patny Center",
                    "Pragati Nagar Colony",
                    "Picket",
                    "PG Road - Pendergast Road",
                    "Prakash Nagar",
                    "Pocharam",
                    "Pathar Gatti",
                    "Quthbullapur",
                    "Quadri Bagh - Amberpet",
                    "Qazipura - Shah Ali Banda",
                    "Ramanthapur",
                    "Ramakrishnapuram",
                    "Riyasat Nagar",
                    "Rein Bazar",
                    "Ramnaspura",
                    "Red Hills",
                    "Ramnagar",
                    "Rahamath Nagar",
                    "R.C.Puram",
                    "Rajendra Nagar",
                    "Ramgopalpet",
                    "RTC Crossroads",
                    "Ranigung",
                    "Ram Nagar",
                    "RP Road - Rashtrapati Road",
                    "Ramkote",
                    "Raj Bhavan Road",
                    "Ranmoji Film City",
                    "Ramchandra Puram",
                    "Rethi Bowli",
                    "Rahmat Nagar",
                    "Rasoolpura",
                    "Rodha Mistri Nagar",
                    "Saroor Nagar",
                    "Secunderabad",
                    "Saidabad",
                    "Santosh Nagar",
                    "Saleem Nagar",
                    "Shalibanda",
                    "Shivarampally",
                    "Sultan Bazar",
                    "Somajiguda",
                    "Sanjeeva Reddy Nagar - Ameerpet",
                    "Sanath Nagar",
                    "Sri Nagar Colony",
                    "Shaikpet",
                    "Serilingampalle",
                    "Shobana Colony/Fathenagar",
                    "Shapur Nagar",
                    "Suraram Colony",
                    "Safilguda",
                    "Seethaphalmandi",
                    "Shamshabad",
                    "Sanikpuri",
                    "Suchitra Cross Roads",
                    "Shivam Road",
                    "Sarojni Devi Road - SD Road",
                    "Siddiamber Bazar",
                    "Shah Ali Banda",
                    "Talabchanchalam",
                    "Tappachaputra",
                    "Toli chowki",
                    "Tarnaka",
                    "Trimulgherry",
                    "Tad Bund",
                    "Troop Bazar",
                    "Tilik Nagar - Amberpet",
                    "Tilik Road",
                    "Tukaram Gate",
                    "Turkayamzal",
                    "Turkapally",
                    "Thumkunta",
                    "Talabatta",
                    "Tukkuguda",
                    "Uppal",
                    "Uppuguda",
                    "Upparapalli",
                    "Uppal Ring Road",
                    "Uttam Nagar",
                    "Udamgadda",
                    "Udyog Nagar - Balapur",
                    "Umda Nagar",
                    "Upparguda",
                    "Vanasthalipuram",
                    "Vijaya Nagar Colony - Mendhipatnam",
                    "Vidya Nagar",
                    "Vengalrao Nagar",
                    "Vivekananda Nagar Colony",
                    "Vasanthapuri Colony/Old Malkajgiri",
                    "Vikrampuri ",
                    "Vivekananda Nagar - Kukatpally",
                    "Venkatgari - Jubilli Hills",
                    "Venkatapuram - Alwal",
                    "Vittalwadi - Narayanaguda",
                    "Vasanth Nagar - Kukat pally",
                    "Vayupuri",
                    "Vasavi Nagar - Karkhana",
                    "Wahab Nagar - Gun Rock Enclave",
                    "Widia Employees Colony - Miyapur",
                    "West Maredpally",
                    "Warsiguda",
                    "West Venkatapuram - Alwal",
                    "Wishper Valley - Towli Chowki",
                    "Walker Town - Padmarao Nagar",
                    "Western Hills - Kukatpally",
                    "West Nehru Nagar",
                    "walamtari - Himayat Sagar",
                    "Yousufguda",
                    "Yapral",
                    "Yellareddyguda",
                    "Yakutpura",
                    "Yadagirigutta",
                    "YMCA - Narayanguda",
                    "YMCA - Secunderabad",
                    "Yacharam",
                    "Ziaguda",
                    "Zamistanpur - Musheerabad",
                    "Zehra Nagar - Banjara Hills"
                ];

$("#location").autocomplete({
  source: function( request, response ) {
    var matches = $.map( availableTags, function(availableTags) {
      if ( availableTags.toUpperCase().indexOf(request.term.toUpperCase()) === 0 ) {
        return availableTags;
      }
    });
    response(matches);
  }
});

                $("#droplocation").autocomplete({
                    source: function( request, response ) {
                        var matches = $.map( availableTags, function(availableTags) {
                            if ( availableTags.toUpperCase().indexOf(request.term.toUpperCase()) === 0 ) {
                                return availableTags;
                            }
                        });
                        response(matches);
                    }
                });

                var availableTags1 = [
                    "AC repair",
                    "AC shifting",
                    "AC wiring",
                    "Accountants",
                    "Air Ticketing",
                    "Animal Doctor",
                    "Baby sitter",
                    "Bike Insurance",
                    "Bike Rentals",
                    "Birth Certificate",
                    "Bus Ticketing",
                    "Cabs",
                    "Car Insurance",
                    "Car Rentals",
                    "Carpenter",
                    "Catering",
                    "CCTV",
                    "Classifieds",
                    "Computer",
                    "Cool Roof Paint",
                    "Cooler",
                    "Curtain Rods Installation",
                    "Death Certificate",
                    "Dish tv Installation",
                    "Dishwasher",
                    "Dog food Suppliers",
                    "Dog Trainers",
                    "Drivers",
                    "Elderly Care",
                    "EPBX",
                    "Event Management",
                    "Fan",
                    "Firm Registration",
                    "Fridge",
                    "Furniture",
                    "Furniture Repair",
                    "Gardeners",
                    "Gas Stove",
                    "Geaser",
                    "Generators",
                    "Generators On Rent",
                    "Grocery",
                    "House Cleaning",
                    "House Tax",
                    "Insurance Policy",
                    "Inverters",
                    "Inverter Wiring",
                    "IT returns",
                    "Labour Licence",
                    "Loans",
                    "Marketing Staff",
                    "Mixer ",
                    "Mosquito Nets",
                    "Office Boy",
                    "Oven",
                    "Packers and Movers",
                    "Pan card",
                    "Pandits",
                    "Passports Agents",
                    "Pest Control",
                    "Permanent Drivers",
                    "PF filling",
                    "Physiotherapist",
                    "Plumbing",
                    "Power Backups",
                    "Printer",
                    "Property Documentation Check",
                    "RTO works",
                    "Secondhand Laptops",
                    "Security Guard",
                    "Septic tank Cleaner",
                    "Software Installation",
                    "Technician",
                    "Tele callers",
                    "Temporary Cook",
                    "Temporary Drivers",
                    "Temporary Staff",
                    "Tiles in Bathroom",
                    "To-Let",
                    "Towing Services",
                    "Train Ticketing",
                    "TV",
                    "Vacuum Cleaners",
                    "Washing Machine",
                    "Water Heater",
                    "Water Pump",
                    "Water Purifier",
                    "Watertank Cleaners",
                    "White Washing"
                ];



$("#services").autocomplete({
  source: function( request, response ) {
    var matches = $.map( availableTags1, function(availableTags1) {
      if ( availableTags1.toUpperCase().indexOf(request.term.toUpperCase()) === 0 ) {
        return availableTags1;
      }
    });
    response(matches);
  }





});



      
       $(function () {
                $("#datepicker").datepicker();
            });



        function validatephone(inputField) {
                var isValid = /^(\d{10})$/.test(inputField.value);

                if (isValid) {

                } else {
                    alert('Phone no should contain maximum 10 digits');
                }

                return isValid;
            }

            function validateHhMm(inputField) {
                var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputField.value);

                if (isValid) {

                } else {

                    alert('Time is invalid. Please enter time in HH:MM format. ');
                    setTimeout(function () { inputField.focus(); }, 1);

                }

                return isValid;
            }
            $(function () {

            var availableTags1 = [
                "AC repair",
                "AC shifting",
                "AC wiring",
                "Accountants",
                "Air Ticketing",
                "Animal Doctor",
                "Baby sitter",
                "Bike Insurance",
                "Bike Rentals",
                "Birth Certificate",
                "Bus Ticketing",
                "Cabs",
                "Car Insurance",
                "Car Rentals",
                "Carpenter",
                "Catering",
                "CCTV",
                "Classifieds",
                "Computer",
                "Cool Roof Paint",
                "Cooler",
                "Curtain Rods Installation",
                "Death Certificate",
                "Dish tv Installation",
                "Dishwasher",
                "Dog food Suppliers",
                "Dog Trainers",
                "Drivers",
                "Elderly Care",
                "EPBX",
                "Event Management",
                "Fan",
                "Firm Registration",
                "Fridge",
                "Furniture",
                "Furniture Repair",
                "Gardeners",
                "Gas Stove",
                "Geaser",
                "Generators",
                "Generators On Rent",
                "Grocery",
                "House Cleaning",
                "House Tax",
                "Insurance Policy",
                "Inverters",
                "Inverter Wiring",
                "IT returns",
                "Labour Licence",
                "Loans",
                "Marketing Staff",
                "Mixer ",
                "Mosquito Nets",
                "Office Boy",
                "Oven",
                "Packers and Movers",
                "Pan card",
                "Pandits",
                "Passports Agents",
                "Pest Control",
                "Permanent Drivers",
                "PF filling",
                "Physiotherapist",
                "Plumbing",
                "Power Backups",
                "Printer",
                "Property Documentation Check",
                "RTO works",
                "Secondhand Laptops",
                "Security Guard",
                "Septic tank Cleaner",
                "Software Installation",
                "Technician",
                "Tele callers",
                "Temporary Cook",
                "Temporary Drivers",
                "Temporary Staff",
                "Tiles in Bathroom",
                "To-Let",
                "Towing Services",
                "Train Ticketing",
                "TV",
                "Vacuum Cleaners",
                "Washing Machine",
                "Water Heater",
                "Water Pump",
                "Water Purifier",
                "Watertank Cleaners",
                "White Washing"
            ];


            function split( val ) {
                return val.split( /,\s*/ );
            }
            function extractLast( term ) {
                return split( term ).pop();
            }



            $('#addservices').autocomplete({
                minLength: 1,
                source: function (request, response) {
                    var term = request.term;

                    // substring of new string (only when a comma is in string)
                    if (term.indexOf(', ') > 0) {
                        var index = term.lastIndexOf(', ');
                        term = term.substring(index + 2);
                    }

                    // regex to match string entered with start of suggestion strings
                    var re = $.ui.autocomplete.escapeRegex(term);
                    var matcher = new RegExp('^' + re, 'i');
                    var regex_validated_array = $.grep(availableTags1, function (item, index) {
                        return matcher.test(item);
                    });

                    // pass array `regex_validated_array ` to the response and
                    // `extractLast()` which takes care of the comma separation

                    response($.ui.autocomplete.filter(regex_validated_array,
                        extractLast(term)));
                },
                focus: function () {
                    return false;
                },
                select: function (event, ui) {
                    var terms = split(this.value);
                    terms.pop();
                    terms.push(ui.item.value);
                    terms.push('');
                    this.value = terms.join(', ');
                    return false;
                }
            });

            });

            var count=0;
            function sendOTP(){
                if(count<2) {
                    if ($("#mobile").val() != "" && $("#mobile").val().length == 10 &&  $.isNumeric($("#mobile").val())) {
                        var url ='Services/PHPCode/OTP.php?mobile=' + $("#mobile").val()+'&otp=';
                        count++;
                        $("#sendSMS").html("<span class=\"glyphicon glyphicon-ok\"></span>&nbsp;&nbsp;Sent");
                        $.ajax({
                            url: url,
                            type: "POST",

                            success: function (data) {

                                $("#sendSMS").html("<span class=\"glyphicon glyphicon-arrow-right\"></span>&nbsp;&nbsp;Resend");

                            }
                        });
                    }

                    else {
                        alert("Please enter 10 digit mobile number");
                    }
                }
                else{
                    alert("Maximum OTP limit reached.Please try after some time!");
                }

            }



            $(".ads-panel").on("click",function(){
                window.location = $(this).find("a:first").attr("href");
                return false;
            });


            $("#main-form").submit(function(e){

                if ($("#mobile").val() != "" && $("#mobile").val().length == 10 &&  $.isNumeric($("#mobile").val())) {
                    var confirm = prompt("Enter One Time Password(OTP) send on your mobile");
                    if (confirm === null) {
                        e.preventDefault();
                   }
                    else if (confirm != otp) {
                        alert("Invalid OTP. Please try again");
                        e.preventDefault();
                    }
                }
                else
                {
                    alert("Please enter 10 digit mobile number");
                    e.preventDefault();
                }
            });

            var otp=0;
            function sendOTPbyJS(){

                if(count<2) {
                    if ($("#mobile").val() != "" && $("#mobile").val().length == 10 &&  $.isNumeric($("#mobile").val())) {
                        var mobile= $("#mobile").val();
                        otp=randomIntFromInterval(100000,999999);
                        var del=randomIntFromInterval(100,999);
                        var enc=otp+del;
                        if(location.href.indexOf("OtherServices")==-1){
                            var url ='Services/PHPCode/OTP.php';
                        }
                        else{
                            var url ='../Services/PHPCode/OTP.php';
                        }

                        count=count+1;

                        $.ajax({
                            url: url,
                            data: {mobile: mobile,enc: enc,del:del},
                            type: "POST",
                            success: function (data) {

                            }
                        });
                    }

                    else {
                        alert("Please enter 10 digit mobile number");
                    }
                }
                else{
                    alert("Maximum OTP limit reached.Please try after some time!");
                }


            }

            function randomIntFromInterval(min,max)
            {
                return Math.floor(Math.random()*(max-min+1)+min);
            }



















