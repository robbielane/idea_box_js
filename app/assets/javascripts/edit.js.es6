var editButtons = () => {
 $('#ideas').delegate('.edit-idea', 'click', (e) => {
   var $idea = $(e.toElement).parent();
   var rating = $idea.children('.idea-rating')[0].innerHTML
   addEditForm($idea);
   editSubmit($idea, rating);
 })
}

var addEditForm = (idea) => {
  var title = idea.children('.idea-title')[0].innerHTML
  var body = idea.children('.idea-body')[0].innerHTML
  idea.children().remove();
  idea.append(
    `<form id="edit-idea-form">
      <input type='text' name='title' value='${title}' />
      <textarea name='body'>${body}</textarea>
      <button class='edit-idea-btn btn btn-info btn-sm btn-default'>Save</button>
    </form>`
  )
}

var editSubmit = (idea, rating) => {
  idea.find('.edit-idea-btn').on('click', (e) => {
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
        idea.children().remove();
        idea.append(
          `<h3 class='idea-title'>${editedIdea.title}</h3>
          <a href='#' class="up"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a>
          <h5 class='idea-rating'>${rating}</h5>
          <a href='#' class='down'><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></a>
          <p class='idea-body'>${editedIdea.body}</p>
          <button class='delete-idea btn btn-danger btn-sm btn-default'>Delete</button>
          <button class='edit-idea btn btn-sm btn-info btn-default'>Edit</button>`
        )
      }
    })
  })
}
