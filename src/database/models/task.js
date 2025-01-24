const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Task = sequelize.define(
  'Task',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
    },
    tanggalTenggat: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('tertunda', 'sedang berlangsung', 'selesai'),
      defaultValue: 'tertunda',
    },
  },
  {
    timestamps: false, // Nonaktifkan createdAt dan updatedAt
    tableName: 'tasks', // Pastikan nama tabel sesuai
  }
);

module.exports = Task;
