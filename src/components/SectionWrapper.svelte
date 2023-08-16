<script>
  export let id;
</script>

<section id={id}>
	<slot name="top" />
	<slot />
	<slot name="bottom" />
</section>

<style>
	@import 'open-props/media';
	section {
		max-inline-size: var(--max-inline-size, var(--size-md));
		margin-inline: auto;
    background-color: var(--background-color, --curtains);
		color: var(--color, --white);
	}
</style>
