import styled from "styled-components";

const StyledField = styled.div`
	margin-bottom: 1.5em;

	&:last-child {
		margin-bottom: 0;
	}

	label {
		display: block;
		margin-bottom: 0.5em;
	}

	input {
		padding-top: 0.25em;
		padding-bottom: 0.5em;
		border-bottom: 1px solid var(--color-dark-tertiary);
	}

	textarea {
		resize: none;
		min-height: 20rem;
		padding-top: 0.5rem;
	}

	span {
		margin-top: 0.5em;
		font-size: 1.4rem;
		font-weight: 500;
		color: orangered;
		display: block;
	}
`;

export default StyledField;
