<script>
	export let content;
	export let title;
	export let color;
	export let background;
	import SectionWrapper from './SectionWrapper.svelte';
</script>

<section id="tagline">
  <slot />
</section>

<style>
	#tagline :global(p) {
		padding-block: var(--size-9);
		color: var(--white, #fff);
		text-align: center;
		font-family: var(--font-sans);
		font-size: var(--font-size-fluid-2);
		font-style: normal;
		font-weight: var(--font-weight-7);
		line-height: var(--font-lineheight-3);
		letter-spacing: var(--font-letterspacing-2);
	}

	@media (--sm-n-above) {
	#tagline :global(p) {
		padding-block: var(--size-9);
		padding-block: var(--size-12);
		}
	}
</style>
