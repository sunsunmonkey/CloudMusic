import ZzkRequest from "..";

export function getDetailInfo(uid){
    return ZzkRequest.get({url:`/user/detail?uid=${uid}`})
}