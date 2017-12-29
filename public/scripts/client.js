console.log( 'js' );

$(document).ready(onReady);

function onReady() {
    console.log('jQ sourced');
    $('#requestButton').on('click', clickFunction);
}

function clickFunction() {
    console.log('received request');
    $.ajax({
        type: 'GET',
        url: '/cats',
        success: function(res) {
            console.log(res);
        }
    });
}

