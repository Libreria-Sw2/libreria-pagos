export default (sequelize, DataTypes) => {
  const GatewayUser = sequelize.define(
    'gateway_user',
    {
      gateway_user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'gateway_user',
      indexes: [],
    },
  );

  GatewayUser.associate = models => {
    // GatewayUser.hasMany(models.Keystore, {
    //   foreignKey: 'user_id',
    //   as: 'keystore',
    // });
  };

  GatewayUser.associate = models => {
    // GatewayUser.hasMany(models.PayChannel, {
    //   foreignKey: 'user_id',
    //   as: 'pay_channel',
    // });
  };

  // PayChannel.associate = models => {
  //   PayChannel.hasMany(models.PayChannelComponent, {
  //     foreignKey: 'pay_channel_id',
  //   });
  // };

  return GatewayUser;
};
