export function pxTransferVW(px){
    const viewportWidth = window.innerWidth; 
    return (px / viewportWidth) * 100
}

export function vwTransferPX(vw){
    const viewportWidth = window.innerWidth; 
    return  (vw/100)*viewportWidth
}