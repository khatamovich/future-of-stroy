import { Container } from "../global.styled";

const Section = ({ children }) => (
	<section>
		<Container>{children}</Container>
	</section>
);

export default Section;
