const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
} = require("../models/portfoliomodel");
const users =require("../models/users");

//get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projecs = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();
    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projecs,
      contact: contacts[0],
      experiences: experiences,
      courses: courses,
    });
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//update intro
// router.post("/update-intro", async (req, res) => {
//   try {
//     const intro = await Intro.findByIdAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       { new: true },
//     );
//     res.status(200).send({
//       data: intro,
//       success: true,
//       message: "Intro updated successfully",
//     });
//   } catch (error) {
//     res.status(500).send( error);
//   }
// });
//update intro
router.post("/update-intro", async (req, res) => {
    try {
      const { _id, values } = req.body;
  
      const intro = await Intro.findByIdAndUpdate(
        _id,
        values,
        { new: true }
      );
  
      res.status(200).send({
        data: intro,
        success: true,
        message: "Intro updated successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  });
//update about
router.post("/update-about", async (req, res) => {
  try {
    const { _id, values } = req.body;

    // convert skills if it comes as comma-separated string
    if (values.skills && typeof values.skills === "string") {
      values.skills = values.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    const about = await About.findByIdAndUpdate(
      _id,
      values,
      { new: true }
    );

    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
//update Experience
router.post("/update-experience", async (req, res) => {
  try {
    const { _id, values } = req.body;

    const exp = await Experience.findByIdAndUpdate(
      _id,
      values,
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Experience updated successfully",
      data: exp,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

//add experience
router.post("/add-experience", async (req, res) => {
  try {
    const newExp = new Experience(req.body.values);
    await newExp.save();

    res.status(200).send({
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

//delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const { _id } = req.body;

    await Experience.findByIdAndDelete(_id);

    res.status(200).send({
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
// ADD PROJECT
router.post("/add-project", async (req, res) => {
  try {
    const { values } = req.body;

    // convert comma-separated strings into proper formats
    if (typeof values.technologies === "string") {
      values.technologies = values.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }

    const project = new Project(values);
    await project.save();

    res.status(200).send({
      success: true,
      message: "Project added successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// UPDATE PROJECT
router.post("/update-project", async (req, res) => {
  try {
    const { _id, values } = req.body;

    if (typeof values.technologies === "string") {
      values.technologies = values.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }

    const project = await Project.findByIdAndUpdate(_id, values, {
      new: true,
    });

    res.status(200).send({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// DELETE PROJECT
router.post("/delete-project", async (req, res) => {
  try {
    const { _id } = req.body;

    await Project.findByIdAndDelete(_id);

    res.status(200).send({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
// ADD COURSE
router.post("/add-course", async (req, res) => {
  try {
    const values = req.body.values;

    if (typeof values.skills === "string") {
      values.skills = values.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    const newCourse = new Course(values);
    await newCourse.save();

    res.status(200).send({
      success: true,
      message: "Course added successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// UPDATE COURSE
router.post("/update-course", async (req, res) => {
  try {
    const { _id, values } = req.body;

    if (typeof values.skills === "string") {
      values.skills = values.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    const updated = await Course.findByIdAndUpdate(
      _id,
      values,
      { new: true }
    );

    res.status(200).send({
      success: true,
      data: updated,
      message: "Course updated successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// DELETE COURSE
router.post("/delete-course", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.body._id);

    res.status(200).send({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
// UPDATE CONTACT
router.post("/update-contact", async (req, res) => {
  try {
    const { _id, values } = req.body;

    const updated = await Contact.findByIdAndUpdate(
      _id,
      values,
      { new: true }
    );

    res.status(200).send({
      success: true,
      data: updated,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
//admin login
const bcrypt = require("bcrypt");

router.post("/admin-login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await users.findOne({ username });

    if (!admin) {
      return res.status(404).send({ success: false, message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).send({ success: false, message: "Invalid credentials" });
    }

    const adminData = admin.toObject();
    delete adminData.password;

    res.status(200).send({
      success: true,
      message: "Login successful",
      data: adminData,
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
module.exports = router;
