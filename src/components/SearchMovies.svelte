<script>
	import { goto } from '$app/navigation';
	import { fly ,fade } from 'svelte/transition';
	let inputValue = '';
	let active = false;
	function cancelInactive() {
		if (inputValue) {
			active = true;
		} else {
			active = false;
		}
	}
	function submitSearch() {
		goto('/search/' + inputValue);
	}
</script>

<form on:submit|preventDefault={submitSearch} class="search">
	{#if !active}
		<label 
		in:fly="{{ y: -10, duration: 500 }}"
		out:fade
		for="search_movie">
		Search movie
	</label>
	{/if}
	<input
		on:blur={cancelInactive}
		on:focus={() => (active = true)}
		bind:value={inputValue}
		name="search_movie"
		type="text"
		class={active ? 'selected' : ''}
	/>
	{#if inputValue}
		<button
		in:fly="{{ y: 0, duration: 500 }}"
		out:fade
		>Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: 30%;
		margin: 1rem;
	}
	button {
		font-size: 0.7rem;
		padding: 0rem 1rem;
		background-color: rgb(96, 110, 201);
		color: white;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: -32px;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}
	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		outline: none;
		color: #fff;
		padding: 0.5rem 0.1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-radius: 10px;
		padding: 1rem;
	}
	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #fff;
		padding: 0rem 1rem;
	}
	input.selected {
		background-color: rgb(50, 50, 50);
	}
</style>
