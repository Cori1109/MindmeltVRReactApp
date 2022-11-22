import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 48px;
    background-color: #0076df;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    color: white;
`;

export const LogoImgContent = styled.img`
    max-height: 40px;
`;

export const LogoTitle = styled.span`
    color: white;
    margin-left: 4px;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
`;

export const LogoutButtonContainer = styled.div`
    padding: 2px 0;
`;