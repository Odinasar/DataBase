describe('Amazon Database Testing', () => {
    
    var pgp=require('pg-promise')(/*options*/);
   
   
    var cn = {
    host: 'localhost',
    port: 5432,
    database: 'dvdrental',
    user: 'postgres',
    password: 'abc'
    };
    
    var db=pgp(cn)

    var arr=[];

it('should get the film names from database and search in amazon.com', () => {
browser.waitForAngularEnabled(false);
browser.get('https://www.amazon.com/')



db.any(`select title from film 
where title like 'Z%'`)
.then(result=>{
arr=result;
})
.catch(error=>{
   console.log(error)//printing the error
}).then(()=>{

    arr.forEach(function(i){
        element(by.id(id="twotabsearchtextbox")).sendKeys(i.title);
        browser.sleep(2000);
        element(by.css("#nav-search > form > div.nav-right > div > input")).click();
        browser.sleep(2000);
        browser.navigate().back();
    });
                                           //front-end automation  code here



})//end of db







});//end of it
});//end of describe