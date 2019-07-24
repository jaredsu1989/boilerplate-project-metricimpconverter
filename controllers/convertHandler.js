/*
*
*
*       Complete the handler logic below
*       
*       
*/
console.log();
function ConvertHandler() {
    
  this.getNum = function(input) {
    var result;
    //Find the index of the first character
  let regex0 = /[a-z]/i;
  let indexFChar = input.search(regex0);
  let numStr =  input.slice(0, indexFChar);
    //test whether "/" is repeated;
  let testDoubleSlash = "//";  
  let testSingleSlash = '/';  
  let test = numStr.split(testDoubleSlash);
  let test2 = numStr.split(testSingleSlash);
  let testAllEleIsNum = test2.every((currentValue) => isNaN(Number(currentValue)) == false); 
    if (test.length > 1 || test2.length > 2) {
      return result = 'invalid number';
    } 
    //else split the string by the '/' and test if they are numbers
    else if (test2.length > 1 ) {
      if(testAllEleIsNum == true) {
        return result = eval(numStr);
      } else {
        return result = 'invalid number';
      }
    } else {
    let num = Number(numStr);      
   //test to see if num is a number
    if(isNaN(num) == true) {
      return result = 'invalid number';
    } else {
      return result = num == 0 ? 1 : num;  
    }
    }        
  };
  
  this.getUnit = function(input) {
    var result;
    let regex0 = /[a-z]/i;
    let indexFChar = input.search(regex0);
    //test if unit is valid
    let unit = input.slice(indexFChar);
    switch (unit) {
        case 'gal' :
        result = 'gal';
        break;
      case 'lbs' :
        result = 'lbs';
        break;
      case 'mi' :
        result = 'mi';
        break;
      case 'L' :
        result = 'L';
        break;
      case 'kg' :
        result = 'kg';
        break;
      case 'km' :
        result = 'km';
        break;
       case 'GAL' :
        result = 'gal';
        break;
      case 'LBS' :
        result = 'lbs';
        break;
      case 'MI' :
        result = 'mi';
        break;      
      case 'KG' :
        result = 'kg';
        break;
      case 'KM' :
        result = 'km';
        break; 
      case 'Gal' :
        result = 'gal';
        break;
      case 'Lbs' :
        result = 'lbs';
        break;
      case 'Mi' :
        result = 'mi';            
        break;
      case 'Kg' :
        result = 'kg';
        break;
      case 'Km' :
        result = 'km';
        break;
      default:
        result = 'invalid unit';
    };
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'gal' :
        result = 'L';
        break;
      case 'lbs' :
        result = 'kg';
        break;
      case 'mi' :
        result = 'km';
        break;
      case 'L' :
        result = 'gal';
        break;
      case 'kg' :
        result = 'lbs';
        break;
      case 'km' :
        result = 'mi';
        break;
      default:
        result = 'invalid unit';
            };
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;   
    switch (unit) {
      case 'gal' :
        result = 'gallons';
        break;
      case 'lbs' :
        result = 'pounds';
        break;
      case 'mi' :
        result = 'miles';
        break;
      case 'L' :
        result = 'litres';
        break;
      case 'kg' :
        result = 'kilograms';
        break;
      case 'km' :
        result = 'kilometers';
        break;
     
            };
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result, sum;
    if(initNum == "invalid number" || initUnit == "invalid unit"){
      return "invalid result"
    }else{ 
    //to 5 decimal places on returned number if there is no error    
      switch (initUnit) {
      case 'gal' :
        sum = initNum * galToL;
        break;
      case 'lbs' :
        sum = initNum * lbsToKg;
        break;
      case 'mi' :
        sum = initNum * miToKm;
        break;
      case 'L' :
        sum = initNum / galToL;
        break;
      case 'kg' :
        sum = initNum / lbsToKg;
        break;
      case 'km' :
        sum = initNum / miToKm;
        break;
        }
      return result = sum.toFixed(5);
       };
    
          
  };
    
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;   
      
       return result = initNum + ' ' + this.spellOutUnit(initUnit) + ' ' +  'converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
      
         
  };
  
}

module.exports = ConvertHandler;
