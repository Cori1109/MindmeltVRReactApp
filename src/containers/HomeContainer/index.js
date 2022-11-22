import SubFooterComponent from "../../components/SubFooterComponent";
import SubHeaderComponent from "../../components/SubHeaderComponent";
import NewsFeedContainer from "./NewsFeedContainer";
import ProgressContainer from "./ProgressContainer";
import { Container, TopContainer } from "./styled";

const HomeContainer = () => {
    return (
        <Container>
            <TopContainer>
                <SubHeaderComponent />
                <ProgressContainer />
                <NewsFeedContainer />
            </TopContainer>
            <SubFooterComponent />
        </Container>
    );
};

export default HomeContainer;