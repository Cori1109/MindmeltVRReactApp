import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: white;
`;

export const TopContainer = styled.div`
    flex: 1;
`;

export const SubContainer = styled.div`
    padding: 0 8px;
    display: flex;
    flex-wrap: wrap;
`;

export const FeedContainer = styled.div`
    padding: 16px;
    font-size: 24px;
`;

export const EmptyContainer = styled.div`
    width: 100%;
    padding: 16px;
`;

export const Title = styled.div`
    padding: 0 16px;
    font-size: 24px;
`;