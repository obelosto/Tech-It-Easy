//---------- alle tv merken in een lijst op de pagina ----------//


const tvBrandNames = inventory.map( (tvName) => {
    return tvName.brand;
});

let tvBrandNamesUnique = tvBrandNames.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
},[]);


for (let k = 0; k < tvBrandNamesUnique.length; k++) {

    const tvMerk = document.createElement('li');
    tvMerk.innerHTML = tvBrandNamesUnique[k];
    document.getElementById('list').appendChild(tvMerk);
}

//---------- een functie die een array met tv-objecten verwacht ----------//
function TVMerkenInList(x){
    const newX = x.map( (tvName)  => {
        return tvName.brand;
    });


}
TVMerkenInList(inventory);