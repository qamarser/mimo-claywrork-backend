const About = require("../modules/About");

// get about page data 
const getAbout = async (req, res) =>{
    try{
        const about = await About.findOne();

        res.status(200).json(about);
    }catch(error){
        res.status(500).json({message:"Server Error" + error});
    }
};

// Create or Update About Page

const updateAbout = async (req, res) =>{
    try{
        const {title, description, image} = req.body;
        const about = await About.findOneAndUpdate({}, {title, description, image}, {new: true, upsert: true});
            res.json(about);
    }catch (error){
        res.status(500).json({message: "Server Error" + error});
    }
};

module.exports = {getAbout, updateAbout};
    //     if (about){
    //         about.title = title;
    //         about.description = description;
    //         about.imageUrl = imageUrl;
    // }else{
    //     about = new About({title, description, imageUrl});
    // }
    // await about.save();
//     // res.status(200).json({message: "About page updated successfully" + about});
// } catch (error){
//     res.status(500).json({message: "Server Error" + error});
// }

