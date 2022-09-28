var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const container = document.getElementById('p-pic')
    const pic = document.getElementById('pic')
    const icon = document.getElementById('icon')
    
    let fontSize = icon.style.fontSize
    fontSize = fontSize.slice(0, -2)
    fontSize = parseInt(fontSize)
    var st = window.pageYOffset ;
    let initial_size = 300
    if (st > lastScrollTop){

        if (container.offsetWidth <250){
            container.style.position = "fixed"
            }
        pic.style.width = `${initial_size - st}px`
        pic.style.height = `${initial_size - st}px`
        container.style.width = `${initial_size - st}px`
        container.style.height = `${initial_size - st}px`
        var newFontSize = fontSize - st;
        newFontSize = newFontSize.toString() + "px";
        icon.style.fontSize = newFontSize;

    }else{
        container.style.position = "relative"
    }
}, false);

function expandMenu(id) {
    const menu = document.getElementById(id)
    menu.hidden = 'false'
}