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
    $.ajax({
        type: 'POST',
        url: '/inventory',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST:', response );
        // update DOM
    }).catch( function( err ){
        // catch any errors
        console.log( err );
        alert( 'error getting inventory' );
    })
} // end addItem

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady