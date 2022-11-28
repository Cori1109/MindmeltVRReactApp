import { useEffect, useContext } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { SELF as key } from 'constants/keys';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { getSelfDataRequest } from "./action";
import { selectSelfDataList, selectIsLoading } from "./selector";
import SubHeaderComponent from "components/SubHeaderComponent";
import SubFooterComponent from "components/SubFooterComponent";
import SelfTableComponent from 'components/SelfTableComponent';
import { Container, TopContainer, SelfContainer, TitleContainer } from "./styled";
import SelfChartComponent from 'components/SelfChartComponent';
import { AppContext } from "../../utils/AppContext";
const SelfProgressContainer = (props) => {
    const { getSelfDataRequest, selfDataList, isLoading } = props;

    let selfData = selfDataList[1];
    selfData = {...selfData, key:'selfdata'};

    var data = [];

    if(selfDataList[0]){
        let tmp3 = []
        tmp3[0] = selfDataList[0];
        let keyss = Object.keys(tmp3[0])
        let values = Object.values(tmp3[0]);
        values.shift();
        keyss.shift();
        values.shift();
        keyss.shift();
        data = values.map((v, i) => {
            return {...data, score: v, title: keyss[i]}
        });
    }

    const { userInfo } = useContext(AppContext);
    
    useInjectReducer({key, reducer});
	useInjectSaga({key, saga});

    useEffect(() => {
        getSelfDataRequest(userInfo);
    }, [getSelfDataRequest, userInfo]);

    return (
        <Container>
            <SubHeaderComponent />
            <TitleContainer>Self Progress</TitleContainer>
            <TopContainer>
                <SelfContainer>
                    <SelfTableComponent isLoading={isLoading} datas={[selfData]} />
                    <SelfChartComponent isLoading={isLoading} cData={data} />
                </SelfContainer>
                <SubFooterComponent />
            </TopContainer>
        </Container>
    );
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading(),
    selfDataList: selectSelfDataList(),
});

const mapDispatchToProps = (dispatch) => ({
    getSelfDataRequest: (data) => dispatch(getSelfDataRequest(data)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(SelfProgressContainer);