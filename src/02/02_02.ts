export type StreetType = {
    title: string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}


export type AddressType2 = {
    street: StreetType
}
export type GovernmenBuildingsType = {
    type: 'Hospital' | 'Fire-station'
    budget: number
    staffCount: number
    address: AddressType2
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmenBuildings: Array<GovernmenBuildingsType>
    citizensNumber: number
}