import express from 'express';
// const app = require('express');
const app = express();
app.use(express.json());

let students = [];
let idCounter =1;


// to Get all students
app.get('/students', (req, res) => {
  res.json(students);
  //res.send("Hello, world!");
});

// to GET single student
app.get('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found"})
  }
      res.json(student);
  });

  // start server
app.listen(3000, () => { 
  console.log('Server is running on port 3000');
});





 /*app.post('/students', (req, res) => {
  const {name, age, email, address } = req.body;

  if (!name || !age || !email || !address) {
    return res.status(400).send('all fields are required');
  }

  const student = { name, age, email, address };

  students.push(student);
  
  res.status(201).send("student added successfully");
});*/




// POST create student
app.post('/students', (req, res) => {
  const { name, age, email, address } = req.body;

  // Check if all fields exist
  if (!name || !age || !email || !address) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Name validation
  if (typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "Name must be at least 2 characters long" });
  }

  // Age validation

  /* if (typeof age !== "number" || age < 1 || age > 120) {
    return res.status(400).json({ error: "Age must be a valid number between 1 and 120" });
  } */

  // If you're sending data from Postman or frontend, sometimes age comes as a string. 
  // You can fix that like this:

  const parsedAge = Number(age);
if (isNaN(parsedAge) || parsedAge < 1 || parsedAge > 120) {
  return res.status(400).json({ error: "Age must be a valid number" });
}




  // Email validation (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // to prevent duplicate email 
  const existing = students.find(s => s.email === email.toLowerCase().trim());
  
  if (existing) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const student = {
    id: idCounter++,
    name: name.trim(),
    age: parsedAge,
    email: email.toLowerCase().trim(),
    address: address.trim()
  };
  
  /*const student = {
    name: name.trim(),
    age,
    email: email.toLowerCase().trim(),
    address: address.trim()
  };*/


  // Address validation
  if (typeof address !== "string" || address.trim().length < 5) {
    return res.status(400).json({ error: "Address must be at least 5 characters long" });
  }

 

  students.push(student);

  res.status(201).json({
    message: "Student added successfully",
    data: student
  });
});

// PUT update student
app.put('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { name, age, email, address } = req.body;

  if (name) {
    if (typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ error: "Invalid name"});
    }
    student.name = name.trim();
  }
  
  if (age) {
   const parsedAge = Number(age);
   if (isNaN(parsedAge) || parsedAge < 1 || parseAge > 120) {
    return res.status(400).json({ error: "Invalid age" });
   }
  student.age = parsedAge;
}

if (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email " });
  }

  const exists = students.find(s => s.email === email && s.id !== id);
    if (exists) {
      return res.status(400).json({ error: "Email already in use" });
    }

    student.email = email.toLowerCase().trim();
  }

  if (address) {
    if (typeof address !== "string" || address.trim().length < 5) {
      return res.status(400).json({ error: "Invalid address" });
    }
    student.address = address.trim();
  }

  res.json({
    message: "Student updated",
    data: student
  });
});

// DELETE student
app.delete('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1);

  res.json({
    message: "Student deleted",
    data: deletedStudent[0]
  });
});

