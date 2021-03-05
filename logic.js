class Basket {
    constructor(basketStorage, qty, prices) {
        this.basketStorage = basketStorage
        this.qty = qty
        this.price = prices
    }

    totalPrice() { return this.prices.reduce((r, a, i) => { return r + a * this.qty[i] }, 0) }

}



const customerBasket = ['prod1', 'prod2']
const customerQty = [2, 1]
const customerPrices = [100, 200]

const customer1 = new Basket(customerBasket, customerQty, customerPrices)


var arr1 = [2, 3, 4, 5]
var arr2 = [4, 3, 3, 1]
const total = () => { return customerQty.reduce(function (r, a, i) { return r + a * customerPrices[i] }, 0) }

console.log(total())
console.log(customer1.totalPrice())


// console.log(customer1.totalPrice(customerQty, customerPrices))
