function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  var amount = 40000;
  var days = 6;
  var type = "work";
  
  var constants = {
    perDayWage: 190,
    rate: 118.62,
  };
  
  var range = {
    talab: {
      lengthMin: 12,
      lengthMax: 18,
      widthMin: 11,
      widthMax: 17,
      heightMin: 0.1,
      heightMax: 0.18,
    },
    bhumi: {
      lengthMin: 8,
      lengthMax: 14,
      widthMin: 7,
      widthMax: 13,
      heightMin: 0.09,
      heightMax: 0.15,
    },
    dabri: {
      lengthMin: 9,
      lengthMax: 15,
      widthMin: 9,
      widthMax: 14,
      heightMin: 0.1,
      heightMax: 0.15,
    },
  };
  
 export const calculate = function(range) {
    var mate = Math.round(amount / 57000);
    var mateVal = mate * constants.perDayWage * days;
    console.log("mateVal", mateVal);
  
    var water = Math.round(amount / 57000);
    var waterVal = mateVal;
    console.log("waterVal", waterVal);
  
    var excavation = amount - 2 * mateVal;
    console.log("excavation", excavation);
  
    var quantity = parseFloat(excavation / constants.rate).toFixed(2);
    console.log("quantity", quantity);
  
    var sum = 0;
    var count = 0;
    while (sum <= quantity) {
      var length = randomNumber(range.lengthMin, range.lengthMax).toFixed(1);
      var width = randomNumber(range.widthMin, range.widthMax).toFixed(1);
      var height = randomNumber(range.heightMin, range.heightMax).toFixed(2);
      var result = parseFloat(length * width * height).toFixed(2);
      result = parseFloat(result);
      var oldSum = sum;
      sum += result;
      sum = parseFloat(parseFloat(sum).toFixed(2));
      if (sum <= quantity) {
        console.log(
          "1 * " +
            length +
            " * " +
            width +
            " * " +
            height +
            " = " +
            result +
            "     " +
            sum
        );
      } else {
        var remainderVal = quantity - oldSum;
        remainderVal = parseFloat(parseFloat(remainderVal).toFixed(2));
        length = randomNumber(10, 14).toFixed(1);
        height = randomNumber(0.1, 0.15).toFixed(2);
  
        width = remainderVal / (length * height);
  
        result = parseFloat(length * width * height);
  
        console.log("remainderVal", remainderVal);
        console.log(
          "1 * " +
            length +
            " * " +
            width.toFixed(2) +
            " * " +
            height +
            " = " +
            result.toFixed(2) +
            "     " +
            quantity
        );
      }
      count++;
    }
    console.log("count", count);
  }

  
  