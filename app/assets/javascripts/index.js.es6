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
  moreButtons();
});

var renderIdea = (idea) => {
  if (idea.tags) { var tags = idea.tags.map( (tag) => { return renderTag(tag.name)} ) }
  return $(
    `<div class='idea' data-id='${idea.id}'>
      <h3 class='idea-title'>${idea.title}</h3>
      <a href='#' class="up"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a>
      <h5 class='idea-rating'>${idea.rating}</h5>
      <a href='#' class='down'><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></a>
      <p class='idea-body'>${idea.body.trunc(100, true)}</p>
      <span class='idea-tags'>${tags}</span>
      <button class='delete-idea btn btn-danger btn-sm btn-default'>Delete</button>
      <button class='edit-idea btn btn-info btn-sm btn-default'>Edit</button>
    </div>`
  )
};

var prependIdeas = (ideas) => {
  $('#ideas').prepend(ideas);
}

var loadIdeas = () => {
  $.getJSON('/api/v1/ideas').then(response => response.ideas.map(renderIdea))
                            .then(prependIdeas)
};
