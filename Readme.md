# Entry Management System Application

## Technolologies Used

- ReactJS
- ExpressJS
- NodeJS
- MongoDB

## Requirements

- npm
- Node
- Mongodb ([https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))
- Nexmo

## How to use?

1. Simply clone or download the project.
2. Make an account on [http://www.nexmo.com/](http://www.nexmo.com/) for messaging service.
3. Make an account on **MongoDB** ([https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)) atlas for database.
4. Change the content of **db_config.js** file present in **config folder**.

```bash
   module.exports = {
        mongoURI:
          "mongodb+srv://USER:PASSWORD@test-cluster1-cwybb.mongodb.net/test?retryWrites=true",
        secretOrKey: "secret",
        email: " Enter Email Address",
        password: "Enter Password",
        NEXMO_API_KEY: "Enter API Key",
        NEXMO_API_SECRET: "Enter API Secret Key",
        NEXMO_FROM_NUMBER: "Enter Registered Number"
      };
```

5. Start developing this awesome project.

## Installment

1.  Run `npm install`.
2.  Go to the client folder, and then run `npm install`.
3.  Run `npm run dev`.
4.  Visit `localhost:3000`.

## Folder Structure

```bash
─── Event Management
     |── api
     |   ├── send_mail.js
     |   └── send_sms.js
     |── client
     |   |── public
     |   |── src
     |   |   |── Components
     |   |   |   |── checkin.js
     |   |   |   |── checkout.js
     |   |   |   |── footer.js
     |   |   |   |── Header.js
     |   |   |   |── Home.js
     |   |   |   └── logbook.js
     |   |   |── css
     |   |   |   |── footer.css
     |   |   |   |── header.css
     |   |   |   |── home.css
     |   |   |   └── table.css
     |   |   |── app.js
     |   |   |── index.css
     |   |   |── index.js
     |   |   |── routes.js
     |   |   └── serviceWorker.js
     |   └── package.json
     |── config
     |   └── db_config.js
     |── controllers
     |   └── visitor.js
     |── models
     |   └── details.js
     |── Routes
     |   └── routes.js
     |── app.js
     └── package.json
```

## API Used

1. POST /checkin - to Check-In a visitor.
2. POST /checkout - to Check-Out a visitor.
3. GET /logbook - to get the log details.

## Workflow

1. Visit the **home** page.
2. Choose **CheckIn** or **CheckOut** button.
3. Fill all the details mentioned in the form. If some fields get missed by mistake, it will be checked by the validator and alert box will appear automatically.
4. Upon successfully registration, an alert box will appear. All the necessary details will now be sent to the host either through **SMS (NEXMO) or by Mail(Nodemailer)**.
5. After the visitor left, they can check their visit details by providing the email id they registered with in **checkout** section. They'll get the details on mail and SMS too.
6. We can also check the log details by clicking upon **Logbook button**.
