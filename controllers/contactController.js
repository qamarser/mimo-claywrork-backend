const Contact = require ("../modules/Contact");

// get all messages (Get Contact Page Content)
const getMessages = async (req, res) => {
    try{
        const message = await Contact.find();
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({message: "server Error" + error.message});
    }
};


// create a new contact message 
const createMessage = async (req, res) => {
    try { 
    const {name, email, message } = req.body;
    const newMessage = new Contact({ name, email, message});

    await newMessage.save();
    res.status(201).json(newMessage);
} catch (error){
    res.status(500).json({message: `Server ERROr ${error.message}`});
}
};


module.exports = {getMessages, createMessage};
