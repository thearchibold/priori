module.exports = (sequelize, Sequelize) => {
    return sequelize.define("transaction", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        blockId: {
            type: Sequelize.INTEGER
        },
        transactionId: {
            type: Sequelize.STRING
        }
    }, {
        indexes:[
            {
                name: "idx_blockId",
                fields: ["blockId"]
            },
            {
                name: "idx_transactionId",
                fields: ["transactionId"]
            }
        ],
        timestamps : false
    });
};
