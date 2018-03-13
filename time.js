(function () {
  // 获取当前时间
  var getUnix = function () {
    var date = new Date()
    return date.getTime()
  }
  // 获取今天零点时间
  var getTodayUnix = function () {
    var date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  }
  // 获取今年的1月1日零点时间
  var getYearUnix = function () {
    var date = new Date()
    date.setMonth(0)
    date.setDate(1)
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  }
  // 获取标准时间
  var getLastDate = function (time) {
    var date = new Date(time)
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    var day = date.getDay() < 10 ? '0' + (date.getDay()) : date.getDay()
    return date.getFullYear() + '-' + month + '-' + day
  }
  // 转换时间
  var getFormatTime = function (timestamp) {
    var now = getUnix()
    var today = getTodayUnix()
    var year = getYearUnix()
    var timer = (now - timestamp) / 1000
    var tip = ''
    if (timer <= 0) {
      tip = '刚刚'
    } else if (Math.floor(timer / 60) <= 0) {
      tip = '刚刚'
    } else if (timer < 3600) {
      tip = Math.floor(timer / 60) + '分钟前'
    } else if (timer >= 3600 && (timestamp - today >= 0)) {
      tip = Math.floor(timer / 3600) + '小时前'
    } else if (timer / 86400 <= 31) {
      tip = Math.ceil(timer / 86400) + '天前'
    } else {
      tip = getLastDate(timestamp)
    }
    return tip
  }
})()