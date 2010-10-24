Drupal.behaviors.photoGallery = function(context)
{
  var w = 0;
  $('.field-item').each( function(i)
  {
    w += $(this).width() + 4;
  });
  //alert(w);
  $('.field-field-album-photos .field-items').width(w);
}