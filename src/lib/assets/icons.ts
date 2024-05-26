import type { IIcon } from '$lib/interfaces/icon.interface';

const icons: { [key: string]: IIcon } = {
	logo: {
		viewBox: '0 0 640 512',
		path: 'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
	},
	home: {
		viewBox: '0 0 576 512',
		path: 'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z'
	},
	projects: {
		viewBox: '0 0 640 512',
		path: 'M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z'
	},
	experience: {
		viewBox: '0 0 512 512',
		path: 'M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z'
	},
	education: {
		viewBox: '0 0 640 512',
		path: 'M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z'
	},
	resume: {
		viewBox: '0 0 384 512',
		path: 'M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z'
	},
	github: {
		viewBox: '0 0 496 512',
		path: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
	},
	linkedin: {
		viewBox: '0 0 448 512',
		path: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
	},
	facebook: {
		viewBox: '0 0 448 512',
		path: 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'
	},
	instagram: {
		viewBox: '0 0 448 512',
		path: 'M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z'
	},
	link: {
		viewBox: '0 0 640 512',
		path: 'M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z'
	},
	bars: {
		viewBox: '0 0 448 512',
		path: 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
	},
	jest: {
		viewBox: '0 0 256 283',
		path: 'M239.553 138.96c0-14.508-11.762-26.27-26.27-26.27c-.934 0-1.854.05-2.762.146l36.082-106.42H93.267l36.032 106.327a26.318 26.318 0 0 0-1.597-.052c-14.508 0-26.27 11.76-26.27 26.27c0 11.727 7.686 21.656 18.293 25.034c-5.602 9.704-12.652 18.445-20.656 25.997c-10.884 10.267-23.34 18.053-36.812 22.85c-16.04-8.24-23.614-26.565-16.78-42.632c.772-1.815 1.56-3.654 2.313-5.485c11.62-2.712 20.28-13.129 20.28-25.576c0-14.509-11.762-26.27-26.271-26.27s-26.27 11.761-26.27 26.27c0 8.897 4.426 16.756 11.193 21.508c-6.502 14.804-16.06 30.298-19.038 48.255c-3.569 21.52-.012 44.364 18.601 57.265c43.348 30.044 90.402-18.625 140.014-30.86c17.98-4.433 37.717-3.719 53.558-12.893c11.896-6.89 19.739-18.309 21.964-31.128c2.2-12.664-1.006-25.273-8.378-35.497a26.158 26.158 0 0 0 6.11-16.839"/><path fill="#fff" d="M235.5 190.198c-1.932 11.13-8.806 20.851-18.858 26.674c-9.371 5.427-20.6 7.047-32.49 8.761c-6.369.918-12.955 1.869-19.389 3.455c-17.012 4.195-33.49 12.38-49.424 20.295c-31.89 15.84-59.43 29.518-85.398 11.52c-19.022-13.183-18.144-37.575-15.928-50.941c2.054-12.384 7.607-23.789 12.976-34.818a796.621 796.621 0 0 0 2.722-5.634a32.453 32.453 0 0 0 8.443 2.118c-5.466 18.039 3.13 37.653 21.171 46.921l2.47 1.269l2.614-.931c14.263-5.08 27.406-13.23 39.063-24.229c7.535-7.109 14.014-14.974 19.339-23.378a32.8 32.8 0 0 0 4.891.367c16.559 0 30.271-12.379 32.393-28.367c6.778-.248 13.977-.25 20.794-.002c2.12 15.99 15.834 28.37 32.393 28.37c6.924 0 13.346-2.17 18.637-5.856c3.673 7.519 5.044 15.979 3.581 24.406M41.8 119.295c10.948 0 19.854 8.907 19.854 19.855a19.73 19.73 0 0 1-3.135 10.687c-3.3 5.147-8.91 8.675-15.355 9.115c-.451.03-.906.052-1.364.052c-2.44 0-4.777-.445-6.938-1.253a19.967 19.967 0 0 1-10.305-8.777a19.725 19.725 0 0 1-2.612-9.824c0-10.948 8.907-19.855 19.855-19.855m66.049 19.666c0-9.947 7.353-18.206 16.907-19.634c.962-.145 1.946-.22 2.947-.22c6.365 0 12.032 3.015 15.666 7.687a19.88 19.88 0 0 1 2.318 3.765a19.73 19.73 0 0 1 1.87 8.402c0 1.587-.192 3.13-.545 4.61c-1.935 8.1-8.842 14.292-17.306 15.144c-.658.066-1.326.1-2.003.1a19.734 19.734 0 0 1-10.76-3.181c-5.466-3.541-9.094-9.69-9.094-16.673m82.865-23.61a32.721 32.721 0 0 0-8.991 15.117a304.792 304.792 0 0 0-22.458 0c-1.68-6.232-5.162-11.73-9.847-15.906l20.545-41.542zM102.216 12.834h135.437l-31.989 94.345a32.479 32.479 0 0 0-4.051 1.255l-31.6-64.463l-31.69 64.078a32.502 32.502 0 0 0-4.226-1.139zm130.92 126.128c0 1.99-.297 3.912-.844 5.727a19.933 19.933 0 0 1-7.653 10.545a19.74 19.74 0 0 1-11.357 3.582c-9.167 0-16.9-6.247-19.174-14.707a19.803 19.803 0 0 1-.68-5.147c0-2.714.548-5.302 1.538-7.66a19.848 19.848 0 0 1 1.878-3.442c3.573-5.274 9.602-8.752 16.438-8.752c.627 0 1.245.032 1.858.09c10.08.939 17.997 9.442 17.997 19.764m12.833 0c0-15.958-11.498-29.273-26.642-32.117L255.553 0H84.318L120.6 107.061c-14.618 3.253-25.583 16.316-25.583 31.9c0 11.702 6.184 21.98 15.452 27.756c-4.458 6.642-9.744 12.892-15.802 18.608c-9.608 9.063-20.311 15.937-31.85 20.46c-11.623-7.301-16.536-21.07-11.434-33.064l.4-.94l.75-1.764c12.766-4.453 21.953-16.603 21.953-30.867c0-18.024-14.663-32.687-32.686-32.687c-18.024 0-32.687 14.663-32.687 32.687c0 9.097 3.74 17.335 9.758 23.267a552.73 552.73 0 0 1-3.418 7.11c-5.503 11.301-11.739 24.11-14.098 38.335c-4.684 28.25 2.872 50.833 21.277 63.588c11.168 7.74 22.51 10.784 33.923 10.784c21.49 0 43.23-10.797 64.493-21.359c15.313-7.605 31.148-15.47 46.789-19.328c5.82-1.435 11.808-2.299 18.148-3.213c12.573-1.814 25.573-3.689 37.089-10.358c13.349-7.732 22.486-20.702 25.07-35.582c2.218-12.775-.451-25.57-6.961-36.422a32.488 32.488 0 0 0 4.787-17.011'
	},
	mongo: {
		viewBox: '0 0 32 32',
		path: 'M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z'
	},
	node: {
		viewBox: '0 0 640 512',
		path: 'M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4 .1l14.8 8.8c.5 .3 1.3 .3 1.8 0L375 408c.5-.3 .9-.9 .9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6 .3-.9 1-.9 1.6v66.7c0 .6 .4 1.2 .9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9 .7-1.7 1.7-1.7h7.3c.9 0 1.7 .7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6 .2 .8 .8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5 .3-.4 .5-.8 .4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7 .7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7 .1 1.8 1.2 2.1 2.8 .1 1 .3 2.7 .6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3 .4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3 .7 2.5 1.8 3.2 1.1 .7 2.5 .7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6 .3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1 .7 2.6 .7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6 .3-.9 .9-.9 1.6v24.3c0 .7 .4 1.3 .9 1.6l21 12.1c.6 .3 1.3 .3 1.8 0l21-12.1c.6-.3 .9-.9 .9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3 .7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1 .7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4 .3-.7 .7-.7 1.2v13.6c0 .5 .3 1 .7 1.2l11.8 6.8c.4 .3 1 .3 1.4 0L584 235c.4-.3 .7-.7 .7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7 .1-.5 .2-1.1 .2-1.7zm-74.3-124.9l-.8 .5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z'
	},
	react: {
		viewBox: '0 0 512 512',
		path: 'M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z'
	},
	sql: {
		viewBox: '0 0 448 512',
		path: 'M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z'
	},
	svelte: {
		viewBox: '0 0 32 32',
		path: 'M27.573 4.229c-2.927-4.25-8.656-5.479-13.068-2.802l-7.464 4.745c-2.042 1.281-3.443 3.365-3.854 5.734-0.365 1.969-0.047 4.005 0.891 5.776-0.641 0.964-1.073 2.052-1.266 3.198-0.427 2.406 0.13 4.885 1.547 6.88 2.932 4.24 8.646 5.474 13.068 2.828l7.469-4.75c2.031-1.281 3.427-3.365 3.839-5.734 0.359-1.964 0.042-3.995-0.896-5.755 1.984-3.115 1.88-7.12-0.266-10.12zM13.76 28.172c-2.401 0.625-4.938-0.318-6.349-2.359-0.865-1.198-1.182-2.677-0.932-4.146l0.146-0.708 0.135-0.438 0.401 0.266c0.88 0.667 1.865 1.146 2.917 1.469l0.271 0.094-0.031 0.266c-0.026 0.37 0.083 0.786 0.297 1.104 0.438 0.63 1.198 0.932 1.932 0.734 0.161-0.052 0.318-0.104 0.453-0.188l7.438-4.745c0.375-0.24 0.615-0.599 0.708-1.026 0.083-0.443-0.026-0.896-0.266-1.255-0.443-0.615-1.198-0.891-1.932-0.708-0.161 0.057-0.333 0.12-0.469 0.203l-2.813 1.786c-2.661 1.583-6.099 0.839-7.865-1.708-0.859-1.198-1.198-2.693-0.938-4.146 0.26-1.438 1.12-2.698 2.365-3.469l7.422-4.745c0.469-0.292 0.974-0.505 1.521-0.667 2.401-0.625 4.932 0.318 6.349 2.349 1 1.406 1.281 3.203 0.76 4.849l-0.135 0.443-0.385-0.266c-0.891-0.651-1.88-1.146-2.932-1.469l-0.266-0.078 0.026-0.266c0.026-0.391-0.083-0.802-0.297-1.12-0.438-0.63-1.198-0.896-1.932-0.708-0.161 0.052-0.318 0.104-0.453 0.188l-7.453 4.786c-0.375 0.25-0.615 0.599-0.693 1.036-0.078 0.427 0.026 0.896 0.266 1.24 0.427 0.63 1.203 0.896 1.922 0.708 0.172-0.052 0.333-0.104 0.464-0.188l2.844-1.813c0.464-0.307 0.984-0.531 1.516-0.677 2.417-0.63 4.938 0.318 6.349 2.359 0.865 1.198 1.198 2.677 0.958 4.13-0.25 1.438-1.099 2.698-2.333 3.469l-7.438 4.734c-0.484 0.292-1.005 0.521-1.547 0.677z'
	},
	css: {
		viewBox: '0 0 384 512',
		path: 'M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z'
	},
	docker: {
		viewBox: '0 0 640 512',
		path: 'M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z'
	},
	html: {
		viewBox: '0 0 384 512',
		path: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z'
	},
	graphql: {
		viewBox: '0 0 24 24',
		path: 'M14.051 2.751l4.935 2.85c.816-.859 2.173-.893 3.032-.077.148.14.274.301.377.477.589 1.028.232 2.339-.796 2.928-.174.1-.361.175-.558.223v5.699c1.146.273 1.854 1.423 1.58 2.569-.048.204-.127.4-.232.581-.592 1.023-1.901 1.374-2.927.782-.196-.113-.375-.259-.526-.429l-4.905 2.832c.372 1.124-.238 2.335-1.361 2.706-.217.071-.442.108-.67.108-1.181.001-2.139-.955-2.14-2.136 0-.205.029-.41.088-.609l-4.936-2.847c-.816.854-2.171.887-3.026.07-.854-.816-.886-2.171-.07-3.026.283-.297.646-.506 1.044-.603l.001-5.699c-1.15-.276-1.858-1.433-1.581-2.584.047-.198.123-.389.224-.566.592-1.024 1.902-1.374 2.927-.782.177.101.339.228.48.377l4.938-2.85C9.613 1.612 10.26.423 11.39.088 11.587.029 11.794 0 12 0c1.181-.001 2.139.954 2.14 2.134.001.209-.03.418-.089.617zm-.515.877c-.019.021-.037.039-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146c-1.145-.283-1.842-1.442-1.558-2.588.006-.024.012-.049.019-.072l-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852c.327 1.135-.327 2.318-1.461 2.645-.026.008-.051.014-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838c-.015-.047-.027-.094-.038-.142H5.542l-.021.083 4.939 2.852c.388-.404.934-.653 1.54-.653.627 0 1.19.269 1.583.698z'
	},
	typescript: {
		viewBox: '0 0 24 24',
		path: 'M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z'
	},
	contract: {
		viewBox: '0 0 24 24',
		path: 'M11,3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V22h9ZM9,18H4V16H9Zm0-4H4V12H9Zm0-4H4V8H9ZM9,6H4V4H9ZM21,8H14a1,1,0,0,0-1,1V22h9V9A1,1,0,0,0,21,8ZM17,20H15V18h2Zm0-4H15V14h2Zm0-4H15V10h2Zm3,8H18V18h2Zm0-4H18V14h2Zm0-4H18V10h2Z'
	},
	type: {
		viewBox: '0 0 24 24',
		path: 'M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z'
	},
	csharp: {
		viewBox: '0 0 15 15',
		path: 'M7.5 0.421143L14 4.21281V10.7872L7.5 14.5788L1 10.7872V4.21281L7.5 0.421143ZM6.33156 4C4.49159 4 3 5.49159 3 7.33156V7.66844C3 9.50841 4.49159 11 6.33156 11C6.84877 11 7.35887 10.8796 7.82148 10.6483L8.22361 10.4472L7.77639 9.55279L7.37426 9.75385C7.05052 9.91573 6.69352 10 6.33156 10C5.04387 10 4 8.95613 4 7.66844V7.33156C4 6.04387 5.04387 5 6.33156 5C6.69352 5 7.05052 5.08427 7.37426 5.24615L7.77639 5.44721L8.22361 4.55279L7.82148 4.35172C7.35887 4.12042 6.84877 4 6.33156 4ZM9 5V6H8V7H9V8H8V9H9V10H10V9H11V10H12V9H13V8H12V7H13V6H12V5H11V6H10V5H9Z'
	},
	download: {
		viewBox: '0 0 24 24',
		path: 'M16.707 7.404c-.189-.188-.448-.283-.707-.283s-.518.095-.707.283l-2.293 2.293v-6.697c0-.552-.448-1-1-1s-1 .448-1 1v6.697l-2.293-2.293c-.189-.188-.44-.293-.707-.293s-.518.105-.707.293c-.39.39-.39 1.024 0 1.414l4.707 4.682 4.709-4.684c.388-.387.388-1.022-.002-1.412zM20.987 16c0-.105-.004-.211-.039-.316l-2-6c-.136-.409-.517-.684-.948-.684h-.219c-.094.188-.21.368-.367.525l-1.482 1.475h1.348l1.667 5h-13.893l1.667-5h1.348l-1.483-1.475c-.157-.157-.274-.337-.367-.525h-.219c-.431 0-.812.275-.948.684l-2 6c-.035.105-.039.211-.039.316-.013 0-.013 5-.013 5 0 .553.447 1 1 1h16c.553 0 1-.447 1-1 0 0 0-5-.013-5z'
	}
};

export default icons;