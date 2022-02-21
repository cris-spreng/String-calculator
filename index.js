
window.onload = function () {

    document.getElementById("buscar").addEventListener("click", (e) => {

        e.preventDefault();
        var str = document.getElementById("string").value;
        document.getElementById("results").innerHTML = str;
        
        const parseCalc = (str) => {

            var calculation = [], current = '', ch;
            for (var i = 0; i < str.length; i++) {
                ch = str.charAt(i);
                if ('*/+-()'.indexOf(ch) > -1) {
                    if (current == '' && ch == '-') {
                        current = '-';
                    } else {
                        calculation.push(parseInt(current), ch);
                        current = '';
                    }
                }else{
                    current += str.charAt(i);
                }
            }
            if (current != '') {
                calculation.push(parseInt(current));
            }
            return calculation;
        };

        const calcula = (arr) => {

        var ops = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        currentOp;
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (ops[i][arr[j]]) {
                currentOp = ops[i][arr[j]];

            } else if (currentOp) {
                newCalc[newCalc.length - 1] = 
                    currentOp(newCalc[newCalc.length - 1], arr[j]);
                    console.log(newCalc.length + " : "+ newCalc[newCalc.length - 1]);
                currentOp = null;
            } else {
                newCalc.push(arr[j]);
            }
            console.log(newCalc);
        }
        arr = newCalc;
        newCalc = [];
    }
    if (arr.length > 1) {
        console.log('Error: No se pudo resolver');
        return arr;
    } else {
        return arr[0];
    }
        }
        if(str != ''){
            
            document.getElementById("results").innerHTML = calcula(parseCalc(str));
        //console.log(bla);
        }
    });

}