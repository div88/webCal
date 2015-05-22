window.onload = function(){
  document.getElementById("userInput").value = "";
  //document.getElementByClass("digit").getNumbers("click", calculator.getNumbers());
  
  document.getElementById("clearBtn").addEventListener("click", function(){
    document.getElementById("userInput").value = "";
    input1 = "";
  }); 
}
      
     
var userInput;
var input1 = "";
var input2 = "";
var operand = "";
var result;

var calculator = {
  getOperand:function(op){ //To get the operands 
    operand = op.value;
  },
  getNumbers:function(val){ //To get the numbers from user
    var inputBox = document.getElementById("userInput");
    inputBox.value += val;
    if (val != "" && operand == "") {
      input1 += val.toString();
      inputBox.value ="" ;
      inputBox.value = input1;
    } else if (val != "" && operand != ""){
      input2 += val.toString();
      inputBox.value = "";
      inputBox.value += input2;
    }
  },
  getResult:function(){ //Calculate the result using the numbers and operands
    var num1 = parseFloat(input1);
    var num2 = parseFloat(input2);
    
    switch (operand) {
       case "+":
           result = num1 + num2;
           break;
       case "-":
           result = num1 - num2;
           break;
       case "*":
           result = num1 * num2;
           break;
       case "/":
           result = num1 / num2;
           break;
       case "root":
           result = Math.sqrt(num1);
           break;
   }//End of Switch statement
  
    if (result != undefined) {
      //Clear the input box and show the result
      var inputBox = document.getElementById("userInput");
      inputBox.value = "";
      inputBox.value = result;
      
      //Store the result in input1 for further operations
      input1 = result;
      input2 = "";
      operand = "";
      result = "";
    } else if (result == Nan) {
      var inputBox = document.getElementById("userInput");
      inputBox.value = "";
      inputBox.value = result;
    }
  }
}