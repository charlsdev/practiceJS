const data = [
  {
    desiredCourse: 'PortfolioConstruction',
    requiredCourse: 'PortfolioTheories',
  },
  {
    desiredCourse: 'InvestmentManagement',
    requiredCourse: 'Investment',
  },
  {
    desiredCourse: 'Investment',
    requiredCourse: 'Finance',
  },
  {
    desiredCourse: 'PortfolioTheories',
    requiredCourse: 'Investment',
  },
  {
    desiredCourse: 'InvestmentStyle',
    requiredCourse: 'InvestmentManagement',
  },
  {
    desiredCourse: 'Finance',
    requiredCourse: 'Programming',
  },
];

const table: [] = [];

data.forEach((item) => {
  const { desiredCourse, requiredCourse } = item;
  
  if (table.includes(requiredCourse)) {
    if (table.includes(desiredCourse)) {
      table.splice(table.indexOf(desiredCourse), 1)
      table.splice(table.indexOf(requiredCourse) + 1, 0, desiredCourse)
    } else {
      table.splice(table.indexOf(requiredCourse) + 1, 0, desiredCourse)
    }
  } else {
    if (table.includes(desiredCourse)) {
      table.unshift(requiredCourse);
      table.splice(table.indexOf(desiredCourse), 1)
      table.splice(table.indexOf(requiredCourse) + 1, 0, desiredCourse)
    } else {
      table.unshift(requiredCourse);
      table.splice(table.indexOf(requiredCourse), 0, desiredCourse)
    }
  }
});

console.log(table);
