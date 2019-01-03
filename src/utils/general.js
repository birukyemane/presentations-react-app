// Date = > 'YYYY-MM-DD'
const getDateString = (date)=>{
    //const currentDate = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth()+1 < 10? '0'.concat(date.getMonth()+1): date.getMonth()+1);
    const dateStrg = (date.getDate() < 10? '0'.concat(date.getDate()):date.getDate());

    return `${year}-${month}-${dateStrg}`
}


// 'YYYY-MM-DD-T = > 'MM-DD-YYYY' - eg. Dec 25 2018
const convertDateFormat = (date) => {
    let [_, year,month, day] =  /(\d{4})-(\d{1,2})-(\d{1,2})T/.exec(date);
    return `${year}-${month}-${day}`;
}

export  {getDateString,convertDateFormat};
