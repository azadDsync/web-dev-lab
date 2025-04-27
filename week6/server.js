const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

const mongoURL = 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(' MongoDB connection error:', err));

// Schema and Model
const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const Student = mongoose.model('Student', StudentSchema);



// Home
app.get('/', (req, res) => {
    res.send('Hello from Express and MongoDB!');
});

// Create a new student (POST)
app.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all students (GET)
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a student by ID (GET)
app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a student by ID (PUT)
app.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a student by ID (DELETE)
app.delete('/students/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
});
