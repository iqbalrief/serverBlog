# Blog API

REST API sederhana untuk aplikasi blog dengan fitur autentikasi user (register & login) dan manajemen post (CRUD).

## Teknologi

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL (database)
- JWT (JSON Web Token) untuk autentikasi
- bcrypt untuk hashing password
- Jest & Supertest untuk unit & integration testing

## Fitur

- Registrasi user baru
- Login dan mendapatkan token JWT
- Membuat, membaca, memperbarui, dan menghapus post (CRUD)
- Middleware autentikasi JWT untuk proteksi endpoint post
- Unit test untuk endpoint auth dan post

## Instalasi

 Cara Install & Jalankan
1. Clone Repository
Clone repository ini ke komputer lokal Anda dengan menggunakan perintah berikut:


git clone 
cd nama-project
2. Install Dependencies
npm install
Setelah berhasil meng-clone project, install semua dependency yang dibutuhkan menggunakan npm:

3. Setup Environment File (.env)
Buat file .env di root folder proyek Anda dan isi dengan konfigurasi berikut:


PORT=PORT
JWT_SECRETjwt_secret
DB_USERNAME=username db anda
DB_PASSWORD=password_anda
DB_HOST=localhost
DB_PORT=port anda
DB_DIALECT=database

## env test
PORT=PORT
JWT_SECRETjwt_secret
DBTEST_USERNAME=username db anda
DBTEST_PASSWORD=password_anda
DBTEST_NAME=nama_database
DBTEST_HOST=localhost



4. Jalankan Database

Jika Anda belum membuat tabel-tabel di database,
npx sequelize-cli db:create atau npm run create
npx sequelize-cli db:migrate atau npm run migrate
npx sequelize: db:seed:all atau npm run seed

5. Jalankan Proyek
Jalankan aplikasi menggunakan perintah berikut:
pasang nodemon script start di package.json

npm start

## API Endpoints

### Auth
- `POST /users/register`
- `POST /users/login`

### Posts (require JWT in Authorization header)
- `POST /posts`
- `GET /posts`
- `GET /posts/:id`
- `PUT /posts/:id`
- `DELETE /posts/:id`
