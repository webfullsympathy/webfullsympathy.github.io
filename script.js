if(window.navigator.userAgent.toLowerCase().indexOf('msie') != -1 ||
window.navigator.userAgent.toLowerCase().indexOf('trident') != -1) {
    window.alert("IEをお使いのようですね。\n残念ながら、こちらの使用している機能に対応していません。\nですので、一つ前のページに戻ります。");
    history.back();
}