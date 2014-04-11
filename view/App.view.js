sap.ui.jsview("view.App", {

    getControllerName: function () {
        return "view.App";
    },

    createContent: function (oController) {

        var oButton0 = new sap.ui.ux3.NavigationItem({
            key: "products1",
            text: "Computers"
        });
        var oButton1 = new sap.ui.ux3.NavigationItem({
            key: "products2",
            text: "Hardware"
        });
        var oShell = new sap.ui.ux3.Shell({
            id: this.createId("main-shell"),
            appTitle: "Computer Shop",
            //showPane: false,
            showLogoutButton: false,
            showTools: false,
            headerItems: [new sap.ui.commons.TextView({text: "User Name", tooltip: "U.Name"}),
                new sap.ui.commons.Button({text: "Personalize", tooltip: "Personalize", press: function (oEvent) {
                    alert("Here could open an personalize dialog");
                }})],
            worksetItems: [oButton0, oButton1],
            worksetItemSelected: [oController.onWorksetItemSelected, oController]
        });

        return oShell;
    }
});