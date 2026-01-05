import { renderOrderSummary } from "./checkout/orderSummary.js"
import { renderPaymentSummary } from "./checkout/paymentSummary.js"
//import '../data/class-cart.js'
//import '../data/car.js'
//import '../backend/backendPractice.js'
import { loadProducts, loadProductsFetch } from "../data/products.js"
import { loadCart } from "../data/cart.js"

async function loadPage() {

    try {
    
    //throw 'error1'

    await loadProductsFetch()

    const value = await new Promise((resolve, reject) => {
        //throw 'error2'
        loadCart(() => {
            //reject('error 3')
            resolve('load cart')
        }) 
    })

    } catch (error) {
        console.log('error, please try again')
    }
    
    renderOrderSummary()
    renderPaymentSummary()
}

loadPage()

/*
Promise.all([
    loadProductsFetch(), 

    new Promise((resolve) => {
        loadCart(() => {
            resolve()
        }) 
    })
]).then((resolve)=> {
    console.log(resolve)
    renderOrderSummary()
    renderPaymentSummary()
})

*/

