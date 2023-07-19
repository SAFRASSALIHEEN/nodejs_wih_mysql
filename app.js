const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db');

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
const academicSemesterRoutes = require('./routes/academicSemesterRoutes');
const academicStaffRoutes = require('./routes/academicStaffRoutes');
const courseRoutes = require('./routes/courseRoutes');
const courseRegistrationRoutes = require('./routes/courseRegistrationRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const resultRoutes = require('./routes/resultRoutes');
const studentRegistrationRoutes = require('./routes/studentRegistrationRoutes');
const studentUniDetailsRoutes = require('./routes/studentUniDetailsRoutes');
const userRoutes = require('./routes/userRoutes');

// Use the API routes
app.use('/api/academic-semester-details', academicSemesterRoutes);
app.use('/api/academic-staff-details', academicStaffRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/course-registration', courseRegistrationRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/student-registration', studentRegistrationRoutes);
app.use('/api/student-uni-details', studentUniDetailsRoutes);
app.use('/api/user-details', userRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
