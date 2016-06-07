///<reference path="~/kendo/js/jquery.min.js"/>
///<reference path="~/kendo/js/kendo.all.min.js"/>
(function (fsr, $) {
    var search = null,
        isRegistered,
        app = fsr.app = fsr.app || {};

    app.search = {
        onShow: function () {
            var customerData = app.dataSource;

            $("#name-autocomplete").kendoAutoComplete({
                dataSource: customerData,
                select: function(e){
                    var dataItem = this.dataItem(e.item.index());
                    isRegistered = dataItem.Registered;
                },
                placeholder: "Enter company name",
                dataTextField: "Name",
                minLength: 1
            });
            
            $("#name-button").kendoButton({
                click: app.search.onClick
            });
           
        },
        onClick: function (e) {
            app.registeredAction(isRegistered);
        },
        onHide: function () {
            //some code to hide the view. close and reload for now
        }
    };
})(window, jQuery);