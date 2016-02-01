'use strict'

$(document).ready( () => {
  loadIdeas();
  deleteButtons();
  createIdea();
  editIdea();
});

var renderIdea = (idea) => {
  $('#ideas').prepend(
    `<div class='idea' data-id='${idea.id}'>` +
      `<h3 class='idea-title'>${idea.title} <small> ${idea.rating}</small></h3>` +
      `<p class='idea-body'>${idea.body}</p>` +
      `<button class='delete-idea'>Delete</button>` +
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
    }
  })
};
