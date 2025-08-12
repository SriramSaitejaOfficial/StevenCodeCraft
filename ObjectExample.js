let course = {
    title: "JavaScript Basics",
    duration: 4,
    topics: ["Variables", "Functions", "Objects", "Arrays"],
    instructor: {
        instructorName: "Sriram Saiteja",
        experience: 5
    },
};

//An object is created using object literal notation
//Accessing properties of the object

//console.log(course.instructor.name); // Output: Sriram Saiteja 

console.log(course.instructor['instructorName']);

