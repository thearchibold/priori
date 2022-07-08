const Web3 = require('web3')
const BlocksController = require("../services/DaoService")

const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/5b53c456464f4ef384af20b4117bf01d")
const web3 = new Web3(provider)


async function SaveTransactions(clear = false, latestNBlock = 10) {
    if(clear){
        console.log("OPTION TO CLEAR EXISTING DATA")
        await BlocksController.deleteAll();
    }
    console.log("Fetching transactions")
    const latestBlock = await web3.eth.getBlockNumber()
    console.log("LATEST BLOCK ==> ", latestBlock)
    for (let i = 0; i < latestNBlock; i++) {
        await web3.eth.getBlock(latestBlock - i, async (error, block) => {
            const blockId = await BlocksController.saveBlock(block)
            if (blockId) {
                const transactions = []
                block.transactions.map(transaction => transactions.push({
                    blockId: blockId,
                    transactionId:transaction
                }))
                await BlocksController.saveTransactions(transactions)
            }
        })
    }

}

module.exports = SaveTransactions
