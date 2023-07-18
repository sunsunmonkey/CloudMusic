export function handelData(timeStamp){
    const data = new Date(timeStamp) 
    
    return data.getFullYear()+"-"+(data.getMonth()+1)+"-"+data.getDate()
}

