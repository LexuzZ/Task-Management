# Task Management API  

Task Management API adalah layanan berbasis GraphQL yang memungkinkan pengguna membuat, membaca, memperbarui, dan menghapus tugas.  

## Fitur Utama  
- Membuat tugas baru dengan judul, deskripsi, tanggal jatuh tempo, dan status (tertunda, sedang berlanngsung, selesai).  
- Mengambil daftar tugas dengan filter status dan tanggal jatuh tempo.  
- Mendapatkan detail tugas berdasarkan ID.  
- Memperbarui tugas.  
- Menghapus tugas.  

## Teknologi yang Digunakan  
- **Node.js**  
- **Express.js**  
- **Apollo Server (GraphQL)**  
- **Sequelize**  
- **MySQL**  
- **Joi**  

## Cara Menjalankan Proyek  
- npm install untuk menginstall semua package project Task Management
- start web server XAMPP (Apache & MySQL)
- jalankan node src/app.js di terminal 
- endpoint API, permintaan dan response

- **QUERY GET ALL TASK**
 query {
  getTask(filterBerdasarkanStatus: "tertunda", filterBerdasarkanTanggalTenggat: "2025-01-31") {
    id
    judul
    deskripsi
    tanggalTenggat
    status
  }
}

- **RESPONSE GET ALL TASK**
    {
  "data": {
    "getTask": [
      {
        "id": "9",
        "judul": "Membuat Manajemen Tugas dengan GraphQL",
        "deskripsi": "Pembuatan Project menggunakan node js, express.js, mySQL, dan GraphQL",
        "tanggalTenggat": "2025-01-27",
        "status": "tertunda"
      }
    ]
  }
}

- **QUERY GET DETAIL TASK**
query {
  getTaskDetail(id: "9da390c1-41ae-4e9c-958d-df2ac424721c") {
    id
    judul
    deskripsi
    tanggalTenggat
    status
  }
}

- **RESPONSE GET DETAIL TASK**
  {
  "data": {
    "getTaskDetail": {
      "id": "9",
      "judul": "Membuat Manajemen Tugas dengan GraphQL",
      "deskripsi": "Pembuatan Project menggunakan node js, express.js, mySQL, dan GraphQL",
      "tanggalTenggat": "2025-01-27",
      "status": "tertunda"
    }
  }
}

- **MUTATION CREATE TASK**
mutation {
  createTask(judul: "Membuat Manajemen Tugas dengan GraphQL", deskripsi: "Pembuatan Project menggunakan node js, express.js, mySQL, dan GraphQL", tanggalTenggat: "2025-01-27") {
    id
    judul
    status
  }
}
- **RESPONSE CREATE TASK**
 {
  "data": {
    "createTask": {
      "id": "9da390c1-41ae-4e9c-958d-df2ac424721c",
      "judul": "Membuat Manajemen Tugas dengan GraphQL",
      "status": "tertunda"
    }
  }
}

- **MUTATION UPDATE TASK**
 mutation {
  memperbaruiTugas(id: "1", judul: "Update Judul", status: "sedang berlangsung") {
    id
    judul
    status
  }
}

- **RESPONSE UPDATE TASK**
{
  "data": {
    "memperbaruiTugas": {
      "id": "1",
      "judul": "Update Judul",
      "status": "sedang berlangsung"
    }
  }
}

- **MUTATION DELETE TASK**
mutation {
  hapusTugas(id: "9da390c1-41ae-4e9c-958d-df2ac424721c")
}

- **RESPONSE DELETE TASK**
{
  "data": {
    "hapusTugas": "Task with ID 9da390c1-41ae-4e9c-958d-df2ac424721c deleted successfully."
  }
}

- **env**
- DB_HOST=localhost
- DB_USER=root
- DB_PASSWORD=
- DB_NAME=task_management_db
- DB_PORT=3306

