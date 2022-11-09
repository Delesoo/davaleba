
// let values = [0, 0, 0, 0, 1];
// let values2 = [0, 0, 0, 0, 1, 0, 0, 0, 0];


// const fn = array => {
//         const counts = [];
//         let l = 0,
//             i = array.indexOf(1);
        
//         while (i !== -1) {
//             counts.push(i - l);
//             l = i + 1;
//             i = array.indexOf(1, i + 1);
//         }
//         if (array.length - l > 0) counts.push(array.length - l);
//         return counts;
//     };
//     console.log(...fn([0, 0, 0, 0, 0, 1]));

let newArray = [0, 0, 0, 0, 1, 0, 0, 0, 0,];

function checkArray(array){
    let testArray = [];
    let result = 0;
    array.forEach(element => {
        if(element == 0){
            testArray += element;
            if(testArray.length === 4){
                result += 1;
            }
        }
        else{
            testArray = [];
        }
    });
    return result;
}

console.log(checkArray(newArray));