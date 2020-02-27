$( document ).ready(function() {
    

    $( window ).resize(function() {
        $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
    });
});