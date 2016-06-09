///<reference path="~/kendo/js/jquery.min.js"/>
///<reference path="~/kendo/js/kendo.all.min.js"/>
(function (fsr, $) {
    var search = null,
        isRegistered,
        app = fsr.app = fsr.app || {};

    app.search = {
        onShow: function () {
            var customerData = app.dataSource;

            $("#search_name-input").kendoAutoComplete({
                dataSource: customerData,
                select: function(e){
                    var dataItem = this.dataItem(e.item.index());
                    isRegistered = dataItem.Registered;
                },
                filtering: function(e) {
                    var filter = e.filter;
                    if(!filter.value) {
                        e.preventDefault();
                    }
                },
                placeholder: "Enter company name",
                dataTextField: "Name",
                template: 	'<div class="dropdown-content">' + 
                				'<span><p>#:Cust_Num#</p></span>' +
                				'<span><p>#:Name#</p></span>' +
                			'</div>'
            });
            
            $("#search_name-btn").kendoButton({
                click: function() {
                    app.registeredAction(isRegistered);
                }
            });
           
        },

        onHide: function () {
            //some code to hide the view. close and reload for now
        }
    };
})(window, jQuery);