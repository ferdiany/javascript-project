const prompt = require('prompt-sync')({sigint: true});
const data = require('../javascript-project/responApi.js');

const lenData = data.productBin.data.length;
const productCode = prompt("Silahkan masukkan Product Code: ");
let quantity = 0;

// Masukkan contoh product Code berikut 'FBR00040101' untuk mengetahui total quantity product.
for (let i = 0; i < lenData; i++) {
  if (productCode == data.productBin.data[i].productCode) {
    let qty = data.productBin.data[i].quantity;
    quantity = quantity + qty;
  }
}

if (quantity != 0) {
  console.log("Quantity untuk product dengan code "+productCode+" adalah sebanyak "+quantity+" buah");
} else {
  console.log("Product code tidak ditemukan!");
}

