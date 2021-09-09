// var num = 27;
// function isOdd(num) {
//     return num % 2
// }

// function MathProblem(num) {
//     console.log("0: " + num);
//     for (let i = 0; i < 500; i++) {
//         if (isOdd(num) == 0) {
//             num = ( num / 2 );
//             console.log(i+1 + ": " + num);
//         } else {
//             num = ( num * 3 ) + 1;
//             console.log(i+1 + ": " + num);
//         }
//         if (num == 1) {
//             break;
//         }
//     }
// }


// MathProblem(num);


function recursive() {
    var last = [];
    for (let j = 0; j < 100; j++) {
        var num = j + 1;
        function isOdd(num) {
            return num % 2
        }
        function MathProblem(num) {
            for (let i = 0; i < 500; i++) {
                if (isOdd(num) == 0) {
                    num = ( num / 2 );
                } else {
                    num = ( num * 3 ) + 1;
                }
                if (num == 1) {
                    last.push(i+1);
                    break;
                }
            }
        }
        MathProblem(num)
    }
    console.log(last);
    var dict = {};
    for (var k = 0; k < last.length; k++) {
        var elem = last[k];
        if (elem in dict) {
            ++dict[elem];
        } else {
            dict[elem] = 1;
        }
    }
    
    console.log(dict);
}

recursive();
