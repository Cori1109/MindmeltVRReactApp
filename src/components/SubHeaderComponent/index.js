import { Container, ImgContent } from "./styled";
import SubHeaderImg from "../../assets/img/sub-header.png";

const SubHeaderComponent = () => {
    return (
        <Container>
            <ImgContent src={SubHeaderImg} />
        </Container>
    );
};

export default SubHeaderComponent;