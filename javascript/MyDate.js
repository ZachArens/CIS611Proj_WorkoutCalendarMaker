function getDateDaysFrom(numDays, inputDate) {

    let outputDate = new Date(inputDate.getTime());

    outputDate.setDate(outputDate.getDate() + numDays);

    return outputDate;

}

module.exports = getDateDaysFrom;
