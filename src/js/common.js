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
      stroke: {
         show: true,
         curve: 'smooth',
         lineCap: 'butt',
         // colors: undefined,
         width: 4,
         dashArray: 0,      
     },
      states: {
         normal: {
             filter: {
               type: 'none',
               value: 0,
             }
         },
         hover: {
             filter: {
               type: 'none',
               value: 0,
             }
         },
         active: {
             allowMultipleDataPointsSelection: false,
             filter: {
               type: 'none',
               value: 0,
             }
         },
      },
      chart: {
          type: 'donut',
          width: 340,
          height: 120,
          fontFamily: 'MontserratBold, sans-serif',
          
          events: {
            dataPointMouseEnter: function(event, chartContext, config) {
               
              event.target.attributes['stroke-width'].value = 0.1;
            //   options.plotOptions.pie.donut.labels.value.color = event.target.attributes['fill'].value;
               $('.apexcharts-datalabel-value').attr('fill', event.target.attributes['fill'].value);
               // $('text.name-after-value').attr('fill', event.target.attributes['fill'].value);
               // $('.apexcharts-datalabel-label').attr('style', `fill: ${event.target.attributes['fill'].value}`);
               // $('.apexcharts-datalabel-label').css('fill',  event.target.attributes['fill'].value);
               console.log($('.apexcharts-datalabel-label'));
              //   event.originalTarget.attributes['stroke-width'].fill
            //   console.log(event.target.attributes['stroke-width'].value);
            //   console.log(options.plotOptions.pie.donut.labels.value.color);
            // $('.apexcharts-datalabel-label').textContent = 'ГОЛОСОВ'
            // $('.apexcharts-pie-series').attr('seriesName', 'ГОЛОСОВ')

               // $('.apexcharts-datalabel-label').html('ГОЛОСОВ');
            // console.log($('.apexcharts-datalabel-label').textContent);
            },
            dataPointMouseLeave: function(event, chartContext, config) {
              event.target.attributes['stroke-width'].value = 4;
              $('.apexcharts-datalabel-value').attr('fill', 'rgba(31,32,65,.5)');
            //   $('text.name-after-value').attr('fill', 'rgba(31,32,65,.5)');
            //   $('.apexcharts-datalabel-label').html('ГОЛОСОВ');
            //   $('.apexcharts-datalabel-label').attr('style', `fill: ${event.target.attributes['fill'].value}`);
              console.log($('.apexcharts-datalabel-label').attr('style'));
              
            //   $('.apexcharts-datalabel-label').textContent = 'ГОЛОСОВ'
            //   $('.apexcharts-pie-series').attr('seriesName', 'ГОЛОСОВ')
            //   console.log($('.apexcharts-datalabel-label').html());
               // console.log(event);
            }
          }
      },
      // responsive: [{
      //    breakpoint: 1450,
      //    options: {
      //        chart: {
      //            width: 340
      //        },
      //        plotOptions: {
      //          pie: {
      //             offsetY: 13,
      //             offsetX: -14
      //          }
      //        }
      //    }
      // },
      // {
      //    breakpoint: 1450,
      //    options: {
      //        chart: {
      //            width: 340
      //        },
      //        plotOptions: {
      //          pie: {
      //             offsetY: 14,
      //             offsetX: -9
      //          }
      //        }
      //    }
      // }],
      // stroke: {
      //    // width: 14
      // },
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
            offsetX: -14,
            customScale: 1,
            size: 60,
            donut:{
               size: 87,
               labels: {
                  show: true,
                  name: {
                     show: true,
                     fontSize: '12px',
                     fontFamily: "MontserratBold",
                     color: '#bc9cff',
                     offsetY: 12
                  },
                  value: {
                     show: true,
                     fontSize: '24px',
                     fontFamily: "OpenSansdBold",
                     color: 'rgba(31,32,65,.5)',
                     offsetY: -22
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
         offsetX: -11,
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
//   chart.addText({
//    x: 10,
//    y: 55,
//    text: 'ГОЛОСОВ',
//    fontSize: '12px',
//    foreColor: 'rgba(31,32,65,.5)',
//    backgroundColor: 'transparent',
//    cssClass: 'name-after-value'
//  });


   
});

