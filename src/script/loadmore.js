$(document).ready(function() {
    var itemsPerPage = 10; // Number of items to display initially
    var itemsToAdd = 5; // Number of items to add each time "Load More" is clicked
    var totalItems = $('.people').length; // Total number of items
    var currentIndex = itemsPerPage; // Current index to start loading more items

    // Initially hide all items beyond the first 'itemsPerPage'
    $('.people').slice(itemsPerPage).hide();

    // Function to load more items
    $('#loadMoreBtn').on('click', function() {
        // Show the next 'itemsToAdd' items
        $('.people').slice(currentIndex, currentIndex + itemsToAdd).slideDown();
        currentIndex += itemsToAdd;

        // Hide the load more button if all items are displayed
        if (currentIndex >= totalItems) {
            $('#loadMoreBtn').hide();
        }
    });
});