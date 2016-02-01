$(document).ready(function() {
  // Create nested lists for table of contents
  var tocTargets = 'h1, h2, h3';

  var $listTemplate = $('<ul class="nav"></ul>');
  var $linkTemplate = $('<li><a></a></li>');
  var state = [];
  $('article.post').find(tocTargets).each(function(i) {
    var $self = $(this);
    var level = $self.prop('tagName').substring(1); // elements are all header elements, i.e. H1
    // Create / collapse lists
    if (level > state.length) { // assuming that we will never skip a heading level
      while (level > state.length) {
        state.push($listTemplate.clone().addClass('level-' + level));
      }
    } else if (level < state.length) {
      while (level < state.length) {
        // Add to last li of previous level.
        var $last = state.pop();
        state[state.length-1].find('li').last().append($last);
      }
    }

    // Assign ID to this heading
    // TODO: naming convention for ids
    var id = i + '-' + $self.text().toLowerCase();
    id = id.replace(/ /g, '-');
    $self.attr('id', id);

    // Generate link to this heading
    var $link = $linkTemplate.clone();
    $link.find('a').first()
      .attr('href', '#' + id)
      .text($self.text());
    state[state.length-1].append($link);
  });
  // Collapse extra lists
  while (state.length > 1) {
    var $last = state.pop()
    state[state.length-1].find('li').last().append($last);
  }

  $('.js-toc').html(state[0]);

  // Refresh for dynamically-added content
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  });
});