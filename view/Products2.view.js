sap.ui.jsview("view.Products2", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf ssm.Login
     */
    getControllerName: function () {
        return "view.Products2";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf ssm.Login
     */
    createContent: function (oController) {

        jQuery.sap.require("sap.ui.table.Table");

        var oTable = new sap.ui.table.Table(this.createId("hardware"), {
            width: "100%",
            title: "Products",
            selectionMode: sap.ui.table.SelectionMode.None
        });

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({
                text: "Id"
            }),
            template: new sap.ui.commons.TextView().bindProperty("text", "_id"),
            sortProperty: "_id"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({
                text: "Name"
            }),
            template: new sap.ui.commons.TextView().bindProperty("text", "Name"),
            sortProperty: "Name"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({
                text: "Price"
            }),
            template: new sap.ui.commons.TextView().bindProperty("text", "Price"),
            sortProperty: "Price"

        }));
        var oLayout = new sap.ui.commons.layout.VerticalLayout(this.createId("oLayout2"), {
            content: [oTable]
        });

        return oLayout;
    }

});
