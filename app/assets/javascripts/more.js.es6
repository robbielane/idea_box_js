var moreButtons = () => {
 $('#ideas').delegate('.more', 'click', (e) => {
   e.preventDefault();
   var idea = $(e.toElement).closest('div')[0];
   getBody(idea);
 });
};


var getBody = (idea) => {
  $.ajax({
    type: 'GET',
    url: `/api/v1/ideas/${$(idea).data('id')}`,
    success: (get) => {
      $(idea).find('.idea-body').replaceWith(
        `<p class='idea-body'>${get.idea.body}</p>`
      );
    }
  });
};
