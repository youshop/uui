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
    var RainChart = function (opt) {
        this.opt = opt
    }

    RainChart.prototype = {
        init: function () {
            var that = this;
            $(that.opt.wrapper).highcharts(that.makeHighChartOption());
        },
        makeHighChartOption: function () {
            var that = this;


            var obj = {
                chart: {
                    type: 'column',
                    //marginLeft: "0",
                    //marginRight: "-3",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    height : 150
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: 0,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif',
                            color: "#FFF"
                        }
                    }

                },
                yAxis: [{
                    min: 0,
                    max: 30,
                    tickAmount: 4,
                    gridLineColor: "#6b848a",
                    gridLineDashStyle : "dot",
                    opposite: true,
                    tickLength : 1,
                    labels: {
                        style: {
                            color: "#FFF",
                            "font-size": "20px"
                        },
                        formatter: function () {
                            if (this.value <= 10 && this.value > 0) {
                                return "小雨"
                            }
                            if (this.value <= 20 && this.value > 10) {
                                return "中雨"
                            }
                            if (this.value <= 30 && this.value > 20) {
                                return "大雨"
                            }
                            return ""
                        },
                        y: 40
                    },
                    title: {
                        text: ""
                    }

                }
                ],
                legend: {
                    enabled: false
                },
                series: [{
                    data: [
                        {
                            color: "#3285e7",
                            name: '10分钟',
                            y: 10,
                            borderColor: "#3285e7"
                        },
                        {
                            color: "#32e798",
                            name: '30分钟',
                            y: 15,
                            borderColor: "#32e798"
                        },
                        {
                            color: "#e7cb32",
                            name: '50分钟',
                            y: 30,
                            borderColor: "#e7cb32"
                        }

                    ]
                }]
            }


            return obj;


        },
        makeTitleDescip: function () {

        }

    }


    window.RainChart = RainChart;


})
(window, $);