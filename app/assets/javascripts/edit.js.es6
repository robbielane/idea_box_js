var editButtons = () => {
 $('#ideas').delegate('.edit-idea', 'click', (e) => {
   var $idea = $(e.toElement).parent();
   var title = $idea.children('.idea-title')[0].innerHTML
   var body = $idea.children('.idea-body')[0].innerHTML

   $idea.children('.idea-title').replaceWith(
     `<form><input type='text' name='title' value='${title}' />`
   )

   $idea.children('.idea-body').replaceWith(
     `<textarea name='body'>${body}</textarea></form>`
   )
 })
}
