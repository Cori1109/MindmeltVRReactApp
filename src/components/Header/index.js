import { useContext } from "react";
import { Popover, Button } from "antd";
import { UserOutlined, LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons';
import { AppContext } from "../../utils/AppContext";
import { 
    HeaderContainer,
    LogoContainer,
    LogoImgContent,
    LogoTitle,
    LogoutButtonContainer
} from "./styled";
import SmartVRLogo from "../../assets/img/smartvr-logo.png"

const Header = () => {
    const { userInfo, showMenu, setShowMenu } = useContext(AppContext);
    const content = (
        <LogoutButtonContainer>
            <Button icon={<LogoutOutlined />} style={{}} >Sign Out</Button>
        </LogoutButtonContainer>
    );

    return (
        <HeaderContainer>
            <LogoContainer>
                <Button 
                    type="link" 
                    icon={!showMenu ? <MenuFoldOutlined size={20} /> : <MenuUnfoldOutlined size={20} />} 
                    onClick={() => setShowMenu(!showMenu)}
                    style={{color: "white", fontSize: "24px"}}>
                        
                    </Button>
                <LogoImgContent src={SmartVRLogo} />
                <LogoTitle>Virtual Reality Training Demo</LogoTitle>
            </LogoContainer>
            <Popover placement="bottomRight" content={content} trigger="click">
                <Button type="link" icon={<UserOutlined />} style={{marginRight: "8px", color: "white"}}>{userInfo.user_id} <DownOutlined /></Button>
            </Popover>
        </HeaderContainer>
    );
};

export default Header;