<script>
	export let href;
</script>

<li class="w-16 md:w-24 lg:w-32 xl:w-48 2xl-w-72 cursor-pointer">
	<svg viewBox="0 0 172 59" class="w-40" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M1.61575 58.5895L170.395 57.8175C171.375 57.8136 172.123 57.0771 171.983 56.254L163.608 7.13015C163.497 6.48031 162.856 5.98801 162.085 5.96044L6.10277 0.159158C5.22952 0.12765 4.48167 0.690844 4.42593 1.43127L0.00393677 57.1283C-0.0610962 57.9199 0.686752 58.5895 1.62039 58.5855L1.61575 58.5895Z"
		/>
	</svg>
	<a {href} class="text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl-text-5xl font-light">
		<slot />
	</a>
</li>

<style>
	li {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	svg {
		fill: var(--curtains);
	}

	li:hover svg {
		fill: var(--purp);
	}

	a {
		color: var(--white);
		position: absolute;
		font-weight: var(--font-weight-3);
	}
</style>
