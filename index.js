var katzDeliLine = [];

// function takeANumber (line, name) {
//   line.push(name);
//   return `Welcome, ${name}. You are number ${line.length} in line.`
// };

function takeANumber(num) {
  // the person needs to take a number
  
  
  // return only 'now serving' & their number, & will need to take off their number eventually
  
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() +".";
  }
};

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
      var myLine = [];
      for (let i = 0; i<katzDeliLine.length; i++) {
        var j = parseInt(i) + 1;
        myLine.push(` ${j}. ${katzDeliLine[i]}`)
      }    return "The line is currently:" + myLine.join(',');
    }
  }
