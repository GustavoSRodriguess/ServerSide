const read = require ('readline-sync');
//let cel = 0;
//let far = 32;
let r;

    let graus = read.question("quantos graus?");

    let question = read.question("qual vc quer converter? (C/F): ");



    switch(question.toUpperCase()){

        case "C":{
            console.log(celci(graus))
            

            break;
        }

        case "F":{
            console.log(faren(graus))
            
            break;
        }
    }

function faren(graus){
        let respf = (9*graus/5) + 32

        return respf
    }

function celci(graus){
        let respc = 5*(graus - 32) / 9

        return respc
    }
