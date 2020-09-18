const ages = [16, 15, 18, 20, 17];
const ages2 = [23, 18, 20, 21];
const ages3 = [34, 32, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
console.log(allAges2);

const money = [25, 78, 45, 35];
const maximum = Math.max(...money);
console.log(maximum);