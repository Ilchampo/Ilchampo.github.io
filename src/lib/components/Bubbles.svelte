<div class="flex flex-col h-full overflow-hidden">
	<svg class="svg-icon circle fill-primary-600" id="circle1" width="400" height="400">
		<circle cx="200" cy="200" r="200" />
	</svg>

	<svg class="svg-icon circle fill-primary-500" id="circle2" width="300" height="300">
		<circle cx="150" cy="150" r="150" />
	</svg>

	<svg class="svg-icon circle fill-primary-400" id="circle3" width="250" height="250">
		<circle cx="125" cy="125" r="125" />
	</svg>

	<svg class="svg-icon circle fill-primary-300" id="circle4" width="200" height="200">
		<circle cx="100" cy="100" r="100" />
	</svg>

	<svg class="svg-icon circle fill-primary-200" id="circle5" width="100" height="100">
		<circle cx="50" cy="50" r="40" />
	</svg>
</div>

<style>
	.circle {
		position: absolute;
		animation: float 10s infinite ease-in-out;
	}

	#circle1 {
		top: 10%;
		left: 10%;
		animation-duration: 8s;
	}

	#circle2 {
		top: 60%;
		left: 30%;
		animation-duration: 6s;
	}

	#circle3 {
		top: 30%;
		left: 50%;
		animation-duration: 10s;
	}

	#circle4 {
		top: 60%;
		left: 70%;
		animation-duration: 7s;
	}

	#circle5 {
		top: 45%;
		left: 80%;
		animation-duration: 9s;
	}

	@keyframes float {
		0% {
			transform: translateY(0) translateX(0);
		}
		50% {
			transform: translateY(-50px) translateX(20px);
		}
		100% {
			transform: translateY(0) translateX(0);
		}
	}
</style>
