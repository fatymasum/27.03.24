let books = [
    {
        name: "Ali and Nino",
        writer: "Qurban Seid"
    },
    {
        name: "Xez paltolu maddona",
        writer: "Sabahaddin Ali"
    },
    {
        name: "Serenad",
        writer: " Zulfu Livaneli"
    }


]
console.log(books)

let students = [
    {
        name: "Faty",
        surname: "Masumlu",
        value: 80,
        category: "A",
        hobby: ["walking", "dancing"]
    },

    {
        name: "Gulchin",
        surname: "Suleyman",
        value: 90,
        category: "B",
        hobby: ["watching film", "drink tea"]
    },

    {
        name: "Lamia",
        surname: "Rzayeva",
        value: 75,
        category: "B",
        hobby: ["singing", "dancing"]
    },

    {
        name: "Said",
        surname: "Rustem",
        value: 90,
        category: "A",
        hobby: ["spor", "chess"]
    }
]
console.log( students);

console.log( students[0].hobby)
console.log( students[1].hobby)
console.log( students[2].hobby)
console.log( students[3].hobby)

students.map(student => console.log(student.hobby))

students.filter(student => student.value < 90).forEach(student => console.log(` ${student.name} ${student.surname} ${student.value} xeberdarliq`))

let sum = 0;
students.map(student => sum += student.value);
let average = sum / students.length;
console.log(average);


