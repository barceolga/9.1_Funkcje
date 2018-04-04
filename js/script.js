var getTriangleArea = function getTriangleArea(a, h) {
    if (a<=0 || h <=0 ) {
      return("Invalid parameter!");
    }
    else {
      return(a*h/2);
    }
};
console.log(getTriangleArea(10,6));

var getTriangle1Area = getTriangleArea(8, 3);
console.log(getTriangle1Area);

var getTriangle2Area = getTriangleArea(9, 4);
console.log(getTriangle2Area);

var getTriangle3Area = getTriangleArea(7, 10);
console.log(getTriangle3Area);

var getTriangle4Area = getTriangleArea(0, 5);
console.log(getTriangle4Area);

var getTriangle5Area = getTriangleArea(-7, 2);
console.log(getTriangle5Area);

var getTrapezeArea = function getTrapezeArea(a, b, h) {
  if (a<=0 || h <= 0 || b <= 0 ) {
    return("Invalid parameter(s)!");
  }
  else {
    return(1/2*(Number(a) + Number(b))*h);
  }
};

console.log(getTrapezeArea(10, 6, 4));

var getTrapeze1Area = getTrapezeArea(8, 3, 5);
console.log(getTrapeze1Area);

var getTrapeze2Area = getTrapezeArea(9, 4, 2);
console.log(getTrapeze2Area);

var getTrapeze3Area = getTrapezeArea(10, -2, 8);
console.log(getTrapeze3Area);

var getTrapeze4Area = getTrapezeArea(0, -7, 2);
console.log(getTrapeze4Area);

var getTrapeze5Area = getTrapezeArea(10, 7.5, 6);
console.log(getTrapeze5Area);
