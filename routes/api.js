/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res, next){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      //error handler
      if (returnUnit == 'invalid unit' && initNum == 'invalid number') {
        return res.send('invalid number and unit');
      } else if (returnUnit == 'invalid unit') {
        return res.send('invalid unit');
      } else if(initNum == 'invalid number') {
        return res.send('invalid number');
      }
        //response
      return res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});
      
      
      
    });
    
};
