//---------- array met alle tv-type namen ----------//
const tvTypes = inventory.map( (tvName) => {
    return 'Type: ' + tvName.type;
});
//console.log(tvTypes);


//----------tv's die die volledig uitverkocht zijn ----------//

const TVSoldOut = inventory.filter( (TVSoldOutItem) => {
    return TVSoldOutItem.originalStock === TVSoldOutItem.sold;
})
//console.log(TVSoldOut);


//----------tv's die over AmbiLight beschikken ----------//

/*const TVWithAmbiLight = inventory.filter( (AmbiLightTvItem) => {
    return AmbiLightTvItem.options.ambiLight = true;
})*/
//console.log(TVWithAmbiLight);

function TVWithAmbiLight(array){

    array.filter( (AmbiLightTvItem) => {
        return AmbiLightTvItem.options.ambiLight = true;
    })

}
//TVWithAmbiLight(inventory);

//---------- tv's van laagste naar hoogste prijs ----------//

function Sorting(array){
    array.sort((a, b) => {

        if (a.price > b.price) {
            return 1;
        }

        if (a.price <  b.price) {
            return -1;
        }
        return 0;
    })
}
//Sorting(inventory);

//console.log(inventory);


