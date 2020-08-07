let arr = [1,2,3,4,5];
let newarr = arr.map(function(value , index){
    return{key : index , value: value+value};
})
console.log(newarr);