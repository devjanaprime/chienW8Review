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
        getItems();
    }).catch( function( err ){
        // catch any errors
        console.log( err );
        alert( 'error getting inventory' );
    })
} // end addItem

function getItems(){
    // ajax GET to server for inventory
    $.ajax({
        type: 'GET',
        url: '/inventory'
    }).then( function( response ){
        console.log( 'back from GET:', response );
        // empty output element
        let el = $( '#inventoryOut' );
        el.empty();
        // loop through our array
        for( let i=0; i<response.length; i++){
            let item = response[i];
            // append each item to DOM
            el.append( `<li>${ item.description}: ${ item.size } & ${ item.color }</li>` );
        } //end for
    }).catch( function( err ){
        alert( 'error getting inventory' );
        console.log( err );
    })
}

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#reloadButton' ).on( 'click', getItems );
    // load existing items on page load
    getItems();
} // end onReady