export   function handleAr(ar){
    if(ar.length===1) return ar[0].name;
    let ars='';
    ar.map((item)=>{
        ars = ars+"/"+item.name
        return ''
    })
    return ars.slice(1)
}