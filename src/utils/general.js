// Date = > 'YYYY-MM-DD'
const getDateString = (date)=>{
    //const currentDate = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}


// 'YYYY-MM-DD-T = > 'MM-DD-YYYY' - eg. Dec 25 2018
const convertDateFormat = (date) => {
    let [_, year,month, day] =  /(\d{4})-(\d{1,2})-(\d{1,2})T/.exec(date);
    return `${year}-${month}-${day}`;
}

export  {getDateString,convertDateFormat};
