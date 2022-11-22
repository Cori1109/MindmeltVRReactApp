import { useEffect } from 'react';
import { Spin } from "antd";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { NEWS as key } from 'constants/keys';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from '../FeedContainer/reducer';
import saga from '../FeedContainer/saga';
import { getNewsRequest } from '../FeedContainer/action';
import { selectIsLoading, selectNewsList } from '../FeedContainer/selector';
import { FeedContainer, EmptyContainer, Title } from "./styled";

const NewsFeedContainer = (props) => {
    const { getNewsRequest, newsList, isLoading } = props;
    useInjectReducer({key, reducer});
	useInjectSaga({key, saga});

    useEffect(() => {
        getNewsRequest();
    }, [getNewsRequest])

    return (
        <FeedContainer>
            <Title>News Feed</Title>
            {
                isLoading
                    ? <Spin><EmptyContainer /></Spin>
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
        </FeedContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading(),
    newsList: selectNewsList()
});

const mapDispatchToProps = (dispatch) => ({
    getNewsRequest: (data) => dispatch(getNewsRequest(data)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer);