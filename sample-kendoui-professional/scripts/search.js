/// <reference path="~/kendo/js/kendo.all.min.intellisense.js"/>

(function (fsr, $) {
    var $autocomplete,
        autocomplete,
        search = null,
        //$gaugeSlider,
        app = fsr.app = fsr.app || {};

    app.search = {
        onShow: function () {
            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/customer.json",
                        dataType: "json"
                    }
                }
            });
            $autocomplete = $("#autocomplete");

            $autocomplete.kendoAutoComplete({
                placeholder: "Enter company name",
                dataSource: {
                    dataSource: dataSource,
                    dataTextField: "Name"
                },
                filter: "startswith",
                popup: {
                    appendTo: $("#container")
                },
            });
        },
        onHide: function () {

        }

        /*
        drawGauge: function () {
            gauge = $gauge.kendoRadialGauge({
                theme: fsr.app.chartsTheme,
                renderAs: "svg",
                transitions: false,
                pointer: {
                    value: value
                },
                scale: {
                    minorUnit: 5,
                    startAngle: -30,
                    endAngle: 210,
                    max: 180,
                    ranges: [
                        {
                            from: 0,
                            to: 80,
                            color: "#c0c0c2"
                        }, {
                            from: 80,
                            to: 120,
                            color: "#ffc700"
                        }, {
                            from: 120,
                            to: 150,
                            color: "#ff7a00"
                        }, {
                            from: 150,
                            to: 180,
                            color: "#c20000"
                        }
                    ]
                },
                gaugeArea: {
                    width: $(window).width(),
                    margin: app.emToPx(1)
                }
            }).data("kendoRadialGauge");
        },

        bindResizeEvent: function () {
            //as the dataviz-s are complex elements they need redraw after window resize
            //in order to position themselves on the right place and right size
            $(window).on("resize.gauge", $.proxy(app.gauge.drawGauge, app.gauge));
        },

        unbindResizeEvent: function () {
            //unbind the "resize event" to prevent redundant calculations when the tab is not active
            $(window).off("resize.gauge");
        } */
    };
})(window, jQuery);