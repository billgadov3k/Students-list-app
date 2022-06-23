
let arr = [1, 24, 39, 4, 5, 6, 7, 8, 4, 6, 33, 65, 7, 23, 34, 54, 21, 11, 14, 77];

// for(i=0; i<arr.length; i++){
//     if(arr[i]> 10){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
//** Писать можно на любой клавиатуре */
//** Нужно ко всему привыкать просто */
//** и на той тоже получится нормально печатать */

const fruits = ["apple", "banana", "orange", "mango"];

// arr.forEach(function(item, i, arr){
//     if(item > 50){
//         console.log(item);
//     }
// })

let filt = arr.map(function(item, idx){
    return item*2 - 1
})