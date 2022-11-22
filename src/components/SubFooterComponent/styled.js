import styled from "styled-components";

export const Container = styled.div`
    padding: 16px;
    display: flex;
    border-top: 1px solid rgba(0,0,0,.05);
    background-color: rgba(0,0,0,.025);
`;

export const ImgContent = styled.img`
    width: 100%;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 16px;
`;
export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const VersionTitle = styled.p`
    padding-top: 16px;
    margin-bottom: 0;
`;

export const GoUpButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 10%) inset;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 0 1px rgb(0 0 0 / 10%) inset, 0 2px 4px rgb(0 0 0 / 5%);
    }
`;