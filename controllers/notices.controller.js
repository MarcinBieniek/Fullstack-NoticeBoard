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
    const { title, text, date, price, city, author } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';

    if (req.file && ['image/png', 'image/jpeg', 'image/gif'].includes(fileType)) {
        try { 
            const newNotice = new Notice({
                title,
                text,
                date,
                foto: req.file.filename,
                price,
                city,
                author
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
    const { title, text, date, price, city, author } = req.body;
    
    try {
        const notice = await Notice.findById(req.params.id);
        if (!notice) return res.status(404).json({ message: 'Advert not found...'});
        notice.title = title;
        notice.text = text;
        notice.date = date;
        notice.price = price;
        notice.city = city;
        notice.author = author;
        if (req.file) {
            notice.image = req.file.filename;
            //fs.unlinkSync(req.file.path);
        }
        await notice.save();
        res.json({ message: 'Advert sucessfully updated!'})
    } catch (err) {
      req.status(500).json({ message: err.message });
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

// to do - GET /api/ads/search/:searchPhrase – który zwróci ogłoszenia pasujące tytułem do podanej frazy

exports.getSearchPhrase = async (req, res) => {
    try {
      const searchObject = req.params.searchPhrase;
      const notices = await Notice.find({ 
        title: {$regex: searchObject, $options: 'i' }});
      if (notices.length > 0) return res.json(notices);
      return res.status(404).json({ message: 'Not found' });
    }
    catch(err) {
      return res.status(500).json({ message: err });
    }
};