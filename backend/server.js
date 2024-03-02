
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

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error inside server")
        return res.json(data);
    })
})

app.get("/read/:id", (req, res) => {
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result);
    })
})


app.post("/student", (req, res) => {
    // const sql = "INSERT INTO student ('Name', 'Email') VALUES (?, ?)";
    const sql = "INSERT INTO student ('Name', 'Email') VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(data);
    })
})


app.post("/signup", (req, res) => {
    const sql = "INSERT INTO login ('name','email','password') VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    console.log("Values passed:", values);

    db.query(sql, values, (err, data) => {
        if(err){
            console.log("Error inside server:", err);
            return err;
        } 
        return res.json(data);
    })
})

app.post("/login", (req, res) => {
    const sql = "SELECT * FROM login WHERE 'email' = ? AND 'password' = ?";
    
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if (err){
            return res.json({Message: "Error inside server"});
        } 
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
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
        if(err) return res.json({Message: "Error inside server"});
        return res.json(data);
    })
})

app.delete("/student/:id", (req, res) => {
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(data);
    })
})


app.listen(4041, () => {
    console.log("Listening at port 4041");
})