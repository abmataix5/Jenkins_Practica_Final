const nodemailer = require('nodemailer');


if(process.argv[4]){ var lint_result = 'SUCCESS'   
}else{
    var lint_result = 'FAILURE'
}

if(process.argv[5]){ var cypress_result = 'SUCCESS'
}else{
    var cypress_result = 'FAILURE'
}

if(process.argv[6]){ var push_result = 'SUCCESS'
}else{
    var push_result = 'FAILURE'
}


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
         <li>Resultado Linter : ${lint_result}</li>
         <li>Resultado Cypress : ${cypress_result}</li>
         <li>Resultado Push : ${push_result}</li>

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