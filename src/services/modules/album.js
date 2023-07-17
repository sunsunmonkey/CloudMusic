import ZzkRequest from "..";

export function getAlbum(uid){
    return ZzkRequest.get({url:`/user/playlist?uid=${uid}`})
}

export function getAlbumDetail(id){
    return ZzkRequest.get({url:`/playlist/detail?id=${id}`})
}

export function gatAllSong(id){
    return ZzkRequest.get({url:`/playlist/track/all?id=${id}&limit=1000`})
}