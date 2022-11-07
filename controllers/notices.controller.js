const Notice = require('../models/notice.model');

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
    try { 
      const { title, text, date, foto, price, city, author } = req.body;
      const newNotice = new Notice({ title, text, date, foto, price, city, author });
      await newNotice.save();
      res.json({ message: 'OK' }); 
    } catch(err) {
      res.status(500).json({ message: err });
    }  
};

exports.putDoc = async (req, res) => {
    const { title, text, date, foto, price, city, author } = req.body;
    try {
      const dep = await Notice.findById(req.params.id);
      if(dep) {
        await Notice.updateOne({ _id: req.params.id }, { $set: { title, text, date, foto, price, city, author }});
        res.json(dep);
      }
      else res.status(404).json({ message: 'Not found...' });
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