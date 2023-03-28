const pUtente = prompt('Inserisci la parola chiave')
const parola = 'palindroma'


let confermaParola = (parola === pUtente) ? 'Buon divertimento' : alert('Mi dispiace ma non puoi giocare')   

console.log(confermaParola)




if(confermaParola){

    const pariDis = prompt('Pari o dispari');
    const pari = 'pari'
    const dispari = 'dispari'

    const paDi = (pariDis === pari) ? 'Hai scelto pari' :  'Hai scelto dispari'
    console.log(paDi);


    const nUtente =  parseInt(prompt('Inserisci un numero da 1 a 5'))
    
    const valNumb = nUtente
    console.log(valNumb);
    

    const getRandom = getRanPc(1,5)
    console.log('numero random pc',getRandom);


    function getRanPc(min, max){
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min )
        return randomNumber
    }

    const sommaTot = sommaNum(getRandom,valNumb)
    console.log(sommaTot);

    function sommaNum(getRandom, valNumb){
        const somma = getRandom + valNumb;
        return somma
    }

    const endgame = !(sommaTot % 2) ? 'hai vinto' : 'Ha vinto il pc'
    console.log(endgame);
}



