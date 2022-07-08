
function sortByPrice() {
    Sorting(inventory);

    allSelectedTvs(place);


    document.getElementById(place).innerHTML += "<p class='info'>Elementen zijn gesorteerd op prijs</p>";

}
function HasAmbiLight(){
    TVWithAmbiLight(inventory);

    allSelectedTvs(place);

    document.getElementById(place).innerHTML += "<p class='info'>Elementen zijn gesorteerd door ambilight optie</p>";
}


const sortPriceBtn = document.getElementById('priceSorting-btn');
//const sortAmbBtn = document.getElementById('ambiLightSorting-btn');
//const sortSoldOutBtn = document.getElementById('soldOutSorting-btn');


sortPriceBtn.addEventListener('click', sortByPrice );
//sortAmbBtn.addEventListener('click', HasAmbiLight);
//sortSoldOutBtn.addEventListener('click', getNames);

