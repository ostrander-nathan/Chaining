var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var newIntegers =[];
var newNum = [];
var totalNumber = 0;

console.log(integers.sort(function(a,b)
{

	return b - a;

}).filter(function(b) {
    if (b <= 19) {
    	return b;
    }
    
}).map(function(b) {
	return b * 1.5 -1;


}).reduce(function(a,b) {
	return a + b;
}));