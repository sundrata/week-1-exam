$(document).ready(onReady);
let clickCount = 0;
function onReady() {
    $('.generator').on('click', newBlock);
}
    function newBlock() {
        clickCount++;
        $('h1').append(`<div class="generated">
                <p> ${clickCount} </p>
                <button class = "swapBtn">Swap</button>
                <button class = "deleteBtn">Delete</button>
                </div>`);
      handlers();

    }
function handlers(){
    $('.swapBtn').on('click', swapEm);
    $('.deleteBtn').on('click', deleteEm);
}
function swapEm() {
    $(this).closest('.generated').toggleClass('highlight');

}

function deleteEm() {
    $(this).parent().remove();

}