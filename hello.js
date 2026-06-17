// //operators in javascript
// // arthimetic operator

//let a=10
//let b=5
//let diff=a-b
//let product=a*b
//let division=a/b
//let remainder=a%b
//let exponent=a**b
//console.log(sum)
//console.log(diff)
//console.log(product)
//console.log(division)
//console.log(remainder)
//console.log(exponent)

// 2.Assignment operators
//let c=20
//let a=10
//let b=5
//let c=15

//console.log(c+=1)
//console.log(a-=1)
//console.log(d*=1)
//console.log(a**=2)


// //comparison operators
// //USED TO COMPARE TWO OR MORE VALUES AND THE RESULT T RETURNED JS ALWAYS BOOLEAN VALUE THAT JS EITHER TRUE OR FALSE

// let a=9
// let b=8
// //console.log(a>b)
// console.log(a<b)
// //greater than equals to
// //console.log(a>=b)
//console.log(a<=b)

// //== ==
// // == checks only value but ignores the data types
// //== trict equality checker both value as well as data types
// let a=10
// let b="10"
// //console.log(a==b)
// console.log(a==b)



// //write a program to convert the degree  celsius  to  degree fahrenheit [celsius*(9/5)+32]
// const celsius=36
// const fahrenheit=(celsius*(9/5)+32)
// console.log("The "+celsius+"degree"+" is equal to "+fahrenheit+"fahreinheit")

//declare the input value const celusis=36;
//perform the calcultion 
//we use (9/5) or 1.8 to get the ratio right
const fahrenheit= (celsius*(9/5)+32)
//display the result
console.log("The "+celsius+"degree"+" is equal to "+fahrenheit+"fahreinheit")




//Day3:Conditional statement in javascript
let a=20
let b=30
let c=40

// if statement
//if(a>b){
   // console.log(a+"is Greater")
//}
//else{
   // console.log(b+"is Greater")
//} 
//else if

if(a>b && a>c){
        console.log(a+ c"is greater")
}
else if(b>c){
    console.log(b+"c is greatest")
}
else{
    console.log(c +" c is greater")
}

// Q:Declare four variables w,x,y,z and find largest/greatest among than using if else if condition

//q2:using if else if else statement ,display "your BMI[BMI VALUE] is perfect", your BMI is below average "or" your BMI is above average"

//q3:The user has got marks in one subject let us assume the marks can be from (1 to 100) we need to find the Grade got by student based on his marks 
// a.if he got 90 or above the grade is A+
//b. if he got above 80 and below 90 the grade is A
//c.if he got above 60 and below 80 the grade is B
//d.else he got C
// And finally if marks is less than 40 he will be failed 
//Nested If

let marks=67;
if(marks>40){
    if (marks>90){
        console.log("He got A+")
    }
    else if(marks>80 && marks<90){
        console.log("He got A")
    }
    else if(marks>60 && marks<80){
        console.log("He got B")
    }
    else{
        console.log("He got C")
    }
}
else{
    console.log("He failed the exam ")
}

// Declare variables
let w = 10;
let x = 25;
let y = 15;
let z = 8;

// Find greatest number
if (w >= x && w >= y && w >= z) {
    console.log("Greatest number is w =", w);
}
else if (x >= w && x >= y && x >= z) {
    console.log("Greatest number is x =", x);
}
else if (y >= w && y >= x && y >= z) {
    console.log("Greatest number is y =", y);
}
else {
    console.log("Greatest number is z =", z);
}
// Example BMI value
let bmi = 22;

// Condition checking
if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI", bmi, "is perfect");
}
else if (bmi < 18.5) {
    console.log("Your BMI", bmi, "is below average");
}
else 

//q4:using the if else if statement,calculate the electricity bill based on units consumed.
//conditions:
//up to 50 units=rs 3 per unit
//51-150 unit =rs 5 per unit
// Above 150 units=rs 8 per unit 


import java.util.Scanner;

public class ElectricityBill {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter units consumed: ");
        int units = sc.nextInt();
        double bill;

        if (units <= 50) {
            bill = units * 3;
        }
        else if (units <= 150) {
            bill = units * 5;
        }
        else {
            bill = units * 8;
        }

        System.out.println("Total Electricity Bill = Rs. " + bill);

        sc.close();
    }
}

//Day4: // function 
//A block of code that can be reuse multiples times
// parameter based function and without parameter 
//function sum(){
// let a=10;
// let b=20;
// console.log(a+b)
//return a+b;
//}
// sum(); // if you use console.log or directly prints inside function 
// console.log(sum())
// console.log(sum())
//console.log(sum())
//sum()
//sum()

// parameter based function 
//function mul(x,y){
// return x*y
//}
// console.log(mul(2,3))
//console.log(mul(12,12))

//function multiply(){
//local variable
// let a=10
// a*=2
// console.log("local variable",a)
//}
//multiply()
//console.log(a)

//q1. check whether the number is even or odd using function and conditional statement
// Arrow function modern function syntax
// const evenOdd=(a)=>{
    //if (a%2==0){
    console.log("Even number")
    //}
    //else{
        console.log("Odd number")
    //}
    //}
    //evenOdd(12)
    
// Loop in javascript 
//1.For Loop
for(let i=0;i<5;i++){
    console.log(i)
}


//








