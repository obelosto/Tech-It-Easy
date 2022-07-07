const selectedTV = inventory[4];


//---------- functie die een string `[merk] [type] - [naam]` genereert ----------//
function StringMTN(tv) {
    return tv.brand + " " + tv.type + " - " + tv.name;
}

//console.log( StringMTN(selectedTV)   )   ;


/*const newString = inventory.map( (productItem) => {
    return productItem.brand + " " + productItem.type + " - " + productItem.name;
});*/
//console.log(newString);

//---------- functie die de prijs van één tv als parameter verwacht ----------//

function formatPrijs (tv){
    return "€" + tv.price;
}
//console.log( formatPrijs(selectedTV)   );

//---------- functie die een string genereert voor alle beschikbare schermgroottes van één tv ----------//

function formatScreenResOptions(tv){

    const tvSizesArray = tv.availableSizes.map( (element) => {

        return element + " inches " + "(" + ( element * 2.54) + " cm" + ")";
    });
    return tvSizesArray.join(' | ')  ;

/*    const tvSizesArray = tv.availableSizes;
    for (let m = 0; m < tvSizesArray.length; m++) {
        //console.log( tvSizesArray[m] + " inches " + "(" + ( tvSizesArray[m] * 2.54) + " cm" + ")" );
        return tvSizesArray[m] + " inches " + "(" + ( tvSizesArray[m] * 2.54) + " cm" + ")";


        if( tvSizesArray.length >= 1 && tvSizesArray.indexOf(tvSizesArray[m]) !== tvSizesArray.length -1){
            console.log( "|" );
        }
    }*/



}
formatScreenResOptions(selectedTV);


//---------- script die de informatie van #4 weergeeft op de pagina ----------//
const tvMerkInfoBox = document.createElement('article');
tvMerkInfoBox.innerHTML = StringMTN(selectedTV) + '<br/>' + formatPrijs(selectedTV) + '<br/>' + formatScreenResOptions(selectedTV);
document.getElementById('infoBox').appendChild(tvMerkInfoBox);


//---------- de informatie van **alle** tv's op de pagina ----------//

const place = 'allInList';

function allSelectedTvs(insertPlace){

    document.getElementById(insertPlace).innerHTML = '';

    inventory.map( (selectedTVitem) => {
        //console.log( StringMTN(selectedTVitem) );

        const formatSelectedTVitem = '<strong>'+ StringMTN(selectedTVitem) + '</strong>' + '<br/>' + formatPrijs(selectedTVitem) + '<br/>' + formatScreenResOptions(selectedTVitem);
        const tvMerkInfoItemBox = document.createElement('li');

        tvMerkInfoItemBox.innerHTML = formatSelectedTVitem;

        /*if( allSelectedTVs.length >= 1 && allSelectedTVs.indexOf(allSelectedTVs[selectedTVitem]) !== allSelectedTVs.length -1){
            tvMerkInfoItemBox.innerHTML += "hr/"
        }*/

        document.getElementById(insertPlace).appendChild(tvMerkInfoItemBox);

    });

}
allSelectedTvs(place);
/*
const tvMerkInfoItemBox = document.createElement('article');
tvMerkInfoItemBox.innerHTML = StringMTN(selectedTV) + '<br/>' + formatPrijs(selectedTV) + '<br/>' + formatScreenResOptions(selectedTV);
document.getElementById('infoBox').appendChild(tvMerkInfoBox);*/
