//1.	Write a JSON that signifies the restaurants data returned via API 
//giving the name, phone no, rating and address. Address should be further 
//nested in terms of building no, street, area, city. Take your own examples.

var restaurant = {
    name : 'Park Restaurant',
    phoneNo : 985647838,
    rating : '5 star',
    address : {
        buildingNo: 98,
        street: 'High Street',
        area : 'Area 999',
        city : 'Gurgaon'
    },
    displayAddress : function(){
        console.log(this.address.buildingNo)
        console.log(this.address.street)
        console.log(this.address.area)
        console.log(this.address.city)
    }
}

console.log(restaurant.name)
restaurant.displayAddress();