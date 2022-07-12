const Web3 = require('web3')
const DaoService = require("../services/DaoService")

const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/5b53c456464f4ef384af20b4117bf01d")
const web3 = new Web3(provider)




module.exports = {
    saveTransactions : async function (clear = false, latestNBlock = 10) {
        if(clear){
            console.log("OPTION TO CLEAR EXISTING DATA")
            await DaoService.deleteAll();
        }
        console.log("Fetching transactions")
        const latestBlock = await web3.eth.getBlockNumber()
        console.log("LATEST BLOCK ==> ", latestBlock);
        // check if we have the latest block in our DB
        // if YES, there are no new blocks, if no then we have new blocks
        if(await DaoService.blockExists(latestBlock)) return

        for (let i = 0; i < latestNBlock; i++) {
            await web3.eth.getBlock(latestBlock - i,    async (error, block) => {
                console.log(block)
                const blockExists = await DaoService.blockExists(block.number)
                if(!blockExists){
                    const blockId = await DaoService.saveBlock(block)
                    block.transactions.map(transactionHash => {
                        web3.eth.getTransaction(transactionHash, (error, transaction) => {
                            transaction = {
                                ...transaction,
                                blockId
                            }
                            DaoService.saveTransaction(transaction)
                        })
                    })
                }
            })
        }
    },
    getBlock: async function(blockNumber){
        return await DaoService.blockByNumber(blockNumber)
    }
}
