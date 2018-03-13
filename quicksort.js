var arr = [85, 24, 63, 45, 17, 31, 96, 50]
// arr.sort(function (a, b) {
//   return a - b
// })
// console.log(arr)
function quicksort(arr) {
  if (arr.length <= 1) return arr
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0] // 返回数组中间值
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quicksort(left).concat([pivot], quicksort(right))
}
console.log(arr)
console.log(quicksort(arr))