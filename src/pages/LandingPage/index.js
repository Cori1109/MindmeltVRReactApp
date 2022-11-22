import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "antd";
import { 
    Container,
} from "./styled";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import HomeContainer from "../../containers/HomeContainer";
import TeamProgressContainer from "containers/TeamProgressContainer";
import CoursesContainer from "containers/CoursesContainer";
import FeedContainer from "containers/FeedContainer";

const LandingPage = () => {


    return (
        <Container>
            <Header />
            <Layout style={{marginTop: "48px"}}>
                <Menu />
                <Layout>
                    <Layout.Content>
                        <Routes>
                            <Route path="/" element={<HomeContainer />} />
                            <Route path="/team" element={<TeamProgressContainer />} />
                            <Route path="/course" element={<CoursesContainer />} />
                            <Route path="/news" element={<FeedContainer />} />
                            <Route path="/login" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Layout.Content>
                </Layout>
            </Layout>
        </Container>
    )
}

export default LandingPage;