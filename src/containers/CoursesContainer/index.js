import SubHeaderComponent from 'components/SubHeaderComponent';
import SubFooterComponent from 'components/SubFooterComponent';
import { Container, Title, SubContainer, CourseContainer, List, ListItem, SubList, SubListItem } from "./styled";

const CoursesContainer = () => {
    return (
        <Container>
            <SubHeaderComponent />
            <Title>Class Chapter 42</Title>
            <SubContainer>
                <CourseContainer>
                    <List>
                        <ListItem padding><a href='/#'>Home</a></ListItem>
                        <ListItem padding><a href='/#'>Team Progress</a></ListItem>
                        <ListItem padding><a href='/#'>Self Progress</a></ListItem>
                        <ListItem>
                            <SubList background>
                                <SubListItem padding><a href='/#'>Chater 42 Hazmat Awareness ICS</a></SubListItem>
                                <SubListItem>
                                    <SubList>
                                        <SubListItem padding><a href='/#'>Chapter 42.9</a></SubListItem>
                                        <SubListItem padding><a href='/#'>Chapter 42.10</a></SubListItem>
                                        <SubListItem padding><a href='/#'>Chapter 42.11</a></SubListItem>
                                        <SubListItem>
                                            <SubList>
                                                <SubListItem padding><a href='/#'>A) Levels of  Personal Protection</a></SubListItem>
                                                <SubListItem padding><a href='/#'>1) Level D</a></SubListItem>
                                                <SubListItem padding><a href='/#'>2) Level C</a></SubListItem>
                                                <SubListItem>
                                                    <SubList>
                                                        <SubListItem padding><a href='/#'>Donning and Doffing of PPE</a></SubListItem>
                                                        <SubListItem padding><a href='/#'>VR Scenario Video</a></SubListItem>
                                                    </SubList>
                                                </SubListItem>
                                            </SubList>
                                        </SubListItem>
                                    </SubList>
                                </SubListItem>
                            </SubList>
                        </ListItem>
                        <ListItem padding><a href='/#'>News Feed</a></ListItem>
                    </List>
                </CourseContainer>
                <SubFooterComponent />
            </SubContainer>
        </Container>
    );
}

export default CoursesContainer