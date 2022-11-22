import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px -2px rgb(0 0 0 / 8%);
    margin: 8px;
    transition: all .1s ease-out;
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,.075);
    cursor: pointer;
    @media (min-width: 512px) {
        width: 45%;
    }
    @media (min-width: 768px) {
        width: 25%;
    }
`;

export const IconContainer = styled.div`
    background-color: ${props => props.color};
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: white;
`;

export const IconWrapper = styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: rgba(0,0,0,.1);
    text-shadow: 0 1px 1px rgb(0 0 0 / 10%)
`;
    
export const TitleContainer = styled.div`
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h3`
    margin: 0;
`;