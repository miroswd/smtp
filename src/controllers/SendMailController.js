const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');
const nodehbs = require('nodemailer-express-handlebars');
const {resolve} = require('path');

class SendMailController {
  async store(request,response){
    try {
      const {email, name, user} = request.body;
      const transporter = nodemailer.createTransport({
        host:'smtp.zoho.com',
        port:465,
        auth:{
          user:process.env.SMTP_EMAIL,
          pass:process.env.SMTP_PASSWORD,
        }
      });

      const viewPath = resolve(__dirname,'..','views','emails');

      transporter.use('compile', nodehbs({
        viewEngine:exphbs.create({
          layoutsDir:resolve(viewPath,'layouts'),
          partialsDir:resolve(viewPath,'partials'),
          defaultLayout:'default',
          extname:'.hbs',
        }),
        viewPath,
        extName:'.hbs'
      }));

      const mailOptions = {
        from:`Altamir Santos <${process.env.SMTP_EMAIL} >`,
        to:email,
        subject:'Último teste conexão com SMTP',
        template:'teste',
        context:{
          user,
          name,
          date: new Date().toLocaleDateString('pt-BR')
        }
      };

      transporter.sendMail(mailOptions, (error,info) => {
        if (error) throw new Error(error);
        console.log('Email enviado', info.response);
      });

      return response.status(200).json({msg:`E-mail enviado para ${email}`});
    } catch (err) {
      return response.status(400).json({Error:err.message});
    }
  }
}

module.exports = new SendMailController();
