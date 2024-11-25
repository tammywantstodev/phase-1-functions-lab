// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let distanceInBlocks= Math.abs(distance-42)
    return distanceInBlocks;
  }
  function distanceFromHqInFeet(blocks){
    const blocksInFeet=264;
    return distanceFromHqInBlocks(blocks) * blocksInFeet;
  }
  function distanceTravelledInFeet(start, finish){
    let distanceInBlocks= Math.abs(finish-start);
    const blocksInFeet=264
   let distanceTravelledInFeet= distanceInBlocks*blocksInFeet;
    return distanceTravelledInFeet;
  
  }
  function calculatesFarePrice(start, destination) {
  
    let distanceInFeet = distanceTravelledInFeet(start, destination);
  
    let chargedDistance = distanceInFeet - 400;
    if (distanceInFeet <= 400) {
      return 0;
    }
    else if (distanceInFeet > 0 && distanceInFeet <= 2000) {
      return 0.02 * chargedDistance;
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25;
    }
    else {
      return 'cannot travel that far';
    }
  }