const db = require("../dao/db")

module.exports = {
    saveBlock: async (block) => {
        try {
            const data = await db.block.create(block)
            return data?.dataValues?.id
        } catch (e) {
            return null
        }
    },
    blockExists: async (blockNumber) => {
        try {
            return await db.block.count({where: {number: blockNumber}}) > 0
        } catch (e) {
            return false
        }
    },
    saveTransaction: async (transaction) => {
        try {
            const data = await db.transaction.create(transaction)
        } catch (e) {
            console.log("error saving transactions ", e)
        }
    },
    deleteAll: async () => {
        try {
            await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
            await db.block.destroy({where: {}})
            await db.transaction.destroy({where: {}});
            await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
        } catch (e) {
            console.log(e)
            throw e
        }
    },
    blockByNumber: async (blockNumber)=>{
        try{
            const blocks = await db.block.findAll({
                include:[{
                    model: db.transaction,
                    as: "transactions",
                }],
                where:{number: blockNumber}
            })
            return blocks
        }catch (e){
            throw e
        }
    }
}
