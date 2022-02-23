var day = 10
var dayname
switch (day) {
    case 1: dayname = "sunday";
        break;
    case 2: dayname = "monday";
        break;
    case 3: dayname = "tueday";
        break;
    case 4: dayname = "wednesday";
        break;
    case 5: dayname = "Thuursday";
        break;
    case 6: dayname = "Friday";
        break;
    case 7: dayname = "Saturday";
        break;
    default: dayname="invalid"
        break;
}

console.log(dayname)