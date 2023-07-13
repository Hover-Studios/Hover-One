// Custom theme code
function openDiscord() {
    try{
    require('electron').shell.openExternal('https://discord.gg/RuGAyQ7hqK')
    }catch(e){
    window.open('https://discord.gg/RuGAyQ7hqK')
    }
}


if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}
