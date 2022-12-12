export default (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'transaction',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      payment_id: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      pay_channel_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'pay_channel',
          key: 'pay_channel_id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      payment_data: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      qr_id: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'transaction',
      indexes: [],
    },
  );

  Transaction.associate = models => {
    Transaction.belongsTo(models.PayChannel, {
      foreignKey: 'pay_channel_id',
      targetKey: 'pay_channel_id',
    });
  };

  return Transaction;
};
