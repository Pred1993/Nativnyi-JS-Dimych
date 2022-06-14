import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff} from "./03";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title:
                        'White street'
                }
            }
        },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title:
                            'Happy street'
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title:
                            'White street'
                    }
                }
            }],
        governmenBuildings: [{
            type: 'Hospital',
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                }
            }
        },
            {
                type: 'Fire-station',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }],
        citizensNumber: 1000000
    }
})
// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmenBuildings[0], 100000)

    expect(city.governmenBuildings[0].budget).toBe(300000)

})
test('Budget should be changed for Fire-Station', () => {
    addMoneyToBudget(city.governmenBuildings[1], -100000)

    expect(city.governmenBuildings[1].budget).toBe(400000)
})
// test('Houses should be destroyed', () => {
//     demolishHousesOnTheStreet(city, 'Happy street')
//
//     expect(city.governmenBuildings[1].budget).toBe(400000)
// })
test('House should be repared', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBe(true) // либо .toBeTruthy
})
test('Staff should be increased', () => {
    toFireStaff(city.governmenBuildings[1], 20)

    expect(city.governmenBuildings[1].staffCount).toBe(980) // либо .toBeTruthy
})