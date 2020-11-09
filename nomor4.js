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


app.post("/bmi", (req,res) => {
  //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
  let tinggi = Number(req.body.tinggi) 
  let berat = Number(req.body.berat) 
  let bmi = berat / (tinggi ** 2)
  if(bmi > 30.0){
    message = ("Kegemukan(Obesitas)")
}else if(bmi <= 29.9 && bmi > 25.0){
    message = ("Kelebihan berat badan")
}else if(bmi <=24.9 && bmi > 18.5){
    message =("Normal(ideal)")
}else{
    message = ("Kekurangan berat badan")
}
  
  //membuat objek ynag berisi data yang akan dijadikan response
  let response = {
      tinggi: tinggi,
      berat: berat,
      bmi: bmi,
      status: message 
  }

  //memberikan response dengan format JSON yang berisi objek di atas
  res.json(response)
})