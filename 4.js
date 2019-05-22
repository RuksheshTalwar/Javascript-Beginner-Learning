//4.	Write a logic to test the High to Low sorting filter on PLP page. 
//If the prices of tiles are sorted, return true else return false.

var prices = {
    priceFirstTile: 100,
    priceSecondTile: 90,
    priceThirdTile: 80
}

function highToLowSortTest() {
    if (prices.priceFirstTile > prices.priceSecondTile) {
        if (prices.priceFirstTile > prices.priceThirdTile) {
            return true
        }
    } else {
        return false
    }
}

console.log(highToLowSortTest());