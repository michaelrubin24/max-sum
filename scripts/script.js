
var arr = [1, 7, 10, 9, 5, 4, 12];

function max_sum(arr){
  max = arr[0] + arr[1];
  var i = 0;
  while(i < arr.length){
    if(arr[i] + arr[i + 1] > max){
      max = arr[i] + arr[i + 1];
    }
    i++
  }
  return max;
}

alert("Максимальная сумма двух рядом стоящих элементов равна: " + max_sum(arr));
