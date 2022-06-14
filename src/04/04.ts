import {CityType, GovernmenBuildingsType, HouseType} from "../02/02_02";

export function getHousesOnTheStreet(governmenBuildings: Array<GovernmenBuildingsType>) {
   return governmenBuildings.map(g =>
   g.address.street.title)
}

export function getStreetTitlesOfHouses(houses: Array<HouseType>) {
  return houses.map(h => h.address.street.title)

}
export function createMessages(houses: Array<HouseType>) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)

}