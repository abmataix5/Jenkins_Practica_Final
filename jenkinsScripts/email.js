const nodemailer = require('nodemailer');

var linter = process.argv[3]
var test_cypress = process.argv[4]
var push = process.argv[5]


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
            <li>Resultado linter: ${{linter}} </li>
            <li>Resultado test_cypress: ${{test_cypress}} </li>
            <li>Resultado push: ${{push}} </li>
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