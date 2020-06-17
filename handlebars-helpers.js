const moment = require("moment");
const tz = require('moment-timezone');
let timezone = "Asia/Taipei";
module.exports = {
    ifeq: function(a, b, options){
      if (a === b) {
        return options.fn(this);
        }
      return options.inverse(this);
    },
    howLong: function(date){
      var now =  moment().tz(timezone)
      var dif = now.diff(date, 'hours')
      if (dif == "0"){
        dif = now.diff(date, 'minutes')
        return dif+" Mins"
    }
      return dif+' Hrs'
    },    
    howLongTook: function(datein, dateout){
      var now =  moment(dateout)
      var dif = now.diff(datein, 'hours')
      if (dif == "0"){
          dif = now.diff(datein, 'minutes')
          return dif+" Mins"
      }
      return dif+' Hrs'
    },
    stranger: function(person, options){
      if (person.includes("stranger")) {
        return options.fn(this);
        }
      return options.inverse(this);
    },
    ifcheck: function(a,b){
      if (a === b){
        if (b.includes("stranger")){
          return '<td class="text-success">stranger</td>'
        }else{ return '<td class="text-success">'+b+'</td>' }
      }else{
        if (b.includes("stranger")){
          return '<td class="text-danger">stranger</td>'
        }else{ return '<td class="text-danger">'+b+'</td>' }
      }
    }
  }