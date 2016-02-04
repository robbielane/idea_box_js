var editButtons = () => {
 $('#ideas').delegate('.edit-idea', 'click', (e) => {
   var $idea = $(e.toElement).parent();
   var rating = $idea.children('.idea-rating')[0].innerHTML
   addEditForm($idea);
   editSubmit($idea, rating);
 })
}

var addEditForm = (idea) => {
  $.getJSON(`/api/v1/ideas/${$(idea).data('id')}`).then( (response) => {
    idea.children().remove();
    idea.append(
      `<form id="edit-idea-form">
        <input type='text' name='title' value='${response.idea.title}' />
        <textarea name='body'>${response.idea.body}</textarea>
        <button class='edit-idea-btn btn btn-info btn-sm btn-default'>Save</button>
      </form>`
    )
  })
}

var editSubmit = (idea, rating) => {
  $('.idea').delegate('.edit-idea-btn', 'click', (e) => {
    e.preventDefault();
    var editedIdea = {
      title: idea.find('input').val(),
      body: idea.find('textarea').val()
    }
    $.ajax({
      type: 'PATCH',
      url: 'api/v1/ideas/' + idea.data('id'),
      data: editedIdea,
      success: () => {
        loadIdea(idea.data('id'))
      }
    })
  })
}

var replaceIdea = function (idea) {
  var ideaId = $(this).data('id')
  $(`.idea[data-id='${ideaId}']`).replaceWith(idea[0])
}

var loadIdea = (id) => {
  $.getJSON(`/api/v1/ideas/${id}`).then(response => renderIdea(response.idea))
                                  .then(replaceIdea)
};
