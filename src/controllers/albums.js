const getDb = require('../services/db');


exports.createAlbum = async (req, res) => {
    const db = await getDb();
    const { artistId } = req.params;
    const { name, year } = req.body;
  
    try{
      await db.query('INSERT INTO Album (artistId, name, year) VALUES (?, ?, ?)', [
          artistId,
          name,
          year,
      ]);
      res.sendStatus(201);
    } catch (err) {
        res.sendStatus(500).json(err);
    }
    
      db.close();
  };