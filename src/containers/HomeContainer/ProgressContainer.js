import { ProjectOutlined, ReadOutlined } from '@ant-design/icons';
import ProgressComponent from "../../components/ProgressComponent";
import { SubContainer } from "./styled";

const ProgressContainer = () => {
    return (
        <SubContainer>
            <ProgressComponent icon={<ProjectOutlined />} title="Team Progress" color="#309FDB" link="team" />
            <ProgressComponent icon={<ReadOutlined />} title="Self Progress" color="#13B6CF" link="self" />
        </SubContainer>
    );
}

export default ProgressContainer;