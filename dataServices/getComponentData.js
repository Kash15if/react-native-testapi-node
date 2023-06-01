const componentDataByName = (compId) => {


    if (compId === "home")
        return {

            tabList: [
                {
                    label: "Tab1",
                    tabId: "tab1_101",
                },
                {
                    label: "Tab2",
                    tabId: "tab2_101",
                },
                {
                    label: "Tab2",
                    tabId: "tab3_101",
                },
                {
                    label: "Tab3",
                    tabId: "tab4_101",
                }
            ]


        }

    else {
        return {

            tabList: [
                {
                    label: "Tab21",
                    tabId: "tab1_201",
                },
                {
                    label: "Tab22",
                    tabId: "tab2_201",
                },
                {
                    label: "Tab23",
                    tabId: "tab3_201",
                },
                {
                    label: "Tab24",
                    tabId: "tab4_201",
                }
            ]


        }
    }
}


module.exports = componentDataByName