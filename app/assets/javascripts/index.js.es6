'use strict'

$(document).ready( () => {
  loadIdeas();
  deleteButtons();
  editButtons();
  createIdea();
});

var renderIdea = (idea) => {
  $('#ideas').prepend(
    `<div class='idea' data-id='${idea.id}'>` +
      `<h3 class='idea-title'>${idea.title}</h3>` +
      `<h5> ${idea.rating}</h5>` +
      `<p class='idea-body'>${idea.body}</p>` +
      `<button class='delete-idea'>Delete</button>` +
      `<button class='edit-idea'>Edit</button>` +
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
