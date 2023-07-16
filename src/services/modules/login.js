import ZzkRequest from "../index";

export async function login(setSrc,navigate){
    let timer
    const cookie = localStorage.getItem('cookie')
    getLoginStatus(cookie)

    const res = await ZzkRequest.get({
        url: `/login/qr/key?timestamp=${Date.now()}`,
      })
      const key = res.data.unikey
      const res2 = await ZzkRequest.get({
        url: `/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`,
      })
        setSrc(res2.data.qrimg)
      timer = setInterval(async () => {
        const statusRes = await checkStatus(key)
        if (statusRes.code === 800) {
          alert('二维码已过期,请重新获取')
          clearInterval(timer)
        }
        if (statusRes.code === 803) {
          // 这一步会返回cookie
          clearInterval(timer)
          navigate('/home')
          await getLoginStatus(statusRes.cookie)
          localStorage.setItem('cookie', statusRes.cookie)
        }
      }, 3000)
}

async function checkStatus(key){
    const res =await ZzkRequest.get({url: `/login/qr/check?key=${key}&timestamp=${Date.now()}&noCookie=true`})
    return res
}

async function getLoginStatus(cookie = ''){
    const res =await  ZzkRequest.post({
        url: `/login/status?timestamp=${Date.now()}`,
        data: {
          cookie,
        },
      })
    return res
}


export async function selfInfo(cookie){
    const res =await  ZzkRequest.post({
        url: `/login/status?cookie=${cookie}`,
      })
      localStorage.setItem('id',res.data.account.id)
      console.log(res)
    return res
}