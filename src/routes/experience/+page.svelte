<script lang="ts">
	import { isMobile } from '$lib/stores/mobile.store';
	import { fade } from 'svelte/transition';

	import JobCard from '$lib/components/JobCard.svelte';
	import images from '$lib/assets/images';
	import Bubbles from '$lib/components/Bubbles.svelte';
</script>

<svelte:head><title>Pablo Beltran | Experience</title></svelte:head>

<div class="flex flex-col gap-4 md:gap-8 py-8 md:py-16" in:fade={{ duration: 1000 }}>
	<h1 class="title text-center z-10">My <span class="gradient font-bold">Experience</span></h1>

	<div class="flex w-full gap-1 md:gap-8 z-10">
		<div class="flex flex-col flex-grow py-2 pr-2 md:pr-0">
			<div
				class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12"
			>
				{new Date().getFullYear()}
			</div>
			<span class="divider-vertical flex-grow !border-r-1 !border-primary-500" />
			<div
				class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12"
			>
				2018
			</div>
		</div>

		<div class="flex flex-col w-[95%] gap-4">
			<JobCard
				icon={images.COMPANY_QS}
				title="Software Engineer II at QS"
				contract="Full-Time"
				type="Remote"
				duration="Mar 2023 - Present"
				technologies={[
					'typescript',
					'graphql',
					'sql',
					'node',
					'react',
					'jest',
					'css',
					'html',
					'docker'
				]}
			>
				<ul class="list-disc ml-0 md:ml-4">
					<li>
						Led the project to transform student profiles into downloadable PDFs, enhancing the
						advisor experience.
					</li>
					<li>
						Directed the project to encrypt sensitive application variables, enabling secure
						injection via GCP and improving deployment times for institution instances.
					</li>
					<li>
						Led the project to implement specialized majors tailored to each institution instance,
						enhancing customization capabilities.
					</li>
				</ul>
			</JobCard>

			<JobCard
				icon={images.COMPANY_ROCKETREZ}
				title="Full Stack Developer at RocketRez"
				contract="Full-Time"
				type="Hybrid"
				duration="Jun 2022 - Mar 2023 · 10 mos"
				technologies={['csharp', 'typescript', 'sql', 'node', 'react', 'css', 'html']}
			>
				<ul class="list-disc ml-0 md:ml-4">
					<li>
						Unified multiple communication channels, including SMS, Email, and RocketPass custom
						messaging, into a single endpoint to enhance the customer experience.
					</li>
					<li>
						Improved the Rocket Office Messaging Center UI to align with modern UI/UX guidelines.
					</li>
				</ul>
			</JobCard>

			<JobCard
				icon={images.COMPANY_DEFT_CONSULTING}
				title="Full Stack Developer at Deft Consulting"
				contract="Full-Time"
				type="Remote"
				duration="Feb 2022 - Jun 2022 · 5 mos"
				technologies={['sql', 'node', 'css', 'html']}
			>
				<ul class="list-disc ml-0 md:ml-4">
					<li>
						Gathered requirements and designed a billing application solution to streamline and
						improve customers' internal business processes.
					</li>
					<li>Designed and implemented processes to effectively meet customers' requirements.</li>
				</ul>
			</JobCard>

			<JobCard
				icon={images.COMPANY_BUSINESS_IT}
				title="Full Stack Developer at Grupo Business IT"
				contract="Internship"
				type="Remote"
				duration="Feb 2022 - Jun 2022 · 5 mos"
				technologies={['sql', 'node', 'react']}
			>
				<ul class="list-disc ml-0 md:ml-4">
					<li>Developed a web application to monitor virtual machines on Azure.</li>
					<li>Created PowerBI dashboards using DAX and Azure APIs to display real-time data.</li>
					<li>Monitored client statuses to ensure compliance with OWASP requirements.</li>
				</ul>
			</JobCard>

			<JobCard
				icon={images.COMPANY_APLIOS}
				title="Full Stack Developer at Aplios"
				contract="Internship"
				type="Hybrid"
				duration="Apr 2021 - Sep 2021 · 6 mos"
				technologies={['node', 'mongo', 'react', 'jest']}
			>
				<ul class="list-disc ml-0 md:ml-4">
					<li>
						Developed backend code for the Rutaki application, aimed at improving gas and water
						delivery services in Quito, Ecuador.
					</li>
					<li>Created an admin dashboard for Rutaki optimized for desktop devices.</li>
					<li>Designed databases and user cases for Rutaki.</li>
				</ul>
			</JobCard>

			<JobCard
				icon={images.COMPANY_UDLA}
				title="Full Stack Developer at UDLA"
				contract="Internship"
				type="Remote"
				duration="Dec 2020 - Apr 2021 · 5 mos"
				technologies={['csharp', 'sql', 'html', 'css']}
			>
				<ul class="list-disc ml-0 md:ml-4">
					<li>Applied middleware and UI changes to the student payment portal.</li>
					<li>
						Improved processes in the "Carpeta en Línea" module to enhance the tutor experience.
					</li>
					<li>Performed bug fixes and implemented several UI enhancements.</li>
				</ul>
			</JobCard>

			<JobCard
				icon={images.COMPANY_BLUE_CEAN}
				title="Virtualization Consultant at Blue Ocean PE"
				contract="Internship"
				type="On-Site"
				duration="Feb 2018 - Jun 2018 · 5 mos"
				technologies={['html', 'css']}
			>
				<ul class="list-disc ml-0 md:ml-4">
					<li>Implemented virtualization solutions using Citrix and VMware.</li>
					<li>Developed the website for Blue Ocean Peru.</li>
					<li>Obtained certifications for VMware services.</li>
				</ul>
			</JobCard>
		</div>
	</div>

	{#if !$isMobile}
		<div class="flex z-0 opacity-50">
			<Bubbles />
		</div>
	{/if}
</div>
