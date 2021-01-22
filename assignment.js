                // //  This is the solution to the 1st problem.


//# function definition            
function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}
//# function call 
var result = kilometerToMeter (95);
console.log(result);


                    //  This is the solution to the 2nd problem.

                
//# multiple parameters in a function
function budgetCalculator ( watch, mobile, laptop){
    
    var watchPrice = watch * 50;
    var mobilaPrice =  mobile * 100;
    var leptopPrice = laptop * 500 ;
    
    var totalAmount = watchPrice + mobilaPrice + leptopPrice;
    
    return totalAmount;
}

//# function call 
var amount = budgetCalculator ( 2, 2, 2);
console.log(amount)



                    //  This is the solution to the 3rd problem.


//# function definition 
function hotelCost (totalDay) {

    var totalAmount = 0 ;
    
    if (totalDay <= 10){
        hotelCost = totalDay * 100;
    }

    else if (totalDay <= 20){
        var firstRound  = 10 * 100;
        var month = totalDay-10;
        var secondRound = month * 80;

        totalDay = firstRound + secondRound ;
    }
    else {
        var firstRound = 10 * 100;
        var secondRound = 10 * 80;
        var month = totalDay - 20 ;
        var  thirdRound = month * 50;
        totalAmount = firstRound + secondRound + thirdRound
    }

        return totalAmount;
}

//# function call 
    var result =  hotelCost (30);
    console.log(result)


                        // //  This is the solution to the 4th problem.


function megaFriend (friendsName){

    var arrayNames = friendsName;
    var  longestName = " ";     //creat a variable to store and update longestname.

    for(var i=0; i < arrayNames.length; i ++){

        var checkname = arrayNames[i];

        if(checkname.length > longestName.length){
            longestName = checkname;
        }
    }
    
    return longestName;
}

//# function call
var Friends = ["Brendan Eich", "Ryan Dahl", "Mark Zuckerberg", "Jordan Walke"];
console.log(megaFriend(Friends))
