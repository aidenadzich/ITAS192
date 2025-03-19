import { SALES_TAX, DELIVERY_CHARGE } from "./constants.js";

function totalCost(unitPrice, quantity) {
    let subTotal = unitPrice * quantity;
    let delivery = subTotal * DELIVERY_CHARGE;
    let salesTax = subTotal * SALES_TAX;
    let total = subTotal + delivery + salesTax;
    return total;
}

export default totalCost;