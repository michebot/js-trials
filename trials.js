// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];


// Add some phone numbers to our map

const phoneNumbers = new Map([
	['home', '510-867-5309'],
	['mobile', '415-555-1212'],
	['business', '415-123-4567']
	]);
		
// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function print_acct_info(name, number, busName){

	console.log(`Account Holder Name: ${name}`);
	console.log(`Account Holder Number: ${number}`);
	console.log(`Business Name: ${busName}`);
}

print_acct_info(accountHolder, accountNumber, businessName);

// Add function to print all addresses, including a header


// Add function to print phone types and numbers


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map();

// Add function to add transactions

function addTransaction(date, amt){

	transactions.set(date, amt);
}

// Use the function to add transactions

addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);


// Add function to show balance status

function showBalanceStatus(balAmt){
	console.log(`Balance: ${balAmt}`);

	if (balAmt<0){
		console.log('YOU ARE OVERDRAWN');
	} else if (balAmt<20){
		console.log('Warning: You are close to zero balance');
	} else {
		console.log('Thank you for your business');
	}
}

// Add function to show transactions

function showTransactions(map1, beginBal) {
	console.log(`The starting balance is: ${beginBal}`);
	
	let newBal = beginBal;

	for (let transaction of map1) {
		console.log(`${transaction[0]}`);
		if (transaction[1] < 0){
			console.log(`withdrawal of ${transaction[1]}`);
		} else {
			console.log(`deposit of ${transaction[1]}`);
		}
		newBal += transaction[1];
		console.log(`New balance is ${newBal}`);
	}

	if (newBal < 0){
		newBal -= 25;
	}

	console.log(showBalanceStatus(newBal));
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




