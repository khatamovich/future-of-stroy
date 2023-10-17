import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		// Colors
		--color-dark-primary: #1c1c1c;
		--color-dark-secondary: #464646;
		--color-dark-tertiary: #555;
		--color-global: #4d5156;
		--color-light-primary: #ffffff;
		--color-light-secondary: #fafafa;
		--color-light-tertiary: #eeeeee;
		--color-beige: #e8c99b;

		// Gradients
		--gradient-accent: linear-gradient(315deg, rgb(251, 176, 52), rgb(255, 221, 0) 74%);

		// Font Families
		--ff-primary: "Montserrat";

		// Transitions
		--transition-primary: 300ms;
		--transition-secondary: 500ms;

		// Borders
		--radius-primary: .5rem;
	}	

	html {
		font-size: 62.5%;
	}

	html, body {
		min-height: 100%;
	}

	 *,
	 *::before,
	 *::after {
	 	margin: 0;
	 	padding: 0;
	 	box-sizing: border-box;
	 }

	 body {
	 	color: var(--color-global);
	 	font-family: var(--ff-primary), sans-serif;
	 	font-weight: 400;
	 	font-style: normal;
	 	font-size: 1.6rem;
		background: var(--color-dark-primary);
	 }

	 h1,
	 h2,
	 h3 {
	 	line-height: 1.25;
	 }

	 p {
	 	line-height: 1.6;
	 }

	 address {
	 	font-style: inherit;
	 }

	 a {
		 color: inherit;
		 font-size: inherit;
	 }

	 fieldset,
	 input,
	 textarea,
	 button {
		border: 0;
		outline: 0;
		color: inherit;
	 	font-size: inherit;
	 }

	 input,textarea {
	 	font-family: inherit;
	 	font-weight: inherit;
	 	font-style: inherit;
		width: 100%;
		background: none;

		&::placeholder {
			font-size: 1.5rem;
			letter-spacing: 1px;
		}
	 }

	 img {
	 	width: 100%;
	 	display: block;
	 }

	 svg {
	 	width: inherit;
	 	height: inherit;
	 	vertical-align: inherit;
	 	fill: inherit;
	 	color: inherit;
	 }
	 
	.yarl__portal_open {
		z-index: 999999999;
	}
	
	.page-loader {
		width: 100%;
		height: 100vh;
		background: #1c1c1c;
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		font-size: clamp(2rem, 3vw, 5rem);
		color: var(--color-light-primary);
		text-align: center;
		animation: animateOpacity 500ms  ease-in-out infinite alternate;

		@keyframes animateOpacity {
			from {
				opacity: .5;
				transform: scale(1.05);
			}

			to {
				transform: none;
			}
		}
	}
`;

export const Container = styled.div`
	width: 90%;
	max-width: 150rem;
	margin: 0 auto;
`;

export const LinkButton = styled.a`
	text-decoration: none;
	cursor: pointer;
	transition: var(--transition-primary);
	background: transparent;
	color: inherit;
	display: inline-block;
	letter-spacing: 2px;
	text-transform: uppercase;
	border-radius: var(--radius-primary);
`;

export default GlobalStyles;
