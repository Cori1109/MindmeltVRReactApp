import { Container } from "./styled";
import { Column } from "@ant-design/plots";

const TeamChartComponent = ({config, isLoading}) => {
    return (
        <Container>
            <Column {...config} />
        </Container>
    );
};

export default TeamChartComponent;