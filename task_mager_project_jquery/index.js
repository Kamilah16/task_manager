$(document).ready(function() {
  $('#grey').click(function() {
    var x = $('#idd').val();
    if (x) {
      // Do NOT add the 'completed' class initially
      $('#ull').append("<li><span>" + x + "</span><span class='delete'>   Delete</span></li>");
      $('#idd').val(""); // Clear the input field
    }
  });

  // Event listener to toggle the 'completed' class (add/remove line-through on click)
  $('#ull').on('click', 'span', function() {
    $(this).toggleClass('completed'); // Toggle the 'completed' class when clicked
  });

  // Event listener for delete functionality
  $('#ull').on('click', '.delete', function() {
    $(this).parent().remove(); // Remove the parent 'li' when 'Delete' is clicked
  });
});
