const nodemailer = require('nodemailer');


console.log(process.argv[3]);

console.log(process.argv[4]);

console.log(process.argv[5]);


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:  process.argv[2],
        pass:  'ttbjxwxkwlqmkydg'
    }
});

var mailOptions = {
    from: `mataix.ab@gmail.com`, 
    to: `mataix.ab@gmail.com`,
    subject: 'Resultado del workdflow ejecutado',
    html: `
    <div>   
        <p>Todo funciona correctamente resultados: </p>
        <ul>
         
        </ul>
    </div>
    ` 
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enivado: ' + info.response);
    }
});