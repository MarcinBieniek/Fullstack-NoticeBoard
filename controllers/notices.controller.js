const Notice = require('../models/notice.model');
const getImageFileType = require('../utils/getImageFileType');
const fs = require('fs');

exports.getAll = async (req, res) => {
    try {
      res.json(await Notice.find({}));
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
    try {
      const dep = await Notice.findById(req.params.id);
      if(!dep) res.status(404).json({ message: 'Not found' });
      else res.json(dep);
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
};

exports.postDoc = async (req, res) => {
    const { title, description, location, price, bedrooms, bathrooms, rooms, meters, user, date, map } = req.body;

    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';

    if (req.file && ['image/png', 'image/jpeg', 'image/gif'].includes(fileType)) {
        try { 
            const newNotice = new Notice({
                title,
                description,
                location,
                price,
                bedrooms,
                bathrooms,
                rooms,
                meters,
                photo: req.file.filename,
                user,
                date,
                map
            })
            await newNotice.save();
            res.status(201).send({ message: 'Notice created' });
        } catch(err) {
          res.status(500).json({ message: err });
        }  

    } else {
        fs.unlinkSync(req.file.path);
        res
          .status(400)
          .send({ message: 'Bad request'})
    }
};

exports.putDoc = async (req, res) => {
    const { title, description, location, price, bedrooms, bathrooms, rooms, meters, user, date, map } = req.body;
    
    console.log('reqbody is ', req.body)

    try {
        const notice = await Notice.findById(req.params.id);

        console.log('notice is', notice)
        
        if (notice) {
            notice.title = title;
            notice.description = description;
            notice.location = location;
            notice.price = price;
            notice.bedrooms = bedrooms;
            notice.bathrooms = bathrooms;
            notice.rooms = rooms;
            notice.meters = meters;
            notice.user = user;
            notice.map = map;
            if (req.file) {
              notice.photo = req.file.filename;
            }
            const updatedNotice = await notice.save();
            res.json(updatedNotice);
        } else 
        res.status(404).json({ message: 'Not found...' });
      }
      catch(err) {
        res.status(500).json({ message: err });
      }
};

exports.deleteDoc = async (req, res) => {
    try {
      const dep = await Notice.findById(req.params.id);
      if(dep) {
        await Notice.deleteOne({ _id: req.params.id });
        res.json(dep);
      }
      else res.status(404).json({ message: 'Not found...' });
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
};

exports.getSearchPhrase = async (req, res) => {
    try {
      const searchElement = await Notice.find({ $text: { $search: req.params.searchPhrase } });
      if(!searchElement) res.status(404).json({ message: 'Not found' });
      else res.json(searchElement);
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
};