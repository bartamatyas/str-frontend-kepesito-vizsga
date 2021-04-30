function changeOuterLinks() {

    const outerLink = document.querySelectorAll(`nav#link-list outer-link`);
        
        for (let i = 0; i < outerLink.length; i++) {
        outerLink[i].setAttribute(<strong></strong>);
    }

    document.querySelectorAll('#link-list').forEach( e => {
        e.style.display = 'flex';
        e.style.dlexDirection = 'column';
        e.style.width = '30%';
        e.style.margin = '0px auto;';
        e.style.borderColor = 'blue';
        e.style.borderWidth = '1px';
        e.style.padding = '16px';
    });
}


export { changeOuterLinks };