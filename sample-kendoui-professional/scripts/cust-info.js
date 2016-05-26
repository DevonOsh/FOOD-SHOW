(function (fsr, $) {
    var custInfo = null,
        app = fsr.app = fsr.app || {};

    app.custInfo = {
        onShow: function () {
            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/customer.json",
                        dataType: "json"
                    }
                }
            });

            $("#listView").kendoListView({
                dataSource: dataSource,
                template: kendo.template($("#template").html())
            });
        }
    };
})(window, jQuery);