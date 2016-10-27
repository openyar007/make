<?php
/**
 * @package Make
 */

global $ttfmake_section_data;
?>
<?php if ( ! empty( $ttfmake_section_data['section']['config'] ) ) : ?>
	<?php global $ttfmake_overlay_id; $id = '{{{ id }}}'; $ttfmake_overlay_id = 'ttfmake-overlay-' . $id; ?>
    <?php get_template_part( '/inc/builder/core/templates/overlay', 'configuration' ); ?>

    <textarea name="ttfmake-section-json[{{ id }}]" style="display: none;"></textarea>
<?php endif; ?>
</div>