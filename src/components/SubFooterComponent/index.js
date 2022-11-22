import { UpOutlined } from "@ant-design/icons";
import { Container, GoUpButton, ImgContent, LeftContainer, RightContainer, VersionTitle } from "./styled";
import SubFooterImg from "../../assets/img/sub-footer.png";

const SubFooterComponent = () => {
    return (
        <Container>
            <LeftContainer>
                <ImgContent src={SubFooterImg} />
                <VersionTitle>Release 1.0.0.2</VersionTitle>
            </LeftContainer>
            <RightContainer><GoUpButton><UpOutlined /></GoUpButton></RightContainer>
        </Container>
    );
};

export default SubFooterComponent;