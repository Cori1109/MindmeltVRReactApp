import { Link } from "react-router-dom";
import { Container, IconContainer, IconWrapper, Title, TitleContainer } from "./styled";

const ProgressComponent = (props) => {
    const { color, icon, title, link } = props;
    
    return (
        <Container>
            <Link to={`/${link}`}>
                <IconContainer color={color} ><IconWrapper>{icon}</IconWrapper></IconContainer>
                <TitleContainer color={color} ><Title>{title}</Title></TitleContainer>
            </Link>
        </Container>
    );
};

export default ProgressComponent;