 var arr = ['2', '4', '6', '8',];
 console.log(arr);
 var new_arr = arr.reverse();
 console.log(new_arr);

  isUniform([1,1,1,1]);
  isUniform([2,1,1,1]);
  isUniform(['a','b','q']);
  isUniform(['b','b','b']);

  function isUniform(arr){
      var first = arr[0];
    for(var i=1;i <=arr.length;i++){
          if(arr[1] !== first){
              return false;
          }
      }
     return true;
  }

  function sumArray(arr){
      return arr. reduce(function(w, s){
          return w+s;
      }, 0)
  }


 function maxArray(arr){
     return Math.max.apply(null, arr)
 }