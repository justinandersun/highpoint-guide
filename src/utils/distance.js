const EARTH_RADIUS_MILES = 3958.8

function toRadians(degrees) {
  return (degrees * Math.PI) / 180
}

// Great-circle (haversine) distance between two lat/long points, in miles.
export function distanceInMiles(lat1, lon1, lat2, lon2) {
  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return EARTH_RADIUS_MILES * c
}
