/**
 * Created by NathanBriscoe on 1/24/16.
 */
var pg = require('pg');
var express = require('express');
var router = express.Router();
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/PostgresWeekendSolo';


router.get('/grabUsers', function(request, response){

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

//router.get('/grabAddress/:id', function(request, response){
//
//    var dataInfoFromServer = [];
//    var userId = request.params.id;
//
//
//    pg.connect(connectionString, function(err, client){
//        if(err){
//            console.log('You got an error')
//        }
//        var query = client.query('SELECT * FROM addresses WHERE address_id = ' + userId);
//
//        query.on('row', function(row){
//            dataInfoFromServer.push(row)
//        });
//        query.on('end', function(){
//            client.end();
//            return response.json(dataInfoFromServer)
//        })
//    })
//
//});

//router.get('/grabOrder/:id', function(request, response){
//
//    var dataInfoFromServer = [];
//    var orderId = request.params.id;
//
//
//    pg.connect(connectionString, function(err, client){
//        if(err){
//            console.log('You got an error')
//        }
//        var query = client.query('SELECT * FROM addresses WHERE order_id = ' + orderId);
//
//        query.on('row', function(row){
//            dataInfoFromServer.push(row)
//        });
//        query.on('end', function(){
//            client.end();
//            return response.json(dataInfoFromServer)
//        })
//    })
//
//});

module.exports = router;