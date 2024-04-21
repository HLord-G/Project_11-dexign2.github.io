$(document).ready(function() {
    $('#peoplesearch').on('keyup', function() {
        var searchText = $(this).val().toLowerCase();
        $('.people').each(function() {
            var nameText = $(this).find('h3').text().toLowerCase();
            if (nameText.indexOf(searchText) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});