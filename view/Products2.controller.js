sap.ui.controller("view.Products2", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf ssm.Login
     */
    onInit: function () {
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("model/sampleHardware.json");
        var oTable = this.byId("hardware")
        oTable.setModel(oModel);
        oTable.bindRows("/Products");
    }

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf ssm.Login
     */
//	onBeforeRendering: function() {
//
//	},

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf ssm.Login
     */
//	onAfterRendering: function() {
//
//	},

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     * @memberOf ssm.Login
     */
//	onExit: function() {
//
//	}

});