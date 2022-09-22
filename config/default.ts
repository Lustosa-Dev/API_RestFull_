const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default{
  PORT: 3333,  
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.parnuvn.mongodb.net/?retryWrites=true&w=majority`,
  env: 'development'
}