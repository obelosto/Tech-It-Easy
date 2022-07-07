//---------- alle tv merken in een lijst op de pagina ----------//

/*for (let k = 0; k < inventory.length; k++) {

    const tvMerk = document.createElement('li');
    tvMerk.innerHTML = inventory[k].brand;
    document.getElementById('list').appendChild(tvMerk);
}*/




const tvBrandNames = inventory.map( (tvName) => {
    return tvName.brand;
});

let tvBrandNamesUnique = tvBrandNames.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
},[]);

//console.log(uniq, tvBrandNames);

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

//console.log(newX);

}
TVMerkenInList(inventory);