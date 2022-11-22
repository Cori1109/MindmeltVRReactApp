import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: white;
`;

export const Title = styled.div`
    padding: 16px;
    font-size: 32px;
    font-weight: 500;
    border-bottom: 1px solid #e6e6e6;
    border-bottom-color: rgba(0,0,0,.1);
`;

export const EmptyContainer = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;

`;

export const TopContainer = styled.div`
    flex: 1;
    font-size: 24px;
`;
    
export const SubContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;