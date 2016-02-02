var searchBox = () => {
  $('.search-box').keyup( function() {
    var searchTerm = $(this).val().toLowerCase();
    var ideas = $('.idea');
    ideas.hide();
    var filtered = ideas.filter( function() {
      var ideaText = $(this).children().text().toLowerCase();
      return ideaText.includes(searchTerm);
    })
    filtered.show();
  })
}
