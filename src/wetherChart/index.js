/**
 * Created by gorden on 15/7/30.
 */

(function (win, $) {

    Highcharts.setOptions({
        VMLRadialGradientURL: "",
        canvasToolsURL: ""
    })


    /*
     wrapper,day,night,bgcolor,format
     */
    var Wether = function (opt) {
        this.opt = opt
    }

    Wether.prototype = {
        init: function () {
            var that = this;
            $(that.opt.wrapper).highcharts(that.makeHighChartOption());
        },
        makeHighChartOption: function () {
            var that = this;
            var day = that.opt.day;
            var night = that.opt.night;
            var formater = that.opt.formater || "°C";


            var obj = {
                credits: {
                    enabled: false
                },
                chart: {
                    showAxes: true,
                    marginLeft: "3",
                    marginBottom: "-5",
                    marginRight: "-3",
                    backgroundColor: that.opt.bgcolor || '#2d81e4'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: ['0', '1', '2', '3', '4', '5',
                        '7', '8', '9', '10', '11', '12'],
                    gridLineColor: "rgba(255,255,255,0)",
                },
                yAxis: {
                    title: {
                        style: {'display': 'none'}
                    },
                    stackLabels: {
                        style: {'display': 'none'}
                    },
                    gridLineColor: "rgba(255,255,255,0)"
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true,
                            format: "{y}" + formater,
                            style: {
                                "color": that.opt.singleLine || "white",
                                "textShadow": "none"
                            },
                            allowOverlap: true,
                            shadow: false

                        },
                        enableMouseTracking: false
                    }
                },
                series: [{
                    name: 'day',
                    data: day,
                    color: that.opt.singleLine || "#f46779"
                }, {
                    name: 'night',
                    data: night,
                    color: "#54edff"
                }]
            }


            return obj;


        },
        makeTitleDescip: function () {

        }

    }


    window.Wether = Wether;


})
(window, $);