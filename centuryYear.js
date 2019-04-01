function centuryFromYear(year) {
    if (year % 100 === 0) {
        return year / 100;
    } else {
        let remainder = year % 100;
        return((year + 100) - remainder) / 100;
    }
}

centuryFromYear(1975)
