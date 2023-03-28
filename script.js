const pUtente = prompt('Inserisci la parola chiave')
const parola = 'ccc'


let confermaParola = (parola === pUtente) ? 'Buon divertimento' : alert('Mi dispiace ma non puoi giocare')   

console.log(confermaParola)




if(confermaParola){
    const nUtente =  parseInt(prompt('Inserisci un numero da 1 a 5'))
    console.log('numero inserito da utente',nUtente)
    
    const valNumb = parseInt(parDis('2','4'))
    console.log(valNumb);

    const numbUtente = (valNumb === nUtente) ? 'hai scelto pari' : 'hai perso';
    console.log('valore', numbUtente)

        function parDis(p,p){
           let pari = []
           pari [0] = 2
           pari [1] = 4
           console.log('valore pari', pari);
           return pari
    } 

    const getRandom = getRandomnNumber(1,5)
    console.log('numero random pc',getRandom);
    function getRandomnNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min )
    return randomNumber
}}



