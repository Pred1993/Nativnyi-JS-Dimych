import {CityType, GovernmenBuildingsType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(t => t.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(governmenBuildings: Array<GovernmenBuildingsType>, number: number) {
  return governmenBuildings.filter(g => g.staffCount > 500)

}