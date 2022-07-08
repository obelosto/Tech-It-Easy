const selectedTV = inventory[4];


//---------- functie die een string `[merk] [type] - [naam]` genereert ----------//
function StringMTN(tv) {
    return tv.brand + " " + tv.type + " - " + tv.name;
}

//---------- functie die de prijs van één tv als parameter verwacht ----------//

function formatPrijs (tv){
    return "€" + tv.price;
}


//---------- functie die een string genereert voor alle beschikbare schermgroottes van één tv ----------//

function formatScreenResOptions(tv){

    const tvSizesArray = tv.availableSizes.map( (element) => {

        return element + " inches " + "(" + ( element * 2.54) + " cm" + ")";
    });
    return tvSizesArray.join(' | ')  ;


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

        const formatSelectedTVitem = '<strong>'+ StringMTN(selectedTVitem) + '</strong>' + '<br/>' + formatPrijs(selectedTVitem) + '<br/>' + formatScreenResOptions(selectedTVitem);
        const tvMerkInfoItemBox = document.createElement('li');

        tvMerkInfoItemBox.innerHTML = formatSelectedTVitem;

        document.getElementById(insertPlace).appendChild(tvMerkInfoItemBox);

    });

}
allSelectedTvs(place);