const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcometext: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    }
});

const aboutSchema = new mongoose.Schema({
    description1: {
        type: String,
        required: true
    },
    description2: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    }
});

const experienceSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}); 
 const coureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    description: {   
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }
}); 
const contactSchema = new mongoose.Schema({
    name: {  
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {  
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    }
});

module.exports = {
    Intro: mongoose.model('Intros', introSchema),
    About: mongoose.model('Abouts', aboutSchema),
    Experience: mongoose.model('Experience', experienceSchema),
    Project: mongoose.model('Projects', projectSchema),
    Course: mongoose.model('Courses', coureSchema),
    Contact: mongoose.model('Contact', contactSchema)
};