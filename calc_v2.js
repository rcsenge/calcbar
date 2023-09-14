var calcBar = $('#calc');
var calcValue = '';

function displayCharacter(a){
    if (isNaN(a)){
        switch (a){
            case ('+'):
                calcValue+='+';
                calcBar.text('+');
                break;
            case('-'):
                calcValue += '-';
                calcBar.text('-');
                break;
            case ('*'):
                calcValue +='*';
                calcBar.text('*');
                break;
            case ('/'):
                calcValue +='/';
                calcBar.text('/');
                break;
            case ('.'):
                calcValue +='.';
                calcBar.text('.');
                break;
            case ('='):
                var result = eval(calcValue);
                calcBar.text(result);
                break;
            case ('DEL'):
                calcValue = calcValue.substring(0,calcValue.length-1);
                calcBar.text(calcValue);
                break;
            case ('ACC'):
                calcValue = '';
                calcBar.text('');
            }
    }else{
        calcValue += a;
        calcBar.text(calcValue);
    }
}

function showPalette() {
    $('ul.showList').toggle();
}
 
function changeThemeLight(){
    changeClass('body', 'dark', 'light');
}
function changeThemeDark(){
    changeClass('body', 'light', 'dark');
}
function changeClass(selector, oldClass, newClass){
    $(selector).addClass(newClass);
    $(selector).removeClass(oldClass);
}

function changeColor(color){
    $('[color]').attr('color', color);   
}


