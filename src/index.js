module.exports = function getZerosCount(number, base) {
    var finalArr = [];
    var tempObjOfPowerNumber = {};
    var bottleNeck = {};
    for (var i = 2; i <= base; i++) {
        while ((base % i) === 0) {

            if ( tempObjOfPowerNumber[i]) {
                tempObjOfPowerNumber[i] = tempObjOfPowerNumber[i] + 1;
            } else {
                tempObjOfPowerNumber[i] = 1;
            }
            base = base / i;
        }
    }
//  console.log(tempObjOfPowerNumber);
    //разложил на простые множетели
    for (var j in tempObjOfPowerNumber) {
        bottleNeck[j] = 0;
        for (var i = 1, x = 100; i < x; i++) {
            bottleNeck[j] += Math.floor(number / Math.pow(+j, i));
        }
    }
    // нашел узкие места
    for (var j in tempObjOfPowerNumber) {
        finalArr.push(bottleNeck[j] / tempObjOfPowerNumber[j]);
    }
    var minNum = Math.min(...finalArr)
    return Math.floor(minNum);
}
