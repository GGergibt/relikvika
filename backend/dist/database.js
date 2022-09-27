"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
//
const pool = new pg_1.Pool({
    user: 'gosha',
    host: 'localhost',
    database: 'relikvika',
    password: 'ggrttr',
    port: 5432,
});
console.log('ok');
pool.query('select * from users', (error, results) => {
    if (error) {
        throw error;
    }
    console.log(results.rows);
    console.log('ok');
});
