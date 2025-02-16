const Contact = require("../modules/Contact");

// get all messages (Get Contact Page Content)
const gettext = async (req, res) => {
    try {
        const text = await Contact.findOne();
        res.status(200).json(text);
    } catch (error) {
        res.status(500).json({ message: "server Error " + error });
    }
};

// create a new contact message
const createtext = async (req, res) => {
    try {
        const { title, text1, text2 , text3} = req.body;
        const newtext = new Contact({ title, text1, text2, text3 });

        await newtext.save();
        res.status(201).json(newtext);
    } catch (error) {
        res.status(500).json({ message: `Server ERROr ${error}` });
    }
};

module.exports = { gettext, createtext };
