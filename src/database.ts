import dotenv from 'dotenv'
import { Pool } from 'pg'

// Initialise the environment variables
dotenv.config()

const{
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
} = process.env

// Think of Pool as a set of connections to the db
const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB, 
    user: POSTGRES_USER, 
    password: POSTGRES_PASSWORD, 
})

export default client;