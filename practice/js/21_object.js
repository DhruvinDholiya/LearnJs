//=================== 1 ====================\\
const selfObj = {
    name: "dhruvin",
    Age: 21
}
// for (const mainKey in selfObj) {
//     console.log(selfObj[mainKey]);
// }



//=================== 2 ====================\\
const carOwnerObj = {
    name: "jd",
    age: 20,
    cars: {
        car1: "ford",
        car2: "breza",
        car3: "BMW"
    }
}
// for(const mainKey in carOwnerObj) {
//     if(mainKey === 'cars') {
//         for(const subKey in carOwnerObj[mainKey]) {
//             console.log(carOwnerObj[mainKey][subKey]);
//         }
//     } else {
//         console.log(carOwnerObj[mainKey]);
//     }
// }



//=================== 3 ====================\\
const studentObj = [
    {
        name: "amit",
        age: 19,
        course: {
            c1: "c",
            c2: "html"
        }
    },
    {
        name: "mayur",
        age: 20,
        course: {
            c1: "c",
            c2: "html"
        }
    }
];

// studentObj.map((student) => {
//     console.log(student.name, student.age);
//     for (const courseKey in student.course) {
//         console.log(student.course[courseKey]);
//     }
// });



//=================== 4 ====================\\
let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat: 10
        }
    }
}
for (const mainKey in data) {
    if (mainKey === 'personal_info') {
        console.log(data[mainKey].name, data[mainKey].age, data[mainKey].city);
    } else if (mainKey === 'courses') {
        data[mainKey].map((course) => {
            console.log(course);
        });
    } else if (mainKey === 'branches') {
        for (const branchKey in data[mainKey]) {
            console.log(' ' + branchKey + ' --> ' + data[mainKey][branchKey].admission, data[mainKey][branchKey].vacant_seat);
        }
    }
}