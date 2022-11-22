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

export const SubContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const CourseContainer = styled.div`
    flex: 1;
    padding: 16px;    
    font-size: 14px;
`;

export const List = styled.ul`
    padding-left: 2px;
    list-style-type: none
`;
export const ListItem = styled.li`
    padding: ${props => props.padding ? "6px" : "0"};
    border-color: #e6e6e6;
    &:hover {
        background: ${props => props.padding && "#f2f2f2"};
    }
`;

export const SubList = styled.ul`
    list-style-type: none;
    padding-left: 30px;
    ${props => props.background && "background: linear-gradient(rgba(0,0,0,.015),rgba(0,0,0,0)),linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.015));"}
    
`;
export const SubListItem = styled.li`
    padding: 12px 0 12px 6px;
    &:hover {
        background: ${props => props.padding && "#f2f2f2"};
    }
`;