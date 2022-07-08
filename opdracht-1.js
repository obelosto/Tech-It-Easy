//---------- array met alle tv-type namen ----------//
const tvTypes = inventory.map( (tvName) => {
    return 'Type: ' + tvName.type;
});


//----------tv's die die volledig uitverkocht zijn ----------//

const TVSoldOut = inventory.filter( (TVSoldOutItem) => {
    return TVSoldOutItem.originalStock === TVSoldOutItem.sold;
})


//----------tv's die over AmbiLight beschikken ----------//


function TVWithAmbiLight(array){

    array.filter( (AmbiLightTvItem) => {
        return AmbiLightTvItem.options.ambiLight = true;
    })

}

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


