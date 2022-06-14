import {students, StudentType} from "../02/02";
import {GovernmenBuildingsType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
    title: skill})
}
export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveInCity = (st: StudentType, city: string) => {
    return st.address.city.title === city}

export const addMoneyToBudget = (build: GovernmenBuildingsType, budget: number) => {
    build.budget += budget
    }
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (staffCount: GovernmenBuildingsType, number: number) => {
     staffCount.staffCount -= number
}