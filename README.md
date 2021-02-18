# wp-tax-toggle

Automatically toggle parent/child terms of WordPress taxonomies


## How it works

On a _hireachical_ taxonomy…
- when _checking_ any term then the script will check all its parent terms as well
- when _unchecking_ any term then the script will uncheck all its children as well


## How to use

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
