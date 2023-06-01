// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import moment from "moment"

export default async function handler(req, res) {
  res.status(200).send(await getStockData())
}

const getStockData = async () => {
  try {
    const ticker = "SPUS"
    const period1 = moment().subtract(8, "days").unix();
    const period2 = moment().unix()
    const interval = "1d"
    const events = "history"
    const crumb = "5YTX%2FgVGBmg";
    const url = `https://query1.finance.yahoo.com/v7/finance/download/${ticker}?period1=${period1}&period2=${period2}&interval=${interval}&events=${events}&crumb=${crumb}`

    const response = await (await fetch(url)).text();
    
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