module.exports = (sequelize, Sequelize) => {
    const Block = sequelize.define("block", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        number: {
            type: Sequelize.BIGINT
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
        hash: {
            type: Sequelize.STRING
        },
        transactionsRoot: {
            type: Sequelize.STRING
        },
        timestamp: {
            type: Sequelize.INTEGER
        }
    }, { indexes:[
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

    return Block;
};
