export const date = () =>{
    const today = new Date(), 
    day = today.getDate(), 
    month = Number(today.getMonth().toString()) + 1, 
    year = today.getFullYear().toString();
    const current = year + "-" + month + "-" + day;
    return current;
};