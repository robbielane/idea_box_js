var clickCount = 1;

var sortIdeas = () => {
  $('#sort').on('click', (e) => {
    e.preventDefault();
    var ideas = $('.idea')
    var sortedIdeas = sortByRating(ideas);
    alternateSortOrder(sortedIdeas)
  })
}

var sortByRating = (ideas) => {
  return ideas.sort( (a, b) => {
    return getRating(a) - getRating(b)
  })
}

var alternateSortOrder = (ideas) => {
  ideas.remove();
  if (clickCount % 2) {
    $('#ideas').prepend(ideas)
  } else {
    $('#ideas').prepend(ideas.reverse())
  }
  clickCount++
}

var getRating = (idea) => {
  return ratingValues.indexOf($(idea).find('.idea-rating')[0].innerHTML)
}
