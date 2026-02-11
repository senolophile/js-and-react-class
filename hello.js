// //operators in javascript
// // arthimetic operator
// //comparison operators
// //USED TO COMPARE TWO OR MORE VALUES AND THE RESULT T RETURNED JS ALWAYS BOOLEAN VALUE THAT JS EITHER TRUE OR FALSE

// let a=1
// let b=8
// //console.log(a>b)
// console.log(a<b)
// //greater than equals to
// //console.log(a>=b)

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






// let c=20

// c=c+1
// c+=1
// // console.log("first:",c)
// c+=1
// //console.log("second:",c)

//day3:Condition statement in javascript
let a=20
let b=30
let c=10

// if statement
//if(a>b){
   // console.log("a+is Greater than b")
//}
//else{
   // console.log("b+is Greater than a")
//} 

if(a>b) && a>c){
    console.log("a is greatest")
}
else if(b>c){
    console.log("b is greatest")
}
else{
    console.log(")
}

// Q:Declare four variables w,x,y,z and find largest/greatest among than using if else if condition

//q2:using if else if else statement ,display "your BMI[BMI VALUE] is perfect", your BMI is below average "or" your BMI is above average"

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
else {
    console.log("Your BMI", bmi, "is above average");
}



let marks=67;
if(marks>40){
    console.log("He got A+")
}
else if(marks>60 && marks<90){
    console.log("He got A")
}
else{
    console.log("He got B")
}
else{
    console.log("He got C")
}
else{
    console.log("He failed the exam ")

}
}
}
}}

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








