const express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
const rotas = require('./src/routes/index')
const app = express();
app.use(cors());
app.use(express.json());
const multer = require('multer')


const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        return cb(null, "./caminhos/Images")
    },
    filename: function (req, file, cb) {
        return cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage })

app.post('/projeto/upload', upload.single('file'), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    res.send('funcionou')
})

app.use('/projeto', rotas)

const porta = 5433;

app.listen(porta, () => {
    console.log('rodando...')
})
