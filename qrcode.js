const QRCode = require('qrcode');
const personalDetails = {
  name: 'viswajithharidas',
  age:25,
  email_Id:'viswajithharidas111@gmail.com',
  contact_no:9633266449,
  bio: 'Im Mern Stack developer,  Knowledge in JavaScript and Node.js,Express Js,Mongo Db.'
};


const personData = JSON.stringify(personalDetails);


QRCode.toFile('personQRCode.png', personData, {
  color: {
    dark: '#000000',  
    light: '#FFFFFF' 
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code generated and saved as personQRCode.png');
});
