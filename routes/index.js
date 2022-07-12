const express = require('express');
const router = express.Router();
const Web3Controller = require('../controllers/web3Controller')

router.post('/blocks', async function(req, res, next) {
  let {clear, latestNBlock} = req.body
  try{
    await Web3Controller.saveTransactions(clear, latestNBlock)
  }catch (e){
    return res.status(500).json({message:"Error", error:e})
  }
  return res.status(200).json({message:"Saved"})
});

router.get("/block/:blockNumber", async function(req, res, next){
  let {blockNumber} = req.params
  if(!blockNumber){
    return res.status(400).json({message: "Block number missing"})
  }
  try {
    const blocks = await Web3Controller.getBlock(blockNumber)
    return res.status(200).json({data: blocks})
  }catch (e) {
    return res.status(500).json({error: e})
  }

})

module.exports = router;
