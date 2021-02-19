# wp-tax-toggle

Automatically toggle parent/child terms of WordPress taxonomies


## How it works

On a _hireachical_ taxonomy…
- when **checking** any term then the script will check all its _parent terms_ as well
- when **unchecking** any term then the script will uncheck all its _child terms_ as well

![Demo](demo.gif?raw=true "Demo")

## How to use

Place `toggle-parent-child-terms.js` in `js` directory and enqueue script in your `functions.php` like this:

```php
function enqueue_admin_scripts( $hook ) {
  global $post;
  if ( $hook == 'post-new.php' || $hook == 'post.php' ) :
    wp_enqueue_script( 'toggle_parent_child_terms', get_stylesheet_directory_uri() . '/js/toggle-parent-child-terms.js', array( 'jquery' ) );
  endif;
}
add_action( 'admin_enqueue_scripts', 'enqueue_admin_scripts', 10, 1 );
```
