const express = require('express');
const app = express();
const port = 3000;


app.get('/employees', (req, res) => {
  res.send("./employees.json")
})

app.get('/employees/:id', function (req, res) {
    const id = req.params.employeeID - 1;
    if (id <= 0 || id > 10) {
        res.send("That employee with that ID is not in our database")
    } else {
        res.send(employees.Employees[id]) 
    }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})