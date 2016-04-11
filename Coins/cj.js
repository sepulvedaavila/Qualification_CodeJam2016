//Combinations of length n of 0's and 1's
// AND only combinations that follow the property:
//   -The first digit is 1 and the last digit is 1
function combinations(n) {
  var r = [];
  for(var i = 0; i < (1 << n); i++) {
    var c = [];
    for(var j = 0; j < n; j++) {
      c.push(i & (1 << j) ? '1' : '0');
    }
    if (c[0] == '1' && c[c.length-1] == '1' && parseInt(c.join(''))%3==0 ) {
      r.push(c.join(''));
      //r.push(c);
    }

  }
  return r;
}

var r = combinations(32);

//Only going to check numbers divisibles by 3
// var notPBase10 = [];
// for (var i = 0; i < r.length; i++) {
//   if (r[i]%3 == 0) {
//     notPBase10.push(r[i]);
//   }
// }




//Interpret number in base 2 to 9
var interp = []
for (var i = 0; i < r.length; i++) {
  var oneT = [];
  for (var j = 2; j < 10; j++) {
    oneT.push(parseInt(r[i],j))
  }
  oneT.push(parseInt(r[i]));
  interp.push(oneT);
}

var fDivisor = function (number) {
  if (number%2 == 0) {
    return number/2;
  }
  else {
    var sRoot = Math.floor(Math.sqrt(number));
    for (var i = 3; i <= sRoot; i+=2) {
      if (number%i == 0) {
        return i;
      }
    }
  }
  return false;
};

var allDivisors = [],
counter = 0;
console.log('Case #1:');
for (var i = 0; i < interp.length; i++) {

  var d1 = fDivisor(interp[i][0]), d2 = fDivisor(interp[i][1]),
  d3 = fDivisor(interp[i][2]), d4 = fDivisor(interp[i][3]),
  d5 = fDivisor(interp[i][4]), d6 = fDivisor(interp[i][5]),
  d7 = fDivisor(interp[i][6]), d8 = fDivisor(interp[i][7]),
  d9 = fDivisor(interp[i][8]);

  if (d1 && d2 && d3 && d4 && d5 && d6 && d7 && d8 && d9) {
    counter += 1;
    console.log(interp[i][8] + ' ' + d1 + ' ' + ' ' + d2 + ' ' + d3 + ' ' + d4
   + ' ' + d5 + ' ' + d6 + ' ' + d7 + ' ' + d8 + ' ' + d9 );
   if (counter == 50) {
     break;
   }
 }

}
// console.log(allDivisors);
