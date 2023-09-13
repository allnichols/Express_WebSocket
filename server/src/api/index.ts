import app from "../config/express";
import pool from "../config/db";
const port = process.env.PORT || 8000;


app.get("/", (req, res) => {
    pool.query("SELECT * FROM users", (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result.rows);
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})