var pgp=require('pg-promise')(/*options*/);
var cn = {
host: 'localhost',
port: 5432,
database: 'dvdrental',
user: 'postgres',
password: 'abc'
};

var db=pgp(cn)


// db.one(`SELECT title,replacement_cost FROM film WHERE film_id=234`)
// .then(result=>{
//     console.log(result.title,result.replacement_cost)//printing the result
// })
// .catch(error=>{
//     console.log(error)//printing the error
// });


// db.one(`SELECT first_name||' '||last_name as full_name FROM customer WHERE customer_id=30`)
// .then(result=>{
//     console.log(result.full_name)//printing the result
// })
// .catch(error=>{
//     console.log(error)//printing the error
// });



// db.one(`SELECT SUM(amount) FROM payment `)
// .then(result=>{
//     console.log(result.sum)//printing the result
// })
// .catch(error=>{
//     console.log(error)//printing the error
// });



// db.one(`SELECT first_name, last_name FROM customer
// WHERE customer_id = (SELECT customer_id FROM payment GROUP BY customer_id
//                     ORDER BY SUM(amount) DESC LIMIT 1)`)
// .then(result=>{
//     console.log(result.first_name,result.last_name)//printing the result
// })
// .catch(error=>{
//     console.log(error)//printing the error
// });



// for (var i=3;i<8;i++){
// db.one(`select first_name,last_name from customer
// where customer_id in (${i})`)
// .then(result=>{
//     console.log(result.first_name,result.last_name)//printing the result
// })
// .catch(error=>{
//     console.log(error)//printing the error
// });
// }



// db.any(`select first_name,last_name from customer
//     where customer_id in (3,4,5,6,7)`)
//     .then(result=>{
//         console.log(result)//printing the result
//     })
//     .catch(error=>{
//         console.log(error)//printing the error
//     });




    // db.any(`select first_name,last_name from customer
    // where customer_id in (3,4,5,6,7)`)
    // .then(result=>{
    //     console.log(result[0].first_name,result[0].last_name)//printing the result
    // })
    // .catch(error=>{
    //     console.log(error)//printing the error
    // });
    
    
    
    // db.any(`select first_name,last_name from customer
    // where customer_id in (3,4,5,6,7,45,32,12)`)
    // .then(result=>{
    //     result.forEach(element => {
    //         console.log(element.first_name,element.last_name)//printing the result
    //     });
       
    // })
    // .catch(error=>{
    //     console.log(error)//printing the error
    // });


    // db.any(`select first_name,last_name from customer
    // where customer_id in (3,4,5,6,7,45,32,12)`)
    // .then(result=>{
    //     for (var element of result) {
    //         console.log(element.first_name,element.last_name)//printing the result
    //     };
       
    // })
    // .catch(error=>{
    //     console.log(error)//printing the error
    // });

   

// db.any(`select title from film 
// where title like 'N%'`)
//     .then(result=>{
//         for (var element of result) {
//             console.log(element.title)//printing the result
//         };
       
//     })
//     .catch(error=>{
//         console.log(error)//printing the error
//     });


    // db.any(`select title from film 
    //  where title like 'N%'`)
    // .then(result=>{
    //     result.forEach(element => {
    //         console.log(element.title)//printing the result
    //     });
       
    // })
    // .catch(error=>{
    //     console.log(error)//printing the error
    // })



    var arr=[];
    db.any(`select title from film 
     where title like 'N%'`)
    .then(result=>{
   
    arr=result;
    
    })
    .catch(error=>{
        console.log(error)//printing the error
    }).then(()=>{
console.log(arr)

    })