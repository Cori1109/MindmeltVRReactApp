import { useEffect } from 'react';
import { Spin } from "antd";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { NEWS as key } from 'constants/keys';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { getNewsRequest } from './action';
import { selectIsLoading, selectNewsList } from './selector';
import SubHeaderComponent from 'components/SubHeaderComponent';
import SubFooterComponent from 'components/SubFooterComponent';
import { Container, Title, EmptyContainer, TopContainer, SubContainer } from "./styled";

const FeedContainer = (props) => {
    const { getNewsRequest, newsList, isLoading } = props;
    useInjectReducer({key, reducer});
	useInjectSaga({key, saga});

    useEffect(() => {
        getNewsRequest();
    }, [getNewsRequest])

    return (
        <Container>
            <SubHeaderComponent />
            <Title>News Feed</Title>
            <SubContainer>
                <TopContainer>
                    {
                        isLoading
                            ? <EmptyContainer><Spin /></EmptyContainer>
                            : newsList.length > 0
                                ? <ul>
                                    {
                                        newsList.map((news, index) => 
                                            <li key={index} style={{padding: "16px", lineHeight: "20px"}}>
                                            {news.CreatedAt} - {news.Contents}
                                            </li>
                                        )
                                    }
                                </ul>          
                                : <EmptyContainer>There is no News</EmptyContainer>
                                
                    }
                </TopContainer>
                <SubFooterComponent />
            </SubContainer>
        </Container>
    );
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading(),
    newsList: selectNewsList()
});

const mapDispatchToProps = (dispatch) => ({
    getNewsRequest: (data) => dispatch(getNewsRequest(data)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);