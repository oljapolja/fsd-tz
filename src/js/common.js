$(function() {

    var lazyLoadInsrance = new LazyLoad({
      elements_selector: ".lazy"
   });

   $("#phone").mask("+7 (999) 999-99-99",{completed:function(){alert("You typed the following: "+this.val());}});

   $('.donut-segment1').hover(function() {
      $('.donut-external-ring').attr('display', 'inherit')
   });

   $('.donut-segment').mouseenter(function(){
      $(this).attr("stroke-width", "5");
    });

   

   // import ApexCharts from 'apexcharts'

   var options = {
      chart: {
          type: 'donut',
          width: 340,
          height: 120,
          fontFamily: 'MontserratBold, sans-serif',
          
          events: {
            dataPointMouseEnter: function(event, chartContext, config) {
               
              event.originalTarget.attributes['stroke-width'].value= 0.1;
              console.log(event.originalTarget.attributes);
            //   options = {
            //    plotOptions: {
            //       pie: {
            //          size: 50
            //       }
            //    }
            //   }
            },
            dataPointMouseLeave: function(event, chartContext, config) {
              event.originalTarget.attributes['stroke-width'].value= 2;
            }
          }
      },
      responsive: [{
         breakpoint: 1450,
         options: {
             chart: {
                 width: 320
             }
         }
     }],
      stroke: {
         // width: 14
      },
      series: [260 ,260, 520, 0],
      labels: ["Великолепно", "Хорошо", "Удовлетворительно", "Разочарован"],
      colors:['#8BA4F9', '#66D2EA', '#FFBA9C', '#919191'],
      fill: {
         type: 'gradient',
         gradient: {
            shade: 'dark',
            shadeIntensity: 1,
            inverseColors: false,
            // type: 'horizontal',
            stops: [50],
            // shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            gradientToColors: ['#BC9CFF', '#6FCF97', '#FFE39C', '#3D4975']
         }
      },
      dataLabels: {
         enabled: false
      },
      tooltip: {
         enabled: false,
      },
      plotOptions: {
         pie: {
            offsetY: 13,
            offsetX: -4,
            customScale: 1,
            size: 60,
            donut:{
               size: 90,
               labels: {
                  show: true,
                  name: {
                     show: false,
                     fontSize: '12px',
                     fontFamily: "MontserratBold",
                     color: '#bc9cff',
                     offsetY: 12,
                     formatter: function formatter(w) {
                      return w.globals.seriesTotals.reduce(function (a, b) {
                        return a + b;
                      }, 0);
                    }
                  },
                  value: {
                     show: true,
                     fontSize: '24px',
                     fontFamily: "OpenSansdBold",
                     color: 'rgba(31,32,65,.5)',
                     offsetY: -5
                  },
                  total: {
                     show: true,
                     // showAlways: true,
                     label: 'ГОЛОСОВ',
                     fontSize: '12px',
                     fontFamily: "MontserratBold",
                     color: 'rgba(31,32,65,.5)',
                     // formatter: function (w) {
                     //   return w.globals.seriesTotals.reduce((a, b) => {
                     //     return a + b
                     //   }, 0)
                     // }
                  }
               },
               
            },
            // customScale: 0.8
         }
      },
      legend: {
         fontSize: '14px',
         fontFamily: 'MontserratRegular',
         height: 110,
         offsetY: 7,
         offsetX: -30,
         markers: {
            width: 10,
            height: 10,
            // useSeriesColors: false,
            fillColors:['linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)', 
               ' linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
               'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)',
               'linear-gradient(180deg, #919191 0%, #3D4975 100%)']
         },
         itemMargin:{
            horizontal: 3,
            // vertical: 14
         }
         // position: 'top',
         // horizontalAlign: 'right'
      }
  }

//   $('.donut-segment').mouseenter(function(){
//    $(this).attr("stroke-width", "5");
//  });

  $('.apexcharts-pie-area').mouseenter(function() {
     var colo = $(this).attr('fill');
     console.log(colo);
   // options = {
   //    plotOptions: {
   //       pie: {
   //          donut:{
   //             labels: {
   //                name: {

   //                },
   //                value: {

   //                }
   //             }

   //          }
   //       }
   //    }   
   // }
   });

 var chart = new ApexCharts(
      document.querySelector("#chart"),
      options
  );
  
  chart.render();
  chart.addText({
   x: 10,
   y: 55,
   text: 'ГОЛОСОВ',
   fontSize: '12px',
   foreColor: 'rgba(31,32,65,.5)',
   backgroundColor: 'transparent'
 });


   
});

