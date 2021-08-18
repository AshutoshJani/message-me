// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//
// Loads all Semantic javascripts
//= require semantic-ui
//
//= require_tree .

scroll_bottom = function() {
    if($('#message-box').length > 0) {
        $('#message-box').scrollTop($('#message-box')[0].scrollHeight);
    }
}

submit_message = function() {
    $('#message_body').on('keydown', function(e) {
        if(e.keyCode == 13) {
            $('button').click();
            e.target.value = "";
        };
    });
    $(".input").on("click", function(e) {
        e.target.value = ""
    });
}

$(document).on('turbolinks:load', function() {
    // Dropdown functionality
    $('.ui.dropdown').dropdown();

    // Flah messages close functionality
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });

    submit_message(); // Function called to delete the value of in the input field 

    scroll_bottom(); // Function called to scroll to the bottom of the messages conatiner everytime the page loadss
})