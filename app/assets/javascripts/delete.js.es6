var deleteButtons = () => {
 $('#ideas').delegate('.delete-idea', 'click', (e) => {
   var $idea = $(e.toElement).parent();
   deleteIdea($idea);
 })
}

var deleteIdea = (idea) => {
  $.ajax({
    type: 'DELETE',
    url: '/api/v1/ideas/' + idea.data('id'),
    success: () => {
      idea.remove();
    }
  })
}
