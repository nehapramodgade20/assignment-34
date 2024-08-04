//program to find largest marks of student from given array.

const marks = [89 , 79 , 22 , 67 , 97];
console.log(marks)
let large_marks = marks [0];

for(let i = 0 ; i<= large_marks ; i++)
{
    if(marks[i] > large_marks)
    {
        large_marks = marks[i];
    }
}

console.log(`The largest marks of a student are ${large_marks}`)


//Program to find the sum of odd numbers from array.

const number = [1 , 9 , 2 , 4 , 5, 3];

console.log(number)

let sum=0;
for(let i=0 ; i<number.length ; i++)
{
    if(number[i]% 2==1)
    {
        sum += number[i];
    }
    
}

console.log (`Sum of a odd numbers are ${sum}`)

//program to say hello to all elements

const students = [ "Mansi" , "Sakshi" , "Pallavi" , "Kavita" , "Vrushali"]

for(const stud of students )
{
       console.log(`Heyy hello ${stud}`)
}