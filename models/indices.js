module.exports = function(sequelize, DataTypes) {
    var Indices = sequelize.define("Indices", {
        marketSymbol: {
            type: DataTypes.STRING,
            allowNull: false,
            valudate: {
                len: [1, 10]
            }
        }
    });

    Indices.associate = (models) => {
        Indices.hasMany(models.Equity);
    };
    return Indices;
}
