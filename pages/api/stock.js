// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import moment from "moment"

export default async function handler(req, res) {
  const {startDate, endDate} = req.query
  res.status(200).send(await getStockData(startDate, endDate))
}

const getStockData = async (startDate, endDate) => {
  try {
    const ticker = "SPUS"
    const period1 = moment(startDate, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)').unix()
    const period2 = moment(endDate, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)').unix()
    console.log(startDate)
    const interval = "1d"
    const events = "history"
    const crumb = "5YTX%2FgVGBmg";
    const url = `https://query1.finance.yahoo.com/v7/finance/download/${ticker}?period1=${period1}&period2=${period2}&interval=${interval}&events=${events}&crumb=${crumb}`

    const response = await (await fetch(url)).text();
    console.log(response)
    return toJson(response);

  } catch ({ message }) {
    return {
      error: message
    }
  }
}

const toJson = text => {
  const rows = text.split('\n');
  const headers = rows[0].split(',');
  const jsonData = [];

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(',');
    const row = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j];
    }
    jsonData.push(row);
  }

  return JSON.stringify(jsonData);
}