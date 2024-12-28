const accountid = 2345678
let accountemail = "hello@gmail.com"
var accountpassword = "12345"
accountCity = "lahore"
let accountState;



//accountid=23 // not allowed

accountemail="hbc@gmail.com"
accountpassword="789470"
accountCity="islamabad"

console.log(accountid)

/*
prefer not to use var
because of issue in blockscope and functional scope
*/

console.table([accountid, accountemail , accountpassword ,accountCity,accountState])