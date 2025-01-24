const request = require("supertest");
const app = require("../src/app");

let server;

beforeAll((done) => {
  server = app.listen(4001, () => {
    console.log("Server berjalan untuk pengujian di port 4001");
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log("Server untuk pengujian ditutup");
    done();
  });
});

describe("E2E Testing for Task Management API", () => {
  let taskId; // ID tugas yang dibuat untuk digunakan dalam pengujian
  console.log("Task ID:", taskId);

  test("Should create a new task", async () => {
    const response = await request(app)
      .post("/graphql")
      .send({
        query: `
          mutation {
            createTask(
              judul: "Belajar Jest",
              deskripsi: "Pelajari cara menggunakan Jest untuk pengujian",
              tanggalTenggat: "2025-01-31"
            ) {
              id
              judul
              status
            }
          }
        `,
      });
    console.log("Create Task Response:", response.body); // Debug respons API

    taskId = response.body.data?.createTask?.id; // Pastikan `taskId` diambil dengan benar
    expect(response.status).toBe(200);
    expect(response.body.data.createTask).toBeDefined();
    expect(response.body.data.createTask.judul).toBe("Belajar Jest");
    taskId = response.body.data.createTask.id; // Simpan ID tugas
  });

  test("Should get all tasks", async () => {
   
    const response = await request(app)
      .post("/graphql")
      .send({
        query: `
          query {
            getTask {
              id
              judul
              deskripsi
              tanggalTenggat
              status
            }
          }
        `,
      });
      console.log('Get Task Detail Response:', response.body); 
    expect(response.status).toBe(200);
    expect(response.body.data.getTask).toBeInstanceOf(Array);
    expect(response.body.data.getTask.length).toBeGreaterThan(0);
  });

  
});
