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

    // endpoint "/convert/celcius/suhu" dengan method GET
    app.get("/convert/:celcius/:suhu", (req,res) => {
    
        let celcius = req.params.celcius 
        let suhu = req.params.suhu 
        let reamur = 4/5 * suhu
        let fahrenheit = (9/5 * suhu) + 32
        let kelvin = 273 + (suhu * 1)
    
        //membuat objek yang berisi data yang akan dijadikan response
        //response berisi data nama dan umur sesuai dengan nilai parameter
        let response = {
            celcius: suhu,
            result: {
                reamur: reamur,
                fahrenheit: fahrenheit,
                kelvin: kelvin
            }
        }
    
        //memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
        })


    // endpoint "/convert/reamur/suhu" dengan method GET
    app.get("/convert/:reamur/:suhu", (req,res) => {
    
        let reamur = req.params.reamur 
        let suhu = req.params.suhu 
        let celcius = 5/4 * suhu
        let fahrenheit = (9/4 * suhu) + 32
        let kelvin = (5/4 * suhu) + 273
    
        //membuat objek yang berisi data yang akan dijadikan response
        //response berisi data nama dan umur sesuai dengan nilai parameter
        let response = {
            reamur: suhu,
            result: {
                celcius: celcius,
                fahrenheit: fahrenheit,
                kelvin: kelvin
            }
        }
    
        //memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
        })

    // endpoint "/convert/kelvin/suhu" dengan method GET
    app.get("/convert/:kelvin/:suhu", (req,res) => {
    
        let kelvin = req.params.kelvin 
        let suhu = req.params.suhu 
        let celcius = (suhu * 1) - 273
        let fahrenheit = (suhu - 273.15) * 9/5 + 32
        let reamur = 4/5 * (suhu - 273.15)
    
        //membuat objek yang berisi data yang akan dijadikan response
        //response berisi data nama dan umur sesuai dengan nilai parameter
        let response = {
            reamur: suhu,
            result: {
                celcius: celcius,
                fahrenheit: fahrenheit,
                reamur: reamur
            }
        }
    
        //memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
        })

        // endpoint "/convert/fahrenheit/suhu" dengan method GET
        app.get("/convert/:fahrenheit/:suhu", (req,res) => {
    
            let fahrenheit = req.params.fahrenheit 
            let suhu = req.params.suhu 
            let celcius = 5/9 * (suhu - 32)
            let reamur = 4/9 * (suhu - 32)
            let kelvin = (suhu - 32) * 5/9 + 273
        
            //membuat objek yang berisi data yang akan dijadikan response
            //response berisi data nama dan umur sesuai dengan nilai parameter
            let response = {
                fahrenheit: suhu,
                result: {
                    celcius: celcius,
                    reamur: reamur,
                    kelvin: kelvin
                }
            }
        
            //memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
            })