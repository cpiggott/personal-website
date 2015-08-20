$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $('#calendar').fullCalendar({
    header: {
      left: '',
      center: '',
      right: ''
    },
    contentHeight: 1200,
    defaultView: 'agendaWeek',
    columnFormat: {
        month: 'dddd',    // Monday, Wednesday, etc
        week: 'dddd M/d', // Monday 9/7
        day: 'dddd'  // Monday 9/7
    },
    year: 2015,
    month: 7,
    day: 17,
    editable: true,
    firstDay: 1,
    minTime: 8,
    maxTime: 18,
    hiddenDays: [0,6],
    allDaySlot: false,
    events: [
      //Monday
      {
        title: 'M.S Work. Meeting by appointment only.',
        start: new Date(2015, 7, 17 , 9, 0),
        end: new Date(2015, 7, 17, 13, 0),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'Lunch',
        start: new Date(2015, 7, 17 , 13, 0),
        end: new Date(2015, 7, 17, 14, 0),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'Office Hours  Nichols 218A',
        start: new Date(2015, 7, 17 , 14, 0),
        end: new Date(2015, 7, 17, 16, 30),
        allDay: false,
        color: "#ffff00",
        textColor: "#000000"
      },
      //Tuesday
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 18 , 9, 30),
        end: new Date(2015, 7, 18, 10, 0),
        allDay: false,
        color: '#512888'
      },
      {
        title: 'CIS 833',
        start: new Date(2015, 7, 18 , 10, 0),
        end: new Date(2015, 7, 18, 11, 15),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 18 , 11, 15),
        end: new Date(2015, 7, 18, 12, 15),
        allDay: false,
        color: '#512888'
      },
      {
        title: 'Lunch',
        start: new Date(2015, 7, 18 , 12, 15),
        end: new Date(2015, 7, 18, 13, 0),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 18 , 13, 0),
        end: new Date(2015, 7, 18, 14, 15),
        allDay: false,
        color: '#512888'
      },
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 18 , 14, 30),
        end: new Date(2015, 7, 18, 15, 45),
        allDay: false,
        color: '#512888'
      },
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 18 , 16, 0),
        end: new Date(2015, 7, 18, 17, 15),
        allDay: false,
        color: '#512888'
      },
      //wednesday
      {
        title: 'Python Planning',
        start: new Date(2015, 7, 19 , 9, 0),
        end: new Date(2015, 7, 19, 13, 0),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'Lunch',
        start: new Date(2015, 7, 19 , 13, 0),
        end: new Date(2015, 7, 19, 14, 0),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'Office Hours  Nichols 218A',
        start: new Date(2015, 7, 19 , 14, 0),
        end: new Date(2015, 7, 19, 16, 30),
        allDay: false,
        color: "#ffff00",
        textColor: "#000000"
      },
      //Thursday
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 20 , 9, 30),
        end: new Date(2015, 7, 20, 10, 0),
        allDay: false,
        color: '#512888'
      },
      {
        title: 'CIS 833',
        start: new Date(2015, 7, 20 , 10, 0),
        end: new Date(2015, 7, 20, 11, 15),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 20 , 11, 15),
        end: new Date(2015, 7, 20, 12, 15),
        allDay: false,
        color: '#512888'
      },
      {
        title: 'Lunch',
        start: new Date(2015, 7, 20 , 12, 15),
        end: new Date(2015, 7, 20, 13, 0),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 20 , 13, 0),
        end: new Date(2015, 7, 20, 14, 15),
        allDay: false,
        color: '#512888'
      },
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 20 , 14, 30),
        end: new Date(2015, 7, 20, 15, 45),
        allDay: false,
        color: '#512888'
      },
      {
        title: 'CIS 115',
        start: new Date(2015, 7, 20 , 16, 0),
        end: new Date(2015, 7, 20, 17, 15),
        allDay: false,
        color: '#512888'
      },
      //Firday
      {
        title: 'M.S Work. Meeting by appointment only.',
        start: new Date(2015, 7, 21 , 9, 0),
        end: new Date(2015, 7, 21, 13, 0),
        allDay: false,
        color: '#aaa'
      },
      {
        title: 'Lunch',
        start: new Date(2015, 7, 21 , 13, 0),
        end: new Date(2015, 7, 21, 14, 0),
        allDay: false,
        color: '#aaa'
      }

    ]
  });
})
