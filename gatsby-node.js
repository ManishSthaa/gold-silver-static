const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Gold template
  const goldTemplate = path.resolve(`src/templates/GoldMonthTemplate.js`);

  const goldResult = await graphql(`
    query {
      allGoldPricesCsv {
        nodes {
          Date__MM_YY_DD_
          Fine_Gold
          Standard_Gold
        }
      }
    }
  `);

  if (goldResult.errors) {
    throw new Error(goldResult.errors);
  }

  const goldData = goldResult.data.allGoldPricesCsv.nodes;

  const goldYearMonthMap = {};
  goldData.forEach((item) => {
    const [month, year] = item.Date__MM_YY_DD_.split('/').slice(0, 2);

    if (!goldYearMonthMap[year]) {
      goldYearMonthMap[year] = new Set();
    }
    goldYearMonthMap[year].add(month);
  });

  Object.entries(goldYearMonthMap).forEach(([year, months]) => {
    months.forEach((month) => {
      createPage({
        path: `/gold/${year}/${month}`,
        component: goldTemplate,
        context: {
          year: parseInt(year),
          month: parseInt(month),
          data: goldData.filter((item) => {
            const [itemMonth, itemYear] = item.Date__MM_YY_DD_.split('/').slice(0, 2);
            return parseInt(itemYear) === parseInt(year) && parseInt(itemMonth) === parseInt(month);
          }),
        },
      });
    });
  });

  // Silver template
  const silverTemplate = path.resolve(`src/templates/SilverMonthTemplate.js`);

  const silverResult = await graphql(`
    query {
      allSilverPricesCsv {
        nodes {
          Date
          Silver
        }
      }
    }
  `);

  if (silverResult.errors) {
    throw new Error(silverResult.errors);
  }

  const silverData = silverResult.data.allSilverPricesCsv.nodes;

  const silverYearMonthMap = {};
  silverData.forEach((item) => {
    const [month, year] = item.Date.split('/').slice(0, 2);

    if (!silverYearMonthMap[year]) {
      silverYearMonthMap[year] = new Set();
    }
    silverYearMonthMap[year].add(month);
  });

  Object.entries(silverYearMonthMap).forEach(([year, months]) => {
    months.forEach((month) => {
      createPage({
        path: `/silver/${year}/${month}`,
        component: silverTemplate,
        context: {
          year: parseInt(year),
          month: parseInt(month),
          data: silverData.filter((item) => {
            const [itemMonth, itemYear] = item.Date.split('/').slice(0, 2);
            return parseInt(itemYear) === parseInt(year) && parseInt(itemMonth) === parseInt(month);
          }),
        },
      });
    });
  });
};
