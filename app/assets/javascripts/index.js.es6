'use strict'

$(document).ready( () => {
  loadIdeas();
  deleteButtons();
  editButtons();
  createIdea();
  ratings();
});

var renderIdea = (idea) => {
  $('#ideas').prepend(
    `<div class='idea' data-id='${idea.id}'>` +
      `<h3 class='idea-title'>${idea.title}</h3>` +
      `<a href='#' class="up"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a>` +
      `<h5 class='idea-rating'>${idea.rating}</h5>` +
      `<a href='#' class='down'><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></a>` +
      `<p class='idea-body'>${idea.body}</p>` +
      `<button class='delete-idea btn btn-sm btn-default'>Delete</button>` +
      `<button class='edit-idea btn btn-sm btn-default'>Edit</button>` +
    `</div>`
  )
};

var loadIdeas = () => {
  $.ajax({
    type: 'GET',
    url: 'api/v1/ideas',
    success: (ideas) => {
      $.each(ideas, (index, idea) => {
        renderIdea(idea);
      })
      truncateBody();
    }
  })
};

var truncateBody = () => {
  $('.idea-body').each( (index, body) => {
    if (body.innerHTML.length > 100) {
      body.innerHTML = body.innerHTML.substr(0, 100)
      $(body).append(`<br><small><a href='#'> Show More</a></small>`)
    }
  })

}
