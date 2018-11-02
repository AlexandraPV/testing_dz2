var dateOrder = new Date(),
    currentDate = new Date();

createDeadlineDate = function (daysCount) {
    dateOrder.setDate(currentDate.getDate() + daysCount);
    var day = dateOrder.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var month = dateOrder.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = dateOrder.getFullYear();

    dateOrder = month + '-' + day + '-' + year;

    return dateOrder;
};

createDeadlineTime = function () {

    var dateOrder = new Date(),
        currentTime = new Date();

    var time;
    if (dateOrder.getHours() >= 13) {
        time = (currentDate.getHours()-12).toString();
        currentTime = time + " pm";
    }else{
        time = dateOrder.getHours().toString();
        currentTime = time + " am";
    }

    return currentTime;
};

module.exports.createDeadlineDate = createDeadlineDate;
module.exports.createDeadlineTime = createDeadlineTime;