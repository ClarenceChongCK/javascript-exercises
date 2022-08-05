const findTheOldest = function(array) {
    const newArray = array.sort(sorting);
    console.log(newArray);
    return newArray[0];
}

function sorting(objA, objB) {
    let ABirth = objA.yearOfBirth;
    let BBirth = objB.yearOfBirth;
    let BDeath;
    let ADeath;
    let ageA;
    let ageB;
    const temp = new Date().getFullYear();

    if("yearOfDeath" in objA) {
        ADeath = objA.yearOfDeath;
    } else {
        ADeath = temp;
    }

    if("yearOfDeath" in objB) {
        BDeath = objB.yearOfDeath;
    } else {
        BDeath = temp;
    }

    ageA = ADeath - ABirth;
    ageB = BDeath - BBirth;
    //console.log(ADeath);
    //console.log(BDeath);

    return ageB - ageA;

}
// Do not edit below this line
module.exports = findTheOldest;
