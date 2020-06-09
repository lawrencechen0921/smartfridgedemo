const express = require('express');
const exphbs  = require('express-handlebars');
// const bodyParser = require('body-parser');
const sortJsonArray = require('sort-json-array');

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10'
});

const app = express();
app.engine('handlebars', exphbs({
    helpers: require('./handlebars-helpers') //only need this
  }));
app.set('view engine', 'handlebars');
app.use('/',express.static('public/'));

function sort(){

}

function getDB(params){
    return new Promise((resolve,reject)=>{
        documentClient.scan(params, function(err, data) {
            if (err) console.log(err);
            else {
                if (params.TableName=='fridge-people'){
                    var sortedData = sortJsonArray(data.Items, "Date", 'des');
                    resolve(sortedData);
                }else{
                    var sortedData = sortJsonArray(data.Items, "DateOut", 'des');
                    // console.log(sortedData);
                    resolve(sortedData);
                }
            }
        });
    });
}


app.get('/', async function (req, res) {
    let Out = await getDB({
        TableName:'fridge-object',
        ScanFilter: {
            'DateOut':{
                ComparisonOperator: "NOT_NULL"
            }
        }
    });
    let In = await getDB({
        TableName:'fridge-object',
        ScanFilter: {
            'DateOut':{
                ComparisonOperator: "NULL"
            }
        }
    });
    let people = await getDB({
        TableName:'fridge-people',
        ScanFilter: {
            'Url':{
                ComparisonOperator: "NOT_NULL"
            }
        }
    });
    res.render("page",{
        out: Out,
        in: In,
        people: people
    })

});

app.set('port', (80));
app.listen(app.get('port'),() => {
    console.log("smartfridge");
});