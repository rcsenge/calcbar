var calcBar = $('#calc'); 
var value = []; 
const $errorMessage = $(".error-message");

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
    if (result === Infinity){
        $errorMessage.text("Error: Division by zero");
        $errorMessage.show();
        value = [];
        return; 
    }
    parseFloat(result);
    calcBar.text(result);
}
