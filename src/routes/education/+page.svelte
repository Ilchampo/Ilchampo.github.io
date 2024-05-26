<script lang="ts">
	import { isMobile } from '$lib/stores/mobile.store';
	import { fade } from 'svelte/transition';

	import CollegeCard from '$lib/components/CollegeCard.svelte';
	import images from '$lib/assets/images';
	import Bubbles from '$lib/components/Bubbles.svelte';
</script>

<svelte:head><title>Pablo Beltran | Education</title></svelte:head>

<div class="flex flex-col gap-4 md:gap-8 py-8 md:py-16" in:fade={{ duration: 1000 }}>
	<h1 class="title text-center z-10">Learning <span class="gradient font-bold">Path</span></h1>

	<div class="flex w-full gap-1 md:gap-8 z-10">
		<div class="flex flex-col flex-grow py-2 pr-2 md:pr-0">
			<div
				class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12"
			>
				2023
			</div>
			<span class="divider-vertical flex-grow !border-r-1 !border-primary-500" />
			<div
				class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12"
			>
				2017
			</div>
		</div>

		<div class="flex flex-col w-[95%] gap-4">
			<CollegeCard
				icon={images.EDUCATION_UDLA}
				degree="Bachelor of Engineering - BE, Computer Software Engineering"
				college="Universidad de Las Américas (EC)"
				duration="Mar 2019 - Feb 2023"
				skills={[
					'Software Architecture',
					'Scrum',
					'Agile Methodologies',
					'Node.Js',
					'Software Design'
				]}
			>
				<ul class="list-disc">
					<li>
						Served as a programming tutor for a public school in Zambisa, using Scratch to teach and
						develop students' programming logic.
					</li>
					<li>Achieved a score of 9.33/10 on the ABET Capstone Project.</li>
					<li>
						Secured 5th place in the UDLA Tech 2019 engineering competition with FastChange, a
						biometric application for train ticket payments.- Achieved a score of 9.33/10 on the
						ABET Capstone Project. - Secured 5th place in the UDLA Tech 2019 engineering competition
						with FastChange, a biometric application for train ticket payments.
					</li>
				</ul>
			</CollegeCard>

			<CollegeCard
				icon={images.EDUCATION_UTEC}
				degree="Bachelor's degree, Computer Science"
				college="UTEC - Universidad de Ingeniería y Tecnología"
				duration="Jan 2017 - Mar 2019"
				skills={[
					'Leadership',
					'Algorithms',
					'Mathematics',
					'Entrepreneurship',
					'Computer Architecture'
				]}
			>
				<ul class="list-disc">
					<li>
						Proposed Talluelo, a website enabling elders and retired individuals to create and guide
						courses, as part of an entrepreneur club initiative.
					</li>
					<li>Secured first place in the UTEC Entrepreneurship project with Talluelo.</li>
					<li>
						Achieved second place in the Software and Electronics Engineering contest with an
						application designed to manage household electronics via mobile devices.
					</li>
				</ul></CollegeCard
			>
		</div>
	</div>

	{#if !$isMobile}
		<div class="flex z-0 opacity-50">
			<Bubbles />
		</div>
	{/if}
</div>
