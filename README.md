# wp-tax-toggle

Automatically toggle parent/child terms of WordPress taxonomies

Place file in js directory and enqueue script like this:

```php
function enqueue_admin_scripts( $hook ) {
  global $post;
  if ( $hook == 'post-new.php' || $hook == 'post.php' ) :
    wp_enqueue_script( 'toggle_parent_child_terms', get_stylesheet_directory_uri() . '/js/toggle-parent-child-terms.js', array( 'jquery' ) );
  endif;
}
add_action( 'admin_enqueue_scripts', 'enqueue_admin_scripts', 10, 1 );
```
