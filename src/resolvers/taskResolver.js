const { Task } = require('../database');

const resolvers = {
  Query: {
    getTask: async (_, { filterBerdasarkanStatus, filterBerdasarkanTanggalTenggat }) => {
      const where = {};

      if (filterBerdasarkanStatus) {
        where.status = filterBerdasarkanStatus;
      }

      if (filterBerdasarkanTanggalTenggat) {
        where.tanggalTenggat = new Date(filterBerdasarkanTanggalTenggat); // Konversi string ke format tanggal
      }

      return Task.findAll({
        where,
        attributes: ['id', 'judul', 'deskripsi', 'tanggalTenggat', 'status'], // Kolom yang diminta
      });
    },
  },
  
  Mutation: {
    createTask: async (_, { judul, deskripsi, tanggalTenggat, status }) => {
      return Task.create({ judul, deskripsi, tanggalTenggat, status: status || 'tertunda' });
    },
    memperbaruiTugas: async (_, { id, ...taskInput }) => {
      const task = await Task.findByPk(id);
      if (!task) throw new Error('Task not found');
      return task.update(taskInput);
    },
    hapusTugas: async (_, { id }) => {
      const task = await Task.findByPk(id);
      if (!task) throw new Error('Task not found');
      await task.destroy();
      return `Task with ID ${id} deleted successfully.`;
    },
  },
};

module.exports = resolvers;
