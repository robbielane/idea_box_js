var editButtons = () => {
 $('#ideas').delegate('.edit-idea', 'click', (e) => {
   var $idea = $(e.toElement).parent();

   $idea.children('.idea-title').replaceWith(
     `<form><input type='text' name='title' value='${$idea.children('.idea-title')[0].innerHTML}' />`
   )

   $idea.children('.idea-body').replaceWith(
     `<textarea name='body'>${$idea.children('.idea-body')[0].innerHTML}</textarea></form>`
   )
 })
}
