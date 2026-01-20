import { Router } from "express";
const router = Router();
import LocalGuide from "./models/localguide";


// Route to handle guide registration form submission
router.post("/submit-guide-registration", async (req, res) => {
  try {
    const guide = new LocalGuide(req.body);
    await guide.save();
    res.status(201).send({ message: "Guide registered successfully!" });
  } catch (error) {
    res.status(400).send({ message: "Error registering guide", error });
  }
});

export default router;
