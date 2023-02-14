function changeColor() {
    let newCSS = 'elementStyle1.css';
    if (!document.getElementById(newCSS)) {
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.id = newCSS;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './../css/elementStyle1.css';
        head.appendChild(link);
    }
}