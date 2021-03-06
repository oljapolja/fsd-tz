$(function() {
    $.fn.datepicker.language['ru'] = {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Применить',
        clear: 'Очистить',
        dateFormat: 'dd.mm.yyyy',
        timeFormat: 'hh:ii',
        firstDay: 1
    };

    const dataPickerHandler = $('.my-datepicker').datepicker({
        language: 'ru',
        classes: '',
        minDate: new Date(),
        disableNavWhenOutOfRange: false,
        clearButton: true,
        todayButton: true,
        range: true,
        //   showOtherYears: false
        //   inline: true,
        //   minView: 'days',
        //   view: 'days',
        //   selectOtherYears: false,
        //   selectOtherMonths: false,
        navTitles: {
            days: 'MM <i>yyyy</i>'
        },
        prevHtml: '<i class="material-icons arrow-backward-icon gradient-color-text"> &#xe5c4; </i>',
        nextHtml: '<i class="material-icons arrow-forward-icon gradient-color-text"> &#xe5c8; </i>',
        onSelect: function (formattedDate, date, inst) {

            if (!formattedDate) {
                inst.el.parentElement.parentElement.lastElementChild.lastElementChild.value = "";
            } else {
                // console.log(formattedDate.split(",").length)
                inst.el.parentElement.parentElement.firstElementChild.lastElementChild.value = formattedDate.split(",")[0];
                // $('#startDate').val(formattedDate.split(",")[0]);
                if (formattedDate.split(",").length == 2) {
                    inst.el.parentElement.parentElement.lastElementChild.lastElementChild.value = formattedDate.split(",")[1];
                }

                
            }
            // $('#endDate').val(formattedDate.split(",")[1]);
        },
        onHide: function (inst, animationCompleted) { },
        onChangeMonth: function (month, year) {
            $('.datepicker--nav-title, .datepicker--nav-title i').addClass('-disabled-');
        },
        onShow: function (inst, animationCompleted) {
            $('.datepicker--nav-title, .datepicker--nav-title i').addClass('-disabled-');

            $('.datepicker--button[data-action=today]').attr({'data-action': 'apply', 'class': 'link-purple-button'}).click(function () {
                inst.hide();
                $('.my-datepicker').blur();
            })
        }
    });

    $('#endDate').click(function () {
        
        // console.log($(this).parent().parent().children().children('#startDate').val())
        if ($(this).parent().parent().children().children('#startDate').val() === '') {
            $(this).parent().parent().children().children('#startDate').focus();
        } else {
            dataPickerHandler.data('datepicker').show();
        }
    });
});