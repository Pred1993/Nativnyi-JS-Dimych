import {students, StudentType} from "../02/02";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
   student = {
      id: 1,
      name: "Bob",
      age: 22,
      isActive: false,
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
})

test( 'new tech skill should be add to student', () =>{
expect(student.technologies.length).toBe(3)
   addSkill(student, "JS")
   expect(student.technologies.length).toBe(4)
   expect(student.technologies[3].title).toBe('JS')
   expect(student.technologies[3].title).toBeDefined() // toBeDefined() значит что определён
})


test( 'student should be made active', () =>{
   expect(student.isActive).toBe(false)
   makeStudentActive(student)
   expect(student.isActive).toBe(true)

})

test( 'does student lives in city?', () =>{
   expect(student.address.city.title).toBe('Minsk')
   let result1 = doesStudentLiveInCity(student, 'Moscow')
   let result2 = doesStudentLiveInCity(student, 'Minsk')

   expect(result1).toBe(false)
   expect(result2).toBe(true)
})