import { useContext, } from "react";
import { useNavigate } from "react-router-dom";
import { Layout,  Menu as DefaultMenu } from "antd";
import { HomeOutlined, ProjectOutlined, ReadOutlined, FileOutlined } from '@ant-design/icons';
import { AppContext } from "../../utils/AppContext";

const Menu = () => {
    const { showMenu } = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <Layout.Sider trigger={null} collapsible collapsed={showMenu}>
            <DefaultMenu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['']}
                onSelect={(e) => { navigate(`/${e.key}`)}}
                items={[
                    {
                        key: '',
                        icon: <HomeOutlined />,
                        label: 'Home',                        
                    },
                    {
                        key: 'team',
                        icon: <ProjectOutlined />,
                        label: 'Team Progress',
                    },
                    {
                        key: 'self',
                        icon: <ReadOutlined />,
                        label: 'Self Progress',
                    },
                    {
                        icon: <FileOutlined />,
                        label: 'Courses',
                        children: [
                            {
                                key: 'course',
                                label: 'Chapter 42 Hazmat Awareness ICS',
                            }
                        ]
                    },
                    {
                        key: 'news',
                        icon: <FileOutlined />,
                        label: 'News Feed',
                    },
                ]}
            />
        </Layout.Sider>
    );
}

export default Menu;