<template>

</template>
<script>
  export default {


  }
</script>
<style>
	.dropdown {
		animation: growth ease-in 0.1s;
		display: none;
	}

	.dropdown::before {
		content: "";
		border: 20px solid;
		position: absolute;
		border-color: transparent transparent #242526 transparent;
		right: 12px;
		top: -28px;
	}

	@keyframes growth {
		from {
			opacity: 0;
			transform: scale(0);
		}
		to {
			opacity: 1;
      transform: scale(1);
    }
	}
</style>