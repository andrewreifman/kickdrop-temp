$(document).ready(function() {
    $.fn.fullpage({
      'verticalCentered': false,
      'css3': true,
      'slidesColor': ['#32b9b1', '#f15a5a', '#a6ce59', '#0fa6db', '#f19849'],
      'navigation': true,
      'navigationPosition': 'right',
      'anchors': ['intro', 'problem', 'themes', 'drops', 'finished', 'signup'],
      'scrollingSpeed': 0,
      'fixedElements': '.shoe-small'
    });
});