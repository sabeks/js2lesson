console.log(`hello world`);

const numberArrays = [2, 4, 6, 8, 10, 12];
console.log(numberArrays);
numberArrays.unshift(12);
// console.log(numberArrays);

const device = [
  { productTitle: "samsung", productPrice: 1900 },

  { productTitle: "iphone", productPrice: 2000 },
  { productTitle: "xiaomi", productPrice: 1000 },
];
// console.log(device);
const arr1 = [11, 12, 13, 14, 15];
const num = arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4];
const num1 = num / numberArrays.length;
console.log(arr1);
const zoomer = [
  {
    phoneName: "iphone 12 pro",
    phoneDescription: "salable product",
    phonePrice: 2000,
    shopAddresses: "xashuri",
    phoneMemoryInGb: 128,
  },
];
// console.log(zoomer);
console.log(
  "phone name is " +
    zoomer[0].phoneName +
    ",phone price is " +
    zoomer[0].phonePrice +
    ",and you can buy it at " +
    zoomer[0].shopAddresses
);
