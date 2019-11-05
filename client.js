const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$( document ).ready( jq_init );

function calculateBonus (employee) {
  let bonusPercent = 0;
  let bonusValue = 0;

  //>> Bonus: Review Rating
  switch(employee.reviewRating) {
    case 3: bonusPercent += .04; break;
    case 4: bonusPercent += .06; break;
    case 5: bonusPercent += .10; break;
  }
  //>> Bonus: Seniority
  if (employee.employeeNumber.length===4) {bonusPercent += .05;}
  //>> Bonus Reduction: Salary
  if (Number(employee.annualSalary)>65000) {bonusPercent -= .01;}
  //>> Limiting bonus size
  if (bonusPercent<0.00) {bonusPercent = 0.00;}
  if (bonusPercent>0.13) {bonusPercent = 0.13;}
  //>> Calculate bonusValue
  bonusValue = Math.round(employee.annualSalary * bonusPercent);

  return {
    name: employee.name,
    bonusPercentage: bonusPercent,
    totalCompensation: Math.round(Number(employee.annualSalary) + bonusValue),
    totalBonus: bonusValue
  }
}
console.log( employees );

function processEmployees() {
  $('#employeeInfo').empty();
  for (let i=0; i<employees.length; i++) {
    let bonus = calculateBonus(employees[i]);
    console.log( bonus );
    $('#employeeInfo').append(
      `<li>${bonus.name} receives a ${Number(bonus.bonusPercentage)*100}% raise. They now make $${bonus.totalCompensation}.</li>`
    )
  }
}

function jq_init() {
  console.log( 'JQ is ready.' );
  $('#calcButton').on('click',processEmployees);
}
