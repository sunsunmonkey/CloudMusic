export   function handleAr(ar){
    if(ar.length===1) return ar[0].name;
    let ars='';
    ar.map((item)=>{
        console.log(item)
        ars = ars+"/"+item.name
    })
    return ars.slice(1)
}