var editButtons = () => {
 $('#ideas').delegate('.edit-idea', 'click', (e) => {
   var $idea = $(e.toElement).parent();
   var title = $idea.children('.idea-title')[0].innerHTML
   var body = $idea.children('.idea-body')[0].innerHTML

   $idea.children().remove();
   $idea.append(
     `<form id="edit-idea-form">` +
       `<input type='text' name='title' value='${title}' />` +
       `<textarea name='body'>${body}</textarea>` +
       `<button class='edit-idea btn btn-sm btn-default'>Edit Idea</button>` +
     `</form>`
   )

   $idea.find('.edit-idea').on('click', (e) => {
     e.preventDefault();
     var idea = {
       title: $idea.find('input').val(),
       body: $idea.find('textarea').val()
     }
     $.ajax({
       type: 'PATCH',
       url: 'api/v1/ideas/' + $idea.data('id'),
       data: idea,
       success: () => {
         $idea.children().remove();

         $idea.append(
           `<h3 class='idea-title'>${idea.title}</h3>` +
           `<p class='idea-body'>${idea.body}</p>` +
           `<button class='delete-idea'>Delete</button>` +
           `<button class='edit-idea'>Edit</button>`
         )
       }
     })
   })
 })
}
