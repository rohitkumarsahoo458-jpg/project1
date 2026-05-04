const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/portfolio');

const Project = mongoose.model('Project', { title: String, desc: String });

app.get('/projects', async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

app.listen(5000, () => console.log('Backend Running'));