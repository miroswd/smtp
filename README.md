# Simple Mail Transfer Protocol - SMTP

<p>Testando envios de e-mail utilizando nodemailer e handlebars</p>

### Requisitos

- [x] Node.JS instalado
- [x] Yarn instalado

### Configuração

```
yarn # instala as dependências
```

- Renomei o arquivo <a href="https://github.com/miroswd/smtp/blob/main/example.env">example.env</a> para ".env"
- Inclua o valor das variáveis ambiente

<p>Exemplo:</p>

```
# Server
PORT=3333

# SMTP Configs
# Utilizei a Zoho para envio de e-mails
SMTP_EMAIL=serviço de e-mail
SMTP_PASSWORD=senha do serviço de e-mail
```

### Iniciando a aplicação

```
yarn start
``` 

