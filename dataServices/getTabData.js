const tabDataById = (tabId) => {


    return {
        list: [
            {
                label: "abcd",
                listId: "A121D",
                headerImage: "https://picsum.photos/200",
                detailedComponent: {
                    cards: [
                        {
                            header: "Header",
                            body: "Body",
                            footer: "Footer",
                            imageUrl: "https://picsum.photos/200"
                        },
                        {
                            header: "Header",
                            body: "Body",
                            footer: "Footer",
                            imageUrl: "https://picsum.photos/200"
                        },
                        {
                            header: "Header",
                            body: "Body",
                            footer: "Footer",
                            imageUrl: "https://picsum.photos/200"
                        }
                    ],
                    timeline: [
                        {
                            label: "Label", //required field
                            time: "Time/Date", //required field
                            detailedInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"//will popup only on selected
                        },
                        {
                            label: "Label",
                            time: "Time/Date",
                        },
                    ]
                }
            },
            {
                label: "efgh",
                listId: "B121D",
                headerImage: "https://picsum.photos/200",
                detailedComponent: {
                    cards: [
                        {
                            header: "Header",
                            body: "Body",
                            footer: "Footer",
                            imageUrl: "https://picsum.photos/200"
                        },
                        {
                            header: "Header",
                            body: "Body",
                            footer: "Footer",
                            imageUrl: "https://picsum.photos/200"
                        },
                        {
                            header: "Header",
                            body: "Body",
                            footer: "Footer",
                            imageUrl: "https://picsum.photos/200"
                        }
                    ],
                    timeline: [
                        {
                            label: "Label", //required field
                            time: "Time/Date", //required field
                            detailedInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"//will popup only on selected
                        },
                        {
                            label: "Label",
                            time: "Time/Date",
                        },
                    ]
                }
            }
        ]
    }
}


module.exports = tabDataById