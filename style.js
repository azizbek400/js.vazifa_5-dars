  
// a va b butun sonlar berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlarni yig'indisini chiqaruvchi
// programma tuzing.

let a = +prompt("a");
let b = +prompt("b");


while (a < b ) {
    console.log(a);
    a += 1;
    for (let i = 0; i < a.length; i++) {
        if (i + i) {
            console.log(i)
            
        }
        
    }
}


// a va butun sonlar berilgan (a > b). A usunlikdagi kesmasada maksimal darajada B kesma joylashtirilgan. Kesmaning
// bo'sh qismini aniqlovchi programma tuzing. Ko'paytirish va bo'lish amallarini ishlatmang.


let kesma1 = 8;
let kesma2 = 4;


let counts = 0;


while (kesma2 <= kesma1) {
    counts += 1;
    kesma2 += 3;
}

console.log(counts);



// while 5



let num = 56;

let son = 3;

let count = 0;

for (let i = 0; i < num; i++) {
    count += 1;
    
}

if (son ** count == num) {
    console.log("daraja");   
} else {
    console.log("daraja emas");
}


// while 18


let raqam = 12345;

let result = 0;


while (raqam > 0) {
    let lastNum = raqam % 10;
    result = result * 10 + lastNum;

    raqam = parseInt( raqam / 10)   
}

console.log(result);



// while 22 


let nom = 7;

let bool = false;


for (let i = 2; i < nom; i++) {
    if (nom % i == 0) {
        bool = true;
        break;
    }
    
}


if (bool) {
    console.log("tub son emas");   
} else {
    console.log("tub son");
}