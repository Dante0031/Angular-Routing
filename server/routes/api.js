/**
 * Created by NathanBriscoe on 1/24/16.
 */
var pg = require('pg');
var express = require('express');
var router = express.Router();
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/PostgresWeekendSolo';


router.get('/grabUsers', function(request, response){
    console.log('Are we getting a grabUsers?');

    var dataInfoFromServer = [];
    console.log('This is working');


    pg.connect(connectionString, function(err, client){
        if(err){
            console.log('You got an error')
        }
        var query = client.query('SELECT * FROM users');

        query.on('row', function(row){
            dataInfoFromServer.push(row)
        });
        query.on('end', function(){
            client.end();
            return response.json(dataInfoFromServer)
        })
    })

});

//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
//grab address by id
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]

router.get('/grabAddress/:id', function(request, response){

    //console.log('hurray, we made it into the grabAddress router');
    var dataInfoFromServer = [];
    //console.log(dataInfoFromServer);//console log's '[]'
    var userId = request.params.id;
    //console.log('userId console.log: are we getting userId?', userId);//console log's '1'
    pg.connect(connectionString, function(err, client){
        if(err){
            console.log('You got an error')
        }
        var query = client.query('SELECT * FROM addresses WHERE user_id = ' + [userId]);

        query.on('row', function(row){
            dataInfoFromServer.push(row);
        });
        query.on('end', function(){
            client.end();
            //console.log(dataInfoFromServer);
            return response.json(dataInfoFromServer);
        })
    });
});

//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
//grab order by id
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]

router.get('/grabOrder/:id', function(request, response){
console.log("are we getting to grabOrder?");
    var dataInfoFromServer = [];
    var orderId = request.params.id;

    pg.connect(connectionString, function(err, client){
        if(err){
            console.log('You got an error')
        }
        var query = client.query('SELECT * FROM orders WHERE order_id = ' + [orderId]);

        query.on('row', function(row){
            dataInfoFromServer.push(row)
        });
        query.on('end', function(){
            client.end();
            //console.log(dataInfoFromServer);
            return response.json(dataInfoFromServer)
        })
    })

});

module.exports = router;