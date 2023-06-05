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


// ------------------------------------------------------------------------------------------














// -----------------------------------------------------------------------------------------------------



const getTabData = require("./dataServices/getTabData")
const getCompData = require("./dataServices/getComponentData")













app.get('/', (req, res) => {

  let data = {
    nav: [
      {
        label: "Home",
        comp: "home",
        compId: "Home"
      },
      {
        label: "About",
        comp: "about",
        compId: "about"
      },
      {
        label: "Agenda",
        comp: "agenda",
        compId: "agenda"
      }
    ],

    // components: {
    //   home: {
    //     tab: [
    //       {
    //         label: "Home",
    //         comp: "home"
    //       }, {
    //         label: "Home",
    //         comp: "home"
    //       },
    //     ]
    //   },
    //   about: {
    //     tab: [
    //       {
    //         label: "Home",
    //         comp: "home"
    //       }, {
    //         label: "Home",
    //         comp: "home"
    //       },
    //     ]
    //   },

    //   agenda: {
    //     tab: [
    //       {
    //         label: "Home",
    //         comp: "home"
    //       }, {
    //         label: "Home",
    //         comp: "home"
    //       },
    //     ]
    //   },

    // }

  }
  res.send(JSON.stringify(data));
})



app.get('/getCompDetails/:compId', (req, res) => {

  let compId = req.params.compId;

  let data = getCompData(compId);

  res.send(JSON.stringify(data));
})


app.get('/getTabDetails/:tabId', (req, res) => {

  let tabId = req.params.tabId;

  let data = getTabData(tabId);

  res.send(JSON.stringify(data));
})



app.get('/menu', (req, res) => {

  console.log("menu called")
  let data =
  {
    meniId: "menu1a",
    assignedPages: [{
      pageId: "1avrs",
      label: "Agenda"
    },
    {
      pageId: "2avrs",
      label: "Information"
    },
    {
      pageId: "3avrs",
      label: "My Event"
    }
    ]
  }

  res.send(data)
})



app.get('/getPageDetailsById/:pageId', (req, res) => {


  const pageInputId = req.params.pageId
  console.log(req.params.pageId)

  if (pageInputId === "1avrs") {
    let data =
    {
      pageId: "page101",
      PAgeName: "Agenda",
      PageStructure: [
        {
          compId: "c101",
          CompNAme: "Card1",
          CompType: "Card",
          // ColSPan-rowspan-flex-size
          sequence: 1//,etc
        },
        {
          compId: "c102",
          CompNAme: "TimeLine 1",
          CompType: "TimeLine",
          // ColSPan-rowspan-flex-size
          sequence: 2//,etc
        },
        {
          compId: "c103",
          CompNAme: "List 1",
          CompType: "List",
          // ColSPan-rowspan-flex-size
          sequence: 3//,etc
        },
        // {
        //   compId: "c104",
        //   CompNAme: "Tab 1",
        //   CompType: "Tab",
        //   // ColSPan-rowspan-flex-size
        //   sequence: 1//,etc
        // }
      ]
    }

    res.send(data)
  }
  else if (pageInputId === "1avrs") {
    let data =
    {
      pageId: "page101",
      PAgeName: "Agenda",
      PageStructure: [

        {
          compId: "c202",
          CompNAme: "TimeLine 1",
          CompType: "TimeLine",
          // ColSPan-rowspan-flex-size
          sequence: 2//,etc
        },
        {
          compId: "c201",
          CompNAme: "Card1",
          CompType: "Card",
          // ColSPan-rowspan-flex-size
          sequence: 1//,etc
        }
        // {
        //   compId: "c104",
        //   CompNAme: "Tab 1",
        //   CompType: "Tab",
        //   // ColSPan-rowspan-flex-size
        //   sequence: 1//,etc
        // }
      ]
    }

    res.send(data)
  }
  else {
    let data =
    {
      pageId: "page101",
      PAgeName: "Agenda",
      PageStructure: [
        {
          compId: "c304",
          CompNAme: "Tab 1",
          CompType: "Tab",
          // ColSPan-rowspan-flex-size
          sequence: 1//,etc
        }
      ]
    }

    res.send(data)
  }


})




app.get('/getComponentDataById/:compId', (req, res) => {


  console.log(req.params.compId)
  // send and store data in JSON string , parse it in front according to component needs
  let data = {
    pageId: "page101",
    compName: "Agenda",
    compStyles: "CSS JSON String",
    compData: "JSON String"
  }

  res.send(data)

})




const port = process.env.PORT || 3000;
app.listen(port);
