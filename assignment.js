// https://github.com/jewelran/assignment-3

// convert kilomiter to meter............
function kilometerToMeter(meters) {

    var oneKilometer = 1000;
    var kilometerToMeter = oneKilometer * meters;
    meter = kilometerToMeter;
    return meter;

}
var result = kilometerToMeter(42)
console.log(result, 'meter')

// for budge calculator................
function budgeCalculator(watch, phone, laptop) {
    var total = 0;
    var watchPrice = 0;
    var phonePrice = 0;
    var laptopPrice = 0;
    //  for watch.......
    var watchCount = watch * 50
    watchPrice = watchCount;
    // for phone.......
    var phoneCount = phone * 100;
    phonePrice = phoneCount;
    // for laptop............
    var laptopCount = laptop * 500;
    laptopPrice = laptopCount
    // total all product price..................
    total = watchPrice + phonePrice + laptopPrice;

    // console.log('watch:',watchPrice,  'phone:',phonePrice,'laptop:', laptopPrice )

    return total;
}

var totalprice = budgeCalculator(100, 100, 100)
console.log('totol price', totalprice)


//for hotel cost ...................


function hotelCost(days) {
    var amount = 0;
    if (days <= 10) {
        var first10days = days * 100;
        amount = first10days;
    } else if (days <= 20) {
        var discount = 100 - 20;
        var after10days = discount * days;
        amount = after10days;
    } else {
        var lastDiscount = 100 - 50;
        var above20Days = lastDiscount * days;
        amount = above20Days;
    }
    return amount
}
var totalHotelCost = hotelCost(5)
console.log(totalHotelCost)

// for lergest string check....................


var megaFriends = ["jewel", "kamalmia", "nuruzzaman", "amarsunarbangla"];
var longest = '';
for (var i = 0; i < megaFriends.length; i++) {
    let curentItem = megaFriends[i];
    if (curentItem.length > longest.length) {
        longest = curentItem;
    }
}

console.log(longest)