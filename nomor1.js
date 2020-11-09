const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ektrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// bangun ruang tabung
app.post("/tabung", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) 
    let tinggi = Number(req.body.tinggi) 
    let volume = 3.14 * (jarijari**2) * tinggi
    let luas_permukaan = 2 * 3.14 * jarijari * (jarijari + tinggi)

    //membuat objek ynag berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// bangun ruang kerucut
app.post("/kerucut", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) 
    let tinggi = Number(req.body.tinggi) 
    let volume = 1/3 * 3.14 * (jarijari**2) * tinggi
    let luas_permukaan = 3.14 * jarijari * (jarijari + tinggi)

    //membuat objek ynag berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// bangun ruang bola
app.post("/bola", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari)
    let volume = 4/3 * 3.14 * (jarijari**3)
    let luas_permukaan = 4 * 3.14 * (jarijari**2)

    //membuat objek ynag berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// bangun ruang balok
app.post("/balok", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luas_permukaan = (2 * panjang * lebar) + (2 * panjang * tinggi) + (2 * tinggi * lebar)
    let volume = panjang * lebar * tinggi

    //membuat objek ynag berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})