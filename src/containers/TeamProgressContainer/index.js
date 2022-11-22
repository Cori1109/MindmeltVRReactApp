import { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { TEAM as key } from 'constants/keys';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { getTeamDataRequest } from "./action";
import { selectTeamDataList, selectIsLoading } from "./selector";
import SubHeaderComponent from "components/SubHeaderComponent";
import SubFooterComponent from "components/SubFooterComponent";
import TeamTableComponent from 'components/TeamTableComponent';
import { Container, TopContainer, TeamTableContainer, TitleContainer } from "./styled";
import TeamChartComponent from 'components/TeamChartComponent';

const TeamProgressContainer = (props) => {
    const { getTeamDataRequest, teamDataList, isLoading } = props;
    const defaultConfig = {
        data: [],
        xField: "type",
        yField: "value",
        seriesField: "",
        legend: false,
    }
    const [chartConfig, setChartConfig] = useState(defaultConfig);
    useInjectReducer({key, reducer});
	useInjectSaga({key, saga});

    useEffect(() => {
        getTeamDataRequest();
    }, [getTeamDataRequest]);

    useEffect(() => {
        const data = teamDataList.map((e) => { return {type: e.User_id, value: e.Overall_score} });
        const newConfig = {
            data,
            xField: "type",
            yField: "value",
            seriesField: "",
            legend: false,
        };
        newConfig.data = data;
        console.log(newConfig)
        setChartConfig(newConfig);
    }, [teamDataList])

    return (
        <Container>
            <SubHeaderComponent />
            <TitleContainer>Team Progress</TitleContainer>
            <TopContainer>
                <TeamTableContainer>
                    <TeamTableComponent isLoading={isLoading} datas={teamDataList} />
                    <TeamChartComponent isLoading={isLoading} config={chartConfig} />
                </TeamTableContainer>
                <SubFooterComponent />
            </TopContainer>
        </Container>
    );
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading(),
    teamDataList: selectTeamDataList()
});

const mapDispatchToProps = (dispatch) => ({
    getTeamDataRequest: (data) => dispatch(getTeamDataRequest(data)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamProgressContainer);