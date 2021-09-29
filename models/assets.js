module.exports = (sequelize,DataTypes) =>{
    const assets = sequelize.define('assets',{
        input:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        output:{
            type:DataTypes.STRING(10),
            allowNull:false,
        },
        regDate:{
            type:DataTypes.DATE,
            allowNull:false,
        }
    },{
        timestamps:false,
        underscord:false,
        paranoid:false,
        modelName:'assets',
        tableName:'assets',
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci',
    })

    return assets
}