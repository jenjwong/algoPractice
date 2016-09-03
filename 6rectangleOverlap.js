'use strict'

// The lowest top must be greater than highest bottom;
// Thethe highest left point must be greater than the lowest right

const findOverlap = (rec1, rec2) => {
  const lowestTop = Math.max(rec1.bottomY - rec1.height, rec2.bottomY - rec2.height);
  const highestBottom = Math.min(rec1.bottomY, rec2.bottomY);
  const leftMostPoint = Math.max(rec1.leftX, rec2.leftX);
  const rightMostPoint = Math.min(rec1.leftX + rec1.width, rec2.leftX + rec2.width);

  return highestBottom > lowestTop && rightMostPoint > leftMostPoint;
};


// naive solution

// const findOverlap = (rec1, rec2) => {
//   let isOverlapping = false;
//   let isXOverlapping;
//   let isYOverlapping;
//
//   debugger
//   if(rec2.leftX > rec1.leftX && rec2.leftX < rec1.leftX + rec1.width) {
//     isXOverlapping = true;
//   }
//   if(rec2.leftX + rec2.width > rec1.leftX && rec2.leftX + rec2.width < rec1.leftX + rec1.width) {
//     isXOverlapping = true;
//   }
//   if(rec2.bottomY < rec1.bottomY && rec2.bottomY > rec1.bottomY - rec1.height) {
//     isYOverlapping = true;
//   }
//   if(rec2.bottomY - rec2.height < rec1.bottomY && rec2.bottomY - rec2.height > rec1.bottomY - rec1.height) {
//     isYOverlapping = true;
//   }
//
//   if(isXOverlapping && isYOverlapping) {
//     isOverlapping = true;
//   }
//
//   return isOverlapping;
// }

module.exports = findOverlap;
