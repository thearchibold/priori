const express = require('express');
const router = express.Router();
const SaveTransaction = require('../controllers/web3Controller')

router.post('/', async function(req, res, next) {
  let {clear, latestNBlock} = req.body
  try{
    await SaveTransaction(clear, latestNBlock)
  }catch (e){
    res.status(500).json({message:"Error"})
  }
  res.status(200).json({message:"Saved"})
});

module.exports = router;
