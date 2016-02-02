const ratingValues = ['swill', 'plausable', 'genius']

var ratings = () => {
  $('#ideas').delegate('.up', 'click', (e) => {
    e.preventDefault();
    var $idea = $(e.toElement).closest('div')
    var rating = $idea.children('.idea-rating')[0].innerHTML
    var newRating = ratingValues[ratingValues.indexOf(rating) + 1]

    if (rating !== 'genius') {
      updateRating($idea, newRating)
    }
  });

  $('#ideas').delegate('.down', 'click', (e) => {
    e.preventDefault();
    var $idea = $(e.toElement).closest('div')
    var rating = $idea.children('.idea-rating')[0].innerHTML
    var newRating = ratingValues[ratingValues.indexOf(rating) - 1]

    if (rating !== 'swill') {
      updateRating($idea, newRating)
    }
  });
}

var updateRating = (idea, newRating) => {
  $.ajax({
    type: 'PATCH',
    url: 'api/v1/ideas/' + idea.data('id'),
    data: {rating: newRating},
    success: () => {
      idea.find('.idea-rating').replaceWith(
        `<h5 class='idea-rating'>${newRating}</h5>`
      )
    }
  })
}
