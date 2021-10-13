const getDate = () => {
    const time = new Date();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return {
      date: `0${time.getDate()}`.slice(-2),
      month: monthNames[time.getMonth()],
      year: time.getFullYear()
    }
}
  
export default getDate