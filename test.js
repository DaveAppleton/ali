console.log("Hello Ali")
x = 16
console.log(x)
y = [2,3,4,5,6,7,8,9]
y.forEach(element => {
    console.log(element)
});

isIn(6,y)
isIn(39,y)


function isIn(z,y) {
    if (y.includes(z)) {
        console.log(z,"in in the array")
    } else {
        console.log(z,"in NOT in the array")
    }
}