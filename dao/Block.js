const db = require("./db")

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("block", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        baseFeePerGas: {
            type: Sequelize.BIGINT
        },
        difficulty: {
            type: Sequelize.STRING
        },
        extraData: {
            type: Sequelize.STRING
        },
        gasLimit: {
            type: Sequelize.BIGINT
        },
        gasUsed: {
            type: Sequelize.BIGINT
        },
        hash: {
            type: Sequelize.STRING
        },
        logsBloom:{
            type: Sequelize.TEXT('long')
        },
        miner:{
            type: Sequelize.STRING
        },
        mixHash:{
            type: Sequelize.STRING
        },
        nonce:{
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.BIGINT
        },
        parentHash:{
            type: Sequelize.STRING
        },
        receiptsRoot:{
            type: Sequelize.STRING
        },
        sha3Uncles:{
            type: Sequelize.STRING
        },
        size:{
            type: Sequelize.INTEGER
        },
        stateRoot:{
            type: Sequelize.STRING
        },
        timestamp: {
            type: Sequelize.INTEGER
        },
        totalDifficulty: {
            type: Sequelize.STRING
        },
        transactionsRoot: {
            type: Sequelize.STRING
        },
        uncles:{
            type:Sequelize.TEXT('long'),
            get() {
                return this.getDataValue('uncles').split(',')
            },
            set(val) {
                this.setDataValue('uncles',val.join(','));
            },
        }


    }, {
        indexes: [
            {
                name: "idx_number",
                fields: ["number"]
            },
            {
                name: "idx_hash",
                fields: ["hash"]
            }
        ],
        timestamps: false
    });
};
