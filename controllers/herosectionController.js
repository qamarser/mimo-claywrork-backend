const Herosection = require ("../modules/herosection");

// get image
const getImage = async(req, res) => {
    try {
        const image = await Herosection.findOne();
        res.status(200).json(image);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
    };

    // update image
    const updateImage = async (req, res) => {
        try{
            const{imageUrl} = req.body;
            const image = await Herosection.findOneAndUpdate({}, { imageUrl},
                {new: true, upsert: true} );
                res.status(200).json(image);
        }catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    module.exports = {getImage, updateImage};