'use strict'

$(document).ready( () => {
  loadIdeas();
  deleteButtons();
  editButtons();
  createIdea();
  ratings();
  showForm();
  searchBox();
  sortIdeas();
});

var renderIdea = (idea) => {
  return $(
    `<div class='idea' data-id='${idea.id}'>
      <h3 class='idea-title'>${idea.title}</h3>
      <a href='#' class="up"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a>
      <h5 class='idea-rating'>${idea.rating}</h5>
      <a href='#' class='down'><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></a>
      <p class='idea-body'>${idea.body}</p>
      <button class='delete-idea btn btn-danger btn-sm btn-default'>Delete</button>
      <button class='edit-idea btn btn-info btn-sm btn-default'>Edit</button>
    </div>`
  )
};

var prependIdeas = (ideas) => {
  $('#ideas').prepend(ideas);
}

var loadIdeas = () => {
  $.getJSON('/api/v1/ideas').then(ideas => ideas.map(renderIdea))
                            .then(prependIdeas)
};

// var truncateBody = () => {
//   var bodies = {}
//   $('.idea-body').each( (index, body) => {
//     var ideaId = $(body).closest('div').data('id')
//     bodies[ideaId] = body.innerHTML
//     if (body.innerHTML.length > 100) {
//       body.innerHTML = bodies[ideaId].substr(0, 100) + '...'
//       $(body).append(`<br><small><a href='#' class='more'>Show More</a></small>`)
//
//     }
//   })
//
//   $('.more').on('click', function(e) {
//     e.preventDefault();
//     var ideaId = $(e.toElement).closest('div').data('id')
//     $(this).closest('p')[0].innerHTML = bodies[ideaId]
//   })
// }
