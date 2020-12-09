function getDateDaysFrom(numDays, inputDate) {

    let outputDate = inputDate;

    outputDate.setDate(outputDate.getDate() + numDays);

    return outputDate;

}

module.exports = getDateDaysFrom;
