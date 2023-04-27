const handleProducation = () => {

    let milkData = parseInt(document.getElementById('totalMilk').value);

    if (Number.isNaN(milkData)) {
        document.querySelector('.product_block + .product_block').style.display = 'none';
        document.getElementById('totalMilk').nextElementSibling.innerHTML = '<Label></label><span class="invalid">* Please fill this field with valid details.</span>';

    } else {
        document.getElementById('totalMilk').nextElementSibling.innerHTML = '';
        document.querySelector('.product_block + .product_block').style.display = 'block';

        let bMData = document.getElementById('butterMilk').value;
        let cData = document.getElementById('curd').value;
        let pData = document.getElementById('paneer').value;
        let csData = document.getElementById('cheese').value;

        let milkForBm = bMData * 2;
        let milkForC = cData * 3;
        let milkForP = pData * 6;
        let milkForCs = csData * 10;

        let refNeedForBm = document.getElementById('needForBm');
        let refNeedForC = document.getElementById('needForC');
        let refNeedForP = document.getElementById('needForP');
        let refNeedForCs = document.getElementById('needForCs');

        let refReadyForBm = document.getElementById('readyForBm');
        let refReadyForC = document.getElementById('readyForC');
        let refReadyForP = document.getElementById('readyForP');
        let refReadyForCs = document.getElementById('readyForCs');

        const calcMilk = (milk, needMilk, refNeedMilk, refReady) => {
            if (needMilk > milk) {
                refNeedMilk.innerHTML = '0';
                refReady.innerHTML = '<span class="invalid">Not Ready</span>';

                return milk;

            } else {
                refNeedMilk.innerHTML = needMilk;
                refReady.innerHTML = '<span class="valid">Ready</span>';

                stockMilk = milk - needMilk;
                return stockMilk;
            }
        }

        let availabelMilk_1 = calcMilk(milkData, milkForBm, refNeedForBm, refReadyForBm);
        let availabelMilk_2 = calcMilk(availabelMilk_1, milkForC, refNeedForC, refReadyForC);
        let availabelMilk_3 = calcMilk(availabelMilk_2, milkForP, refNeedForP, refReadyForP);
        let availabelMilk_4 = calcMilk(availabelMilk_3, milkForCs, refNeedForCs, refReadyForCs);

        document.getElementById('availabelMilk').innerHTML = 'You will have available total stock of milk is <span>' + availabelMilk_4 + ' Ltr </span> after you make those given product.'
    }
};

document.getElementById('submitBtn').addEventListener('click', handleProducation);