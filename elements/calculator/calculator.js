window.onload = function(){
        document.getElementById("userInput").value = "";
        
        //document.getElementByClass("digit").getNumbers("click", calculator.getNumbers());
        
        var clearButton = document.getElementById('clearBtn');

        clearButton.addEventListener('click', function() {
          document.getElementById("userInput").value = "";
          input1 = "";
        }, false);
        
      }
      
      
      var userInput;
      var input1 = "";
      var input2 = "";
      var operand = "";
      var result;
      var calculator = {
        getOperand:function(op){
          operand = op.value;
        },
        getNumbers:function(val){
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
          
          console.log(input1 + operand + input2);
        },
        getResult:function(){
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
        
        if (result != "") {
          var inputBox = document.getElementById("userInput");
          inputBox.value = "";
          inputBox.value = result;
          
        }
       
        console.log(result);
        }
      }