
var arr = [1, 7, 10, 9, 5, 4, 12];

function max_sum(arr){
var max = arr[0] + arr[1];
  var i = 0;
  var temp_sum;
  while(i < arr.length){
    temp_sum = arr[i] + arr[i + 1];
    if(temp_sum > max){
      max = temp_sum;
    }
    i++
  }
  return max;
}

alert("Максимальная сумма двух рядом стоящих элементов равна: " + max_sum(arr));
