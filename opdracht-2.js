//---------- Hoeveel tv's zijn er al verkocht? ----------//

//console.log("Er zijn posities van " + TVSoldOut.length + " typen er al verkocht");

const TVSoldAtLeastOne = inventory.filter( (TVSoldAtLeastOneItem) => {
    return TVSoldAtLeastOneItem.sold >= 1;
})
//console.log(TVSoldAtLeastOne);

let totalTVSold = 0;
for (let i = 0; i < TVSoldAtLeastOne.length; i++) {
    //console.log(TVSoldAtLeastOne[i].type + " sold: " + TVSoldAtLeastOne[i].sold);
    totalTVSold += TVSoldAtLeastOne[i].sold;
}
//console.log(totalTVSold);

const soldOutNumber = document.createElement('p');
soldOutNumber.setAttribute('style', 'color: green');
soldOutNumber.innerHTML = "Er zijn " + totalTVSold + " tv's in totaal al verkocht.";
document.getElementById('content').appendChild(soldOutNumber);

//---------- Hoeveel tv's heeft Tech It Easy ingekocht? ----------//

let totalTVBought = 0;
for (let i = 0; i < inventory.length; i++) {
    totalTVBought += inventory[i].originalStock;
}
//console.log (totalTVBought);

const boughtNumber = document.createElement('p');
boughtNumber.setAttribute('style', 'color: blue');
boughtNumber.innerHTML = "Tech It Easy heeft " + totalTVBought + " tv's in totaal ingekocht.";
document.getElementById('content').appendChild(boughtNumber);

//---------- Hoeveel tv's er nog verkocht moeten worden? ----------//
const needsToBeSold = totalTVBought - totalTVSold;
const needsToBeSoldNumber = document.createElement('p');
needsToBeSoldNumber.setAttribute('style', 'color: red');
needsToBeSoldNumber.innerHTML = "Er zijn " + needsToBeSold + " tv's nog verkocht moeten worden.";
document.getElementById('content').appendChild(needsToBeSoldNumber);
