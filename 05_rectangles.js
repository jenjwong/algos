var findRectangleBound = (r) => {
  var rectangle = {lx: r.lx, ly: r.by }
  rectangle.hy = r.by - r.h
  rectangle.hx = rectangle.lx + r.w
 
  return rectangle
}


var isInRange = (lowerBound, upperBound, point) => {
  return point >= lowerBound && point <= upperBound
}


var findRectangleOverlap = (rec1, rec2) => {
    var r1P = findRectangleBound(rec1)
    var r2P = findRectangleBound(rec2)
    var checkX = isInRange(r1P.lx, r1P.hx, r2P.lx ) || isInRange(r1P.lx, r1P.hx, r2P.hx )
    var checkY = r2P.ly <= r1P.ly && r2P.ly >= r1P.hy || r2P.hy <= r1P.ly && r2P.hy >= r1P.hy
    return checkX && checkY
}


console.log(findRectangleOverlap(rect1, rect2)) // true
