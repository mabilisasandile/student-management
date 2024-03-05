
const express = require("express");
const cors = require("cors")
const mysql = require("mysql")

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

db.connect(err => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error inside server")
        return res.json(data);
    })
})

app.get("/read/:id", (req, res) => {
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" })
        return res.json(result);
    })
})


app.post("/student", (req, res) => {
    const { name, email } = req.body;
    console.log("Values passed:", name + ', ' + email);
    db.query('INSERT INTO student (Name, Email) VALUES (?, ?)', [name, email], (err, data) => {
        if (err) {
            console.log("Error inside server:", err);
            res.status(500).json({ Message: "Error inside server" });
            return;
        }
        res.status(201).json(data);
    });
})


app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    console.log("Values passed:", name + ', ' + email + ', ' + password);
    db.query('INSERT INTO login (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
        if (err) {
            console.log("Error inside server:", err);
            res.status(500).json({ message: 'Error registering user' });
            return;
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
})


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log("Values passed:", email + ', ' + password);

    db.query('SELECT * FROM login WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            console.error('Error logging in: ', err);
            res.status(500).json({ message: 'Error logging in' });
            return;
        }
        if (result.length === 0) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
        res.status(200).json({ message: 'Login successful' });
    })
})

app.put("/update/:id", (req, res) => {
    const sql = "UPDATE student SET Name = ?, Email = ? WHERE ID = ?";
    // const sql = "update student set `Name` = ?, `Email` = ? where ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(data);
    })
})

app.delete("/student/:id", (req, res) => {
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(data);
    })
})


app.listen(4041, () => {
    console.log("Listening at port 4041");
})