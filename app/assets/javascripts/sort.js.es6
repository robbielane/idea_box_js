var sortIdeas = () => {
  var clickCount = 1;
  $('#sort').on('click', (e) => {
    e.preventDefault();
    var ideas = $('.idea')
    var sortedIdeas = ideas.sort( (a, b) => {
      return ratingValues.indexOf($(a).find('.idea-rating')[0].innerHTML) - ratingValues.indexOf($(b).find('.idea-rating')[0].innerHTML)
    })
    ideas.remove();
    if (clickCount % 2) {
      $('#ideas').prepend(sortedIdeas)
    } else {
      $('#ideas').prepend(sortedIdeas.reverse())
    }
    clickCount++
  })
}
