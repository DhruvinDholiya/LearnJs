const amount = (dest) => {
    if(dest === 'bali') {
        return 40500;
    } else if (dest === 'goa') {
        return 55500;
    }
}

const packegs = (place1, place2) => {
    let placeForAmt1 = amount(place1);
    let placeForAmt2 = amount(place2);

    let ans = place1 + ' cost for you ' + placeForAmt1 + ' and ' + place2 + ' cost for you ' + placeForAmt2;

    return ans;
}

let res = packegs('bali', 'goa');
console.log(res);