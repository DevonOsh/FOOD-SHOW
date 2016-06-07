///<reference path="~/kendo/js/jquery.min.js"/>
///<reference path="~/kendo/js/kendo.all.min.js"/>
(function (fsr, $) {
    var search = null,
        app = fsr.app = fsr.app || {};

    app.search = {
        onShow: function () {
            var customerData = app.dataSource;

            $("#name-autocomplete").kendoAutoComplete({
                dataSource: customerData,
                select: app.search.onSelect,
                placeholder: "Enter company name",
                dataTextField: "Name",
                minLength: 1
            });
           
        },
        onSelect: function (e) {
            var isRegistered;
            var dataItem = this.dataItem(e.item.index());
            isRegistered = dataItem.Registered;
            app.registeredAction(isRegistered);
        },
        onHide: function () {
            //some code to hide the view. close and reload for now
        }
    };
})(window, jQuery);