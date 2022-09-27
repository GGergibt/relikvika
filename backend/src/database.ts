import {Pool} from 'pg'
//
const pool = new Pool({
  user: 'gosha',
  host: 'localhost',
  database: 'relikvika',
  password: 'ggrttr',
  port: 5432,
})

pool.query('select * from users', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
  })
