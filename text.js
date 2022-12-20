const axios = require("axios")

const url = "https://youtubei.googleapis.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"

const headers = {
    "Host": "www.youtube.com",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.42",
    "Accept": "*/*",
    "Origin": "https://www.youtube.com",
    "Referer": "https://www.youtube.com/",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "de,de-DE;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
}

let reqOptions = {
    url,
    method: "POST",
    // headers,
    body: {
        "context": {
            "client": {
                "hl": "en",
                "gl": "US",
                "clientName": "WEB",
                "clientVersion": "2.20220916.00.00",
                "clientScreen": "WATCH",
                "androidSdkVersion": 31
            },
            "thirdParty": {
                "embedUrl": "https://www.youtube.com/"
            }
        },
        "videoId": "yvyAQiiKIN8",
        "playbackContext": {
            "contentPlaybackContext": {
                "signatureTimestamp": 19250
            }
        },
        "racyCheckOk": true,
        "contentCheckOk": true
    }
}
let req = async ()=>{
    let rsp = await axios(reqOptions);
    console.log(rsp)
}

req()