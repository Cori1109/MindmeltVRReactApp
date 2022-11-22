import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: white;
`;

export const TitleContainer = styled.div`
    padding: 16px;
    font-size: 32px;
    font-weight: 500;
    border-bottom: 1px solid #e6e6e6;
    border-bottom-color: rgba(0,0,0,.1);
`;

export const TopContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const TeamTableContainer = styled.div`
    flex: 1;
    padding: 16px;
`;