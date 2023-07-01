<script>
	import Input from '$lib/components/Input.svelte'

	let email = ''
	let emailError = false
	let emailMessage = "Invalid email provided"

	let down = false

	$: type = down === true ? 'text':'password' 
</script>

<div class="flex flex-col w-full h-fit pt-[225px] pb-[155px] justify-center items-center space-y-1 bg-saftech-white/50">
	<h1 class="text-4xl font-poppins text-saftech-black ">Register</h1>
	<form method="POST" action="?/register"  
	class="flex flex-col w-full h-fit py-5 justify-center items-center space-y-3">
		<!-- <Input
			bind:inputValue={email}
			error={emailError}
			placeholder="Provide email"
			guidePlaceholder="email@example.com"
			message={emailMessage}
		>
			<path
				slot="icon"
				d="M23.958984 2 A 1.50015 1.50015 0 0 0 23.455078 2.1035156L2.9550781 10.103516 A 1.50015 1.50015 0 1 0 4.0449219 12.896484L24 5.109375L43.955078 12.896484 A 1.50015 1.50015 0 1 0 45.044922 10.103516L24.544922 2.1035156 A 1.50015 1.50015 0 0 0 23.958984 2 z M 9 15C7.343 15 6 16.343 6 18L6 39C6 40.657 7.343 42 9 42L20.554688 42C21.247688 43.191 22.523 44 24 44C25.477 44 26.752312 43.191 27.445312 42L39 42C40.657 42 42 40.657 42 39L42 18C42 16.343 40.657 15 39 15L30 15C27.515 15 25.5 17.015 25.5 19.5L25.5 38.5C25.5 39.328 24.828 40 24 40C23.172 40 22.5 39.328 22.5 38.5L22.5 19.5C22.5 17.015 20.485 15 18 15L9 15 z"
			/>
		</Input> -->

		<div >		
			<label for=""> Email </label>
			<input class="rounded-sm bg-saftech-white border-none  transition-all duration-500 ease-out" type="email" name="email" />
		</div>
		<div class="relative">		
			<label for=""> Password </label>
			<input class="rounded-sm bg-saftech-white border-none  transition-all duration-500 ease-out" type="{type}" name="password" />
			<button on:click|preventDefault={ () => { down = !down }} class=" {down ? 'bg-normal-blue scale-90':'bg-saftech-gray scale-70'} text-saftech-white font-bold text-sm absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-sm transition-all duration-500 ease-out"></button>
		</div>
		<div>
			<button type="submit" class="btn btn-primary">Register</button>
		</div>
	</form>
</div>
