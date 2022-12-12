export default (sequelize, DataTypes) => {
  const KeyStore = sequelize.define(
    'keystore',
    {
      keystore_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      primary_key: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      secondary_key: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      // user_id: {
      //   type: DataTypes.UUID,
      //   allowNull: true,
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
      tableName: 'keystore',
      indexes: [],
    },
  );

  KeyStore.associate = models => {
    KeyStore.belongsTo(models.GatewayUser, {
      foreignKey: 'user_id',
      targetKey: 'gateway_user_id',
      as: 'GatewayUser',
    });
  };

  return KeyStore;
};
