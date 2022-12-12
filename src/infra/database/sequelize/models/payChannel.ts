export default (sequelize, DataTypes) => {
  const PayChannel = sequelize.define(
    'pay_channel',
    {
      pay_channel_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      code: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      distinctive_image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      position: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      endpoint: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      external_code: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // user_id: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      //   references: {
      //     model: 'gateway_user',
      //     key: 'gateway_user_id',
      //   },
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade',
      // },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'pay_channel',
      indexes: [],
    },
  );
  PayChannel.associate = models => {

    // PayChannel.belongsTo(models.GatewayUser, {
    //   foreignKey: 'user_id',
    //   targetKey: 'gateway_user_id',
    //   // as: 'GatewayUser',
    // });
  };

  return PayChannel;
};
