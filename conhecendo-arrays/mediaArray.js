function mediaDeArray(lista){
    let soma, media;
    lista.forEach(element => {
        soma =+ element;
    });
    media = soma / lista.length;
    console.log(`O array: ${lista} \ntem a seguinte media: ${media}`);
        
}

const meuArray = [10,10];

mediaDeArray(meuArray);