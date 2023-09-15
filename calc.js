var calcBar = $('#calc'); 
var value = []; 
var $errorMessage = $(".error-message");

function showsPalette() {
    $('ul.showPaletteList').toggle();
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

function displayCharacter(a) {
    value.push(a.toString());
    calcBar.text(value.join(''));
}

function deleteNumber(){
    value.pop(); 
}

function clearAll() {
    value = [];
    calcBar.text('');
}

function equals() {
    historyArray.push(value.join(''));
    var result = eval(value.join(''));
    if (result === Infinity){
        $errorMessage.text("Error: Division by zero");
        $errorMessage.show();
        value = [];
        return; 
    }
    value = [result.toString()]; 
    calcBar.text(value.join(''));
    value=[];
}



    
