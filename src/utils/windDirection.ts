export function getWindDirection(deg: number) {
  if ((deg >= 0 && deg <= 23) || (deg >= 337 && deg <= 360)) {
    return "North";
  }
  if (deg >= 24 && deg <= 68) {
    return "North East";
  }
  if (deg >= 60 && deg <= 113) {
    return "East";
  }
  if (deg >= 114 && deg <= 158) {
    return "South East";
  }
  if (deg >= 159 && deg <= 203) {
    return "South";
  }
  if (deg >= 204 && deg <= 248) {
    return "South West";
  }
  if (deg >= 249 && deg <= 293) {
    return "West";
  }
  if (deg >= 294 && deg <= 336) {
    return "North West";
  }
}
