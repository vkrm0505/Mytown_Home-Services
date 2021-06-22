/**
 * Created by idrisjafer on 7/24/14.
 */
var mapService = new Object();

mapService['ACrepair'] = "AC Repair"
mapService['ACshifting'] = "AC Shifting"
mapService['ACwiring'] = "AC Wiring"
mapService['Accountants'] = "Accountants"
mapService['AirTicketing'] = "Air Ticketing"
mapService['AnimalDoctor'] = "Animal Doctor"
mapService['Babysitter'] = "Baby sitter"
mapService['BikeInsurance'] = "Bike Insurance"
mapService['BikeRentals'] = "Bike Rentals"
mapService['BirthCertificate'] = "Birth Certificate"
mapService['BusTicketing'] = "Bus Ticketing"
mapService['Cabs'] = "Cabs"
mapService['Carpenter'] = "Carpenter"
mapService['CarInsurance'] = "Car Insurance"
mapService['CarRentals'] = "Car Rentals"
mapService['Catering'] = "Catering"
mapService['CCTV'] = "CCTV"
mapService['Classifieds'] = "Classifieds"
mapService['Computer'] = "Computer"
mapService['CoolRoofPaint'] = "Cool Roof Paint"
mapService['Cooler'] = "Cooler"
mapService['CurtainRodsInstallation'] = "Curtain Rods Installation"
mapService['DeathCertificate'] = "Death Certificate"
mapService['DishtvInstallation'] = "Dish tv Installation"
mapService['Dishwasher'] = "Dishwasher"
mapService['DogfoodSuppliers'] = "Dog food Suppliers"
mapService['DogTrainers'] = "Dog Trainers"
mapService['Drivers'] = "Drivers"
mapService['ElderlyCare'] = "Elderly Care"
mapService['EPBX'] = "EPBX"
mapService['EventManagement'] = "Event Management"
mapService['Fan'] = "Fan"
mapService['FirmRegistration'] = "Firm Registration"
mapService['Fridge'] = "Fridge"
mapService['Furniture'] = "Furniture"
mapService['FurnitureRepair'] = "Furniture Repair"
mapService['Gardeners'] = "Gardeners"
mapService['GasStove'] = "Gas Stove"
mapService['Geaser'] = "Geaser"
mapService['Generators'] = "Generators"
mapService['GeneratorsOnRent'] = "Generators On Rent"
mapService['Grocery'] = "Grocery"
mapService['HouseCleaning'] = "House Cleaning"
mapService['HouseTax'] = "House Tax"
mapService['InsurancePolicy'] = "Insurance Policy"
mapService['Inverters'] = "Inverters"
mapService['InverterWiring'] = "Inverter Wiring"
mapService['ITreturns'] = "IT returns"
mapService['LabourLicence'] = "Labour Licence"
mapService['Loans'] = "Loans"
mapService['MarketingStaff'] = "Marketing Staff"
mapService['Mixer'] = "Mixer"
mapService['MosquitoNets'] = "Mosquito Nets"
mapService['OfficeBoy'] = "Office Boy"
mapService['Oven'] = "Oven"
mapService['PackersandMovers'] = "Packers and Movers"
mapService['Pancard'] = "Pan Card"
mapService['PassportsAgents'] = "Passports Agents"
mapService['PestControl'] = "Pest Control"
mapService['PermanentDrivers'] = "Permanent Driver"
mapService['PFfilling'] = "PF Filling"
mapService['Physiotherapist'] = "Physiotherapist"
mapService['Plumbing'] = "Plumbing"
mapService['PowerBackups'] = "Power Backups"
mapService['Printer'] = "Printer"
mapService['Pandits'] = "Pandits"
mapService['PropertyDocumentationCheck'] = "Property Documentation Check"
mapService['RTOworks'] = "RTO works"
mapService['SecondhandLaptops'] = "Secondhand Laptops"
mapService['SecurityGuard'] = "Security Guard"
mapService['SeptictankCleaner'] = "Septic tank Cleaner"
mapService['SoftwareInstallation'] = "Software Installation"
mapService['Telecallers'] = "Tele Callers"
mapService['TemporaryCook'] = "Temporary Cook"
mapService['TemporaryDrivers'] = "Temporary Drivers"
mapService['TemporaryStaff'] = "Temporary Staff"
mapService['TilesinBathroom'] = "Tiles in Bathroom"
mapService['To-Let'] = "To-Let"
mapService['TowingServices'] = "Towing Services"
mapService['Technician'] = "Technician"
mapService['TrainTicketing'] = "Train Ticketing"
mapService['TV'] = "TV"
mapService['VacuumCleaners'] = "Vacuum Cleaners"
mapService['WashingMachine'] = "Washing Machine"
mapService['WaterHeater'] = "Water Heater"
mapService['WaterPump'] = "Water Pump"
mapService['WaterPurifier'] = "Water Purifier"
mapService['WatertankCleaners'] = "Watertank Cleaners"
mapService['WhiteWashing'] = "White Washing"



    $(function() {
        var availableTags  = [
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
        ]; // array of autocomplete words
        var minWordLength = 1;
        function split(val) {
            return val.split(' ');
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("#main-services") // jQuery Selector
// don't navigate away from the field on tab when selecting an item
            .bind("keydown", function(event) {
                if (event.keyCode === $.ui.keyCode.TAB && $(this).data("ui-autocomplete").menu.active) {
                    event.preventDefault();
                }
            }).autocomplete({
                minLength: minWordLength,
                source: function(request, response) {
// delegate back to autocomplete, but extract the last term
                    var term = extractLast(request.term);
                    if(term.length >= minWordLength){
                        response($.ui.autocomplete.filter( availableTags, term ));
                    }
                },
                focus: function() {
// prevent value inserted on focus
                    return false;
                },
                select: function(event, ui) {
                    var terms = split(this.value);
// remove the current input
                    terms.pop();
// add the selected item
                    terms.push(ui.item.value);
// add placeholder to get the comma-and-space at the end
                    terms.push("");
                    this.value = terms.join(" ");
                    return false;
                }
            });
    });

