//  how to merge two array in dsa with JavaScript


let data = [25, 35, 45, 55, 65, 75];
let data2 = [40, 50, 90, 82, 333, 699999];
let data3 = [];

for (i = 0; i < data.length; i++) {
    data3[i] = data[i]
}

for (i = 0; i < data2.length; i++) {
    data3[data.length + i] = data2[i]
}

console.log(data3)
