const express = require('express')
const app = express()
const PORT = 8000

const terpeneData = {
  topTerpenes: [
    {
      id: 1,
      name: "Myrcene",
      aroma: "Earthy, Musky, Cloves",
      effects: ["Relaxing", "Sedating"],
    },
    {
      id: 2,
      name: "Limonene",
      aroma: "Citrus, Lemon, Orange",
      effects: ["Mood Elevation", "Stress Relief"],
    },
    {
      id: 3,
      name: "Caryophyllene",
      aroma: "Peppery, Spicy, Wood",
      effects: ["Anti-inflammatory", "Anxiety Relief"],
    },
    {
      id: 4,
      name: "Linalool",
      aroma: "Floral, Lavender",
      effects: ["Calming", "Sleep Aid"],
    },
    {
      id: 5,
      name: "Pinene",
      aroma: "Pine, Sharp, Sweet",
      effects: ["Alertness", "Memory Retention"],
    }
  ]
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(terpeneData)
})

app.listen(PORT, () => {
    console.log(`The server is now running on port: ${PORT}.`)
})