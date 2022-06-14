type TechType = {
    id: number
    title: string
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
export type StudentType = {
    id: number,
    age: number,
    name: string,
    isActive: boolean,
    address: AddressType
    technologies: Array<TechType>
}
export const students = {
    id: 1,
    name: "Bob",
    age: 22,
    isActive: true,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}