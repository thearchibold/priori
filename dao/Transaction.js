const db = require("./db")

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("transaction", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        blockId: {
            type: Sequelize.INTEGER,
        },
        blockHash: {
            type: Sequelize.STRING
        },
        blockNumber: {
            type: Sequelize.INTEGER
        },
        chainId: {
            type: Sequelize.STRING
        },
        from: {
            type: Sequelize.STRING
        },
        gas: {
            type: Sequelize.INTEGER
        },
        gasPrice: {
            type: Sequelize.STRING
        },
        hash: {
            type: Sequelize.STRING
        },
        input: {
            type: Sequelize.TEXT('long')
        },
        maxFeePerGas: {
            type: Sequelize.STRING
        },
        maxPriorityFeePerGas: {
            type: Sequelize.STRING
        },
        nonce: {
            type: Sequelize.INTEGER
        },
        r: {
            type: Sequelize.STRING
        },
        s: {
            type: Sequelize.STRING
        },
        to: {
            type: Sequelize.STRING
        },
        transactionIndex: {
            type: Sequelize.INTEGER
        },
    }, {
        indexes: [
            {
                name: "idx_blockNumber",
                fields: ["blockNumber"]
            },
            {
                name: "idx_hash",
                fields: ["hash"]
            }
        ],
        timestamps: false
    })
};
