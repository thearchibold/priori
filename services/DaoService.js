const db = require("../dao/db")
const Block = require("../dao/Block")

module.exports = {
    saveBlock: async (block) => {
        try {
            const data = await db.blocks.create(block)
            return data?.dataValues?.id
        } catch (e) {
            return null
        }
    },
    updateBlock:async (blockId, block) => {
        try{
            const updateData = await db.blocks.update()
        }catch (e) {

        }
    },
    saveTransactions: async (transactions) => {
        try {
            const data = await db.transaction.bulkCreate(transactions)
            console.log(data)
        } catch (e) {
            console.log("error saving transactions ", e)
        }
    },
    deleteAll: async () =>{
        await db.blocks.destroy({truncate: true})
        await db.transaction.destroy({truncate: true})
    }
}
