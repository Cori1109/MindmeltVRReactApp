import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
`;

export const LoginContainer = styled.div`
    width: 460px;
    background-color: white;
    padding: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const LogoImgContainer = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 4px;
    margin-bottom: 16px;
    margin-top: 24px;
    `;
    
export const Title = styled.h1`
    font-size: 24px;
    margin: 16px 0;
    margin-bottom: 24px;

`;

export const RememberContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const HelpTextContent = styled.p`
    margin-bottom: ${props => props.marginBottom}px;
`;

export const HelpTextContainer = styled.div`
    width: 500px;
    padding: 12px;
`;

export const HelpHeader = styled.div`
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;