
$("#errorAlert, #errorAlertButton").hide();

$("#submitButton").on("click", function () {
    

        let firstNumber = Number($("#firstNumber").val());    
        let secondNumber = Number($("#secondNumber").val());
        let thirdNumber = Number($("#thirdNumber").val());
        let fourthNumber = Number($("#fourthNumber").val());
        let fifthNumber = Number($("#fifthNumber").val());    
        

        if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber) || isNaN(fourthNumber) || isNaN(fifthNumber)) {
            $("#errorAlert, #errorAlertButton").show(1000);
            $("#submitButton, #clearButton").hide();            
            return
        }

        else {
            let sum = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;
            let product = firstNumber * secondNumber * thirdNumber * fourthNumber * fifthNumber;
            let mean = sum / 5;
            let greatest = Math.max(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
            let least = Math.min(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);

            $("#sum").val(sum);           
            $("#least").val(least);
            $("#greatest").val(greatest);
            $("#mean").val(mean);
            $("#product").val(product);            
        }

 });


$("#errorAlertButton, #clearButton").on("click", function () {
    ClearMathInputs();
});

    function ClearMathInputs() {
        $("#firstNumber, #secondNumber, #thirdNumber, #fourthNumber, #fifthNumber").val("");
        $("#sum, #least, #greatest, #mean, #product").val("");
        $("#errorAlert, #errorAlertButton").hide();
        $("#submitButton, #clearButton").show();
        $("#firstNumber").focus();
    }

 //check if reset code works - assigned it to Clear Button during development
//$("#clearButton").on("click", function () {
//    $("#errorAlert, #errorAlertButton").show(1000);
//    $("#submitButton, #clearButton").hide();
//    event.preventDefault();
//})