// Q1: weekly Temperatures record
let temperatures = [30, 32, 29, 35, 31, 34, 28];
console.log("All Temperatures:",temperatures);
let total = 0;
for (let i = 0; i < temperatures.length; i++) { total = total + temperatures[i];}
console.log("Total Temperatures:", total);
let average = total /
temperatures.length;
console.log("Average Temperatures:",average);
let count = 0;
for ( let i = 0; i < temperatures.length; i++) { if (temperatures[i] > average){count++;}}
console.log("Days Above Average:",count);
// Q2: Class Test Marks
let marks = [65, 80, 45, 90, 55, 72, 38, 85];
console.log("Original Marks:", marks);
console.log("Reverse Marks:", marks.reverse());
console.log("Highest Marks:",Math.max(...marks));
console.log("lowest Marks:",Math.min(...marks));
let passed = 0;
for (let i = 0; i < marks.length; i++) { if (marks[i] >= 50){ passed++;}}
console.log("passed students:", passed);
// Q3: Shop Sales Acroos Branches
let sales = [
    [12000,15000,11000,14000],[10000,18000,16000,13000],[17000,14000,19000,16000]
];
for (let i = 0; i < sales.length; i++) {
    console.log("Branch", i + 1, "Sales:", sales[i]);
}
for (let i = 0; i < sales.length; i++) {
    let branchTotal = 0;

    for (let j = 0; j < sales[i].length; j++) {
        branchTotal = branchTotal + sales[i][j];
    }
    console.log("Branch", i + 1, "Total Sales:", branchTotal);
}
let overallTotal = 0;
let highestBranch = 0;
let highestBranchNumber = 0;

for (let i = 0; i < sales.length; i++) {
    let branchTotal = 0;

    for (let j = 0; j < sales[i].length; j++) {
        branchTotal += sales[i][j];
    }

    overallTotal += branchTotal;

    if (branchTotal > highestBranch) {
        highestBranch = branchTotal;
        highestBranchNumber = i + 1;
    }
}

console.log("Overall Total Sales:", overallTotal);
console.log("Highest Sales Branch:", highestBranchNumber);
console.log("Highest Branch Total:", highestBranch);
//Q4: Reversing Delivery Route
let stops = [1, 2, 3, 4, 5, 6];

console.log("Original Route:", stops);

console.log("Reversed Route:", [...stops].reverse());
//Q5: Product Code Palindrome
let productCode = "MADAM";

let reversedCode = productCode.toUpperCase().split("").reverse().join("");

console.log("Entered Code:", productCode);

if (productCode.toUpperCase() === reversedCode) {
    console.log("Result: Palindrome");
} else {
    console.log("Result: Not Palindrome");
}
// Q6: Shopping Discount

function calculateDiscount(originalPrice, discountPercent) {
    let discountAmount = originalPrice * discountPercent / 100;

    let finalPrice = originalPrice - discountAmount;

    return finalPrice;
}
console.log("Final Price:", calculateDiscount(2000, 10));

// Q 7: Restaurant Bill

function calculateBill(itemPrice, quantity) {
    let totalCost = itemPrice * quantity;
    return totalCost;
}
console.log("Total Bill:", calculateBill(250, 3));

// Q8: Student Grade

function calculateGrade(marks) {
    if (marks >= 85) {
        return "A";
    } 
    else if (marks >= 70) {
        return "B";
    } 
    else if (marks >= 50) {
        return "C";
    } 
    else {
        return "Fail";
    }
}
console.log("Grade:", calculateGrade(78));

// Q 9: Food Delivery Charge
function calculateDeliveryCharge(orderAmount, distance) {

    if (orderAmount >= 2000) {
        if (distance <= 5) {
            return 0;
        } else {
            return (distance - 5) * 20;
        }
    }

    if (distance <= 5) {
        return 100;
    } else {
        return 100 + (distance - 5) * 20;
    }
}

let orderAmount = 1500;
let distance = 8;

let charge = calculateDeliveryCharge(orderAmount, distance);

console.log("Delivery Charge:", charge);
console.log("Final Bill:", orderAmount + charge);

// Q10: Weekly Sales Performance

function weeklyPerformance(sales) {
    let total = 0;
    let targetDays = 0;

    for (let i = 0; i < sales.length; i++) {
        total = total + sales[i];

        if (sales[i] >= 10000) {
            targetDays++;
        }
    }

    let average = total / sales.length;

    return {
        total: total,
        average: average,
        targetDays: targetDays
    };
}

let weeklysales = [12000, 9000, 11000, 8000, 15000, 10000, 13000];

let result = 
weeklyPerformance(weeklysales);

console.log("Total Weekly Sales:", result.total);
console.log("Average Daily Sales:", result.average);
console.log("Days with Sales >= 10000:", result.targetDays);

if (result.average >= 10000) {
    console.log("Target Achieved");
} else {
    console.log("Target Not Achieved");
}
