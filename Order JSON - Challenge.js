const data = [
  {
    "desiredCourse": "PortfolioConstruction",
    "requiredCourse": "PortfolioTheories"
  }, {
    "desiredCourse": "InvestmentManagement",
    "requiredCourse": "Investment"
  }, {
    "desiredCourse": "Investment",
    "requiredCourse": "Finance"
  }, {
    "desiredCourse": "PortfolioTheories",
    "requiredCourse": "Investment"
  }, {
    "desiredCourse": "InvestmentStyle",
    "requiredCourse": "InvestmentManagement"
  }, {
    "desiredCourse": "Finance",
    "requiredCourse": "Programming"
  }
];

let table: [] = [];

function orderInfo (desiredCourse: string, requiredCourse: string) {
  if (!table.includes(requiredCourse)) table = [requiredCourse, ...table]
  if (table.includes(desiredCourse)) {
    table.splice(table.indexOf(desiredCourse), 1)
  }
  
  table.splice(table.indexOf(requiredCourse) + 1, 0, desiredCourse)
}

data.forEach((item) => {
  const { desiredCourse, requiredCourse } = item;  
  orderInfo(desiredCourse, requiredCourse)
});

console.log(table);
