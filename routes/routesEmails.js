const express = require('express');
const router = express.Router();

const { sendEmail } = require("../controllers/controllersEmail")

router.post("/sendEmail", sendEmail)


module.exports = router;