const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Smart Travel Budget Planner API is running 🚀');
});

// Example travel planning route
app.get('/plan', (req, res) => {
  const { destination, days, budget } = req.query;

  if (!destination || !days || !budget) {
    return res.status(400).send("❌ Please provide destination, days, and budget in query params");
  }

  res.send(`📍 Planning a ${days}-day trip to ${destination} with a budget of $${budget}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
