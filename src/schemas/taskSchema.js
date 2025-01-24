const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Task {
    id: ID!
    judul: String!
    deskripsi: String
    tanggalTenggat: String
    status: String!
  }

  type Query {
    getTask(filterBerdasarkanStatus: String, filterBerdasarkanTanggalTenggat: String): [Task]
    getTaskDetail(id: ID!): Task
  }

  type Mutation {
    createTask(judul: String!, deskripsi: String, tanggalTenggat: String, status: String): Task
    memperbaruiTugas(id: ID!, judul: String, deskripsi: String, tanggalTenggat: String, status: String): Task
    hapusTugas(id: ID!): String
  }
`;

module.exports = typeDefs;
