const  express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./schema.js');
app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

app.listen(4000, (err) => {
    if(err){
        throw err;
    }else{
        console.log("Server is running at  4000");
    }
});
