const fs = require('fs');

rawdata = fs.readFileSync('./testfiles/data.json');
vendordata = JSON.parse(rawdata);

//ES5
// function createorder(order) {
//     return Object.keys(order).map(function(i) {
//         return {
//             item: i,
//             quantity: order[i].quantity,
//             price: order[i].price,
//             revenue: order[i].quantity * order[i].price
//         }
//     });
// }

// ES6
createorder = (order) => (
    Object.keys(order).map(function(i) {
        return {
            item: i,
            quantity: order[i].quantity,
            price: order[i].price,
            revenue: order[i].quantity * order[i].price
        }
    })
)

//ES5
// vendordata = vendordata.map(function(vendor) {
//     return {
//         id: vendor.id,
//         vendor: vendor.vendor,
//         date: vendor.date,
//         customerId: vendor.customer.id,
//         order: createorder(vendor.order) //Note: I am using a function to generate the order array. I felt it was cleaner code and easier to read.
//     }
// });

// ES6
vendordata = vendordata.map((vendor) =>
    ({
        id: vendor.id,
        vendor: vendor.vendor,
        date: vendor.date,
        customerId: vendor.customer.id,
        order: createorder(vendor.order) //Note: I am using a function to generate the order array. I felt it was cleaner code and easier to read.
    })
);

console.log(JSON.stringify(vendordata, null, 4));
fs.writeFileSync('./output/data-transformed.json', JSON.stringify(vendordata, null, 4));

//Note: I guess we could export the contents but I think this exercise was more about coding approach rather then creating a exportable feed
//module.exports = vendordata;
