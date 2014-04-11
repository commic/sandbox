

sap.ui.controller("view.App", {
    onInit:function(){
        this.oViewBuffer = {};
        this.oViewBuffer.products1 = sap.ui.jsview("view.Products1");
        this.oViewBuffer.products2 = sap.ui.jsview("view.Products2");
        var oShell = this.byId("main-shell");
        oShell.setContent(this.oViewBuffer.products1);

    },

    onWorksetItemSelected: function(oEvent){
        var oShell = this.byId("main-shell");
        var key = oEvent.getParameter("key");
        oShell.setContent(this.oViewBuffer[key]);
    }
});