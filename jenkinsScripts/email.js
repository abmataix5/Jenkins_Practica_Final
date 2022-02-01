const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:  process.argv[2],
        pass:  process.argv[3]
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
         <li>Resultado Linter</li>
         <li>Resultado Cypress</li>
         <li>Resultado Push</li>

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