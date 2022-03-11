/**
 * =====
 Given a list of points, a central point, and an integer k, find the nearest 
 k points from the central point.

 For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central 
 point (1, 2), and k = 2, return [(0, 0), (3, 1)]
 * =====
 */
let calculateDistance = function(p1, p2) {
  return Math.sqrt( Math.pow( ( p1[0] - p2[0] ), 2 ) + Math.pow( ( p1[1] - p2[1] ), 2 ) ).toFixed(3);
};

module.exports = {
  nearestPoints: function(pointsList, center, nearestCount) {

    // The list of points with their distance from the center point.
    let pointsWithDistance = [];

    for (let ix = 0; ix < pointsList.length; ix++) {
      // Calculate the distance of each point from the center.
      const distanceFromCenter = calculateDistance(pointsList[ix], center);
      // Store it in the array.
      pointsWithDistance.push( {
        point: pointsList[ix],
        distance: distanceFromCenter
      } );
    }

    // Sort on distance.
    pointsWithDistance.sort((a, b) => a.distance - b.distance);

    // Return the nearestCount closest points.
    // Extract the points from the object list before returning.
    return pointsWithDistance.slice(0, nearestCount).map(a => a.point);
  }
};
