module.exports = function(sequelize, DataTypes) {
    var Equity = sequelize.define("Equity", {
        equitySymbol: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        }
    });

    Equity.associate = (models) => {

        Equity.belongsTo(models.indices, {
            foreignKey: {
                allowNull: false
            }
        });

        Equity.associate = (models) => {
            Equity.hasMany(models.equityvalues);
        }
    };
    return Equity;
}
