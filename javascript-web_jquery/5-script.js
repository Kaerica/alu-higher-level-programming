#!/usr/bin/node
$(document).ready(function() {
    $('#add_item').click(function() {
        $('UL.my_list').append('<li>Item</li>');
    });
});
