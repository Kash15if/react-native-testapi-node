const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//for cors error
const cors = require("cors");
const corsOpts = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors());

app.get('/', (req, res) => {

  let data = {
    nav: [
      {
        label: "Home",
        comp: "home",
      },
      {
        label: "About",
        comp: "about"
      },
      {
        label: "Agenda",
        comp: "agenda"
      }
    ],

    components: {
      home: {
        tab: [
          {
            label: "Home",
            comp: "home"
          }, {
            label: "Home",
            comp: "home"
          },
        ]
      },
      about: {
        tab: [
          {
            label: "Home",
            comp: "home"
          }, {
            label: "Home",
            comp: "home"
          },
        ]
      },

      agenda: {
        tab: [
          {
            label: "Home",
            comp: "home"
          }, {
            label: "Home",
            comp: "home"
          },
        ]
      },

    }

  }
  res.send(JSON.stringify(data));
})


const port = process.env.PORT || 3000;
app.listen(port);
