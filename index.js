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
  const comId = req.params.compId;

  console.log(comId);
  // send and store data in JSON string , parse it in front according to component needs

  if (comId === "c101") {
    let data = {
      compId: "c101",
      compName: "Card1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({ title: "Card title", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }),
    };
    res.send(data);
  } else if (comId === "c102") {
    let data = {
      compId: "c102",
      compName: "TimeLine 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data:
          [
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
            { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
            { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description' }
          ]
      }),
    };
    res.send(data);
  } else if (comId === "c103") {
    let data = {
      compId: "c103",
      compName: "List 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data: [
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
        ]
      }),
    };
    res.send(data);
  } else if (comId === "c104") {
    let data = {
      compId: "c104",
      compName: "Tab 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data: [
          {
            title: "TITLE 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE  2",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE 4",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE 4",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        ]
      }),
    };
    res.send(data);
  } else if (comId === "c201") {
    let data = {
      compId: "c201",
      compName: "Card1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        title: "Card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content."
      }),
    };
    res.send(data);
  } else if (comId === "c202") {
    let data = {
      compId: "c202",
      compName: "TimeLine 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data:
          [
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
            { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
            { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description' }
          ]
      }),
    };
    res.send(data);
  } else if (comId === "c203") {
    let data = {
      compId: "c203",
      compName: "List 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data: [
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
        ]
      }),
    };
    res.send(data);
  } else if (comId === "c204") {
    let data = {
      compId: "c204",
      compName: "Tab 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data: [
          {
            title: "TITLE 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE  2",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE 4",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE 4",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        ]
      }),
    }

    res.send(data);
  } else if (comId === "c301") {
    let data = {
      compId: "c301",
      compName: "Card1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({ title: "Card title", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }),

    };
    res.send(data);
  } else if (comId === "c302") {
    let data = {
      compId: "c302",
      compName: "TimeLine 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data:
          [
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
            { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
            { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description' }
          ]
      }),
    };
    res.send(data);
  } else if (comId === "c303") {
    let data = {
      compId: "c303",
      compName: "List 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data: [
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
        ]
      }),
    };
    res.send(data);
  } else if (comId === "c304") {
    let data = {
      compId: "c304",
      compName: "Tab 1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({
        data: [
          {
            title: "TITLE 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE  2",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE 4",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            title: "TITLE 4",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        ]
      }),
    };
    res.send(data);
  } else {
    let data = {
      compId: "c101",
      compName: "Card1",
      compStyles: "CSS JSON String",
      compData: JSON.stringify({ title: "Card title", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }),
    };
    res.send(data);
  }

})




const port = process.env.PORT || 3000;
app.listen(port);
