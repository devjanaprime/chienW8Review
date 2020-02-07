$( document ).ready( onReady );

function addItem(){
    console.log( 'in addItem' );
    // get user input, place into an obj
    let objectToSend = {
        description: $( '#descriptionIn' ).val(),
        color: $( '#colorIn' ).val(),
        size: $( '#sizeIn' ).val()
    }
    console.log( 'sending:', objectToSend );
    // make AJAX POST of obj
    // update DOM
    // catch any errors
} // end addItem

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady