// コードの生成：Thunder Client

async function status_data(){
var headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
}

var response = await fetch("https://webfullsympathy.github.io/status/data.txt", { 
    method: "GET",
    headers: headersList
});

var data = await response.text();

// エラー判定
if (data.includes("<!DOCTYPE html>") || data == ""){
    data = "エラーが発生しました。"
}

document.getElementById("comment").textContent = data;
}

status_data()