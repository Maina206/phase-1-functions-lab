const scuberHQ = 42; //Scuber's HQ block
const blockDistance = 264;

function distanceFromHqInBlocks(pickUpStation) {
    let distance;
    if (pickUpStation > scuberHQ) {
        distance = pickUpStation - scuberHQ;
    } else {
        distance = scuberHQ - pickUpStation;
    }
    return distance;
  }


function distanceFromHqInFeet(pickUpStation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickUpStation);
    
    const distanceInFeet = distanceInBlocks * blockDistance;

    return distanceInFeet;
  }


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let distanceFeet;
    if (destination > start) {
        distanceFeet = (destination - start) * blockDistance;
    } else {
        distanceFeet = (start - destination) * blockDistance;
    }
    return distanceFeet;
  }


function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distanceTravelled = distanceTravelledInFeet(start, destination)
    let farePrice;

    if (distanceTravelled < 400) {
        farePrice = 0;
    } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
        farePrice = (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        farePrice = 25;
    } else {
        farePrice = 'cannot travel that far';
    }
    return farePrice;
  }

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));