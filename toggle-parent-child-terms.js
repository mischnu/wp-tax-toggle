jQuery(document).ready( function($){
  $('.categorychecklist').on( 'click', 'input[type="checkbox"]', function(){
    if ( !$(this).is( ':checked' ) ) {
      $(this).closest( 'li' )
        .find( 'input[type="checkbox"]' )
        .prop( 'checked', false );
    } else {
      $(this).closest( 'ul.children' )
        .parentsUntil( '.categorychecklist', 'li' )
        .children( 'label' )
        .children( 'input[type="checkbox"]' )
        .prop( 'checked', true );
    }
  });
});
