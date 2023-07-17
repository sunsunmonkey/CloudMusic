export function handleNumber(number){
    if(number>10000){
        return (Math.floor(number/1000))/10+"万"
    }
    return number
}