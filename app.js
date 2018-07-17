console.log('Uygulamamiz Basliyor...');

const fs = require('fs');
const os = require('os');
const notes = require('./test.js');


var donenDeger =test.testFonksiyonu();
console.log(donenDeger);




/*
var user = os.userInfo();
console.log(user.username);


fs.appendFileSync('yeniTest.txt','Sistem kullanicisinin adi:' + user.username);

fs.appendFileSync('yeniTest.txt', `Sistem Kullanicisinin adi: ${user.username}`);


fs.appendFile('test.txt', 'Bu Bir Test Denemesidir..', function (err) {
    if(err){
        console.log(err);
    }
   
});*/

