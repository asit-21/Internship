var Mystring = "  This is a String  ";
console.log(Mystring.length);               //return length
console.log(Mystring.indexOf("is"));        //return idex of given string
console.log(Mystring.search("This"));       //similar as indeof
console.log(Mystring.slice(7,9));           //return string between two positions
console.log(Mystring.slice(7));             //return rest of string
console.log(Mystring.substring(10,16));     //similar to slice
console.log(Mystring.replace("This","That"));//replace given string
console.log(Mystring.toUpperCase());        //convert string to uppercase
console.log(Mystring.toLowerCase());        //convert string to lower case
console.log(Mystring.trim());               //remove spaces from both the sides
console.log(Mystring.charAt(3));            //return character at given position