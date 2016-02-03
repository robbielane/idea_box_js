const ratingValues = ['swill', 'plausable', 'genius']

var changeRating = (e, limit, direction) => {
  e.preventDefault();
  var idea = $(e.toElement).closest('div')
  var rating = idea.children('.idea-rating')[0].innerHTML
  if (direction === 'up') {var newRating = ratingValues[ratingValues.indexOf(rating) + 1]}
  if (direction === 'down') {var newRating = ratingValues[ratingValues.indexOf(rating) - 1]}

  if (rating !== limit) {
    updateRating(idea, newRating)
  }
}

var ratings = () => {
  $('#ideas').delegate('.up', 'click', (e) => changeRating(e, 'genius', 'up'));
  $('#ideas').delegate('.down', 'click', (e) => changeRating(e, 'swill', 'down'));
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
