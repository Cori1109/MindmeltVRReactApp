import { useState } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { AppContext } from './utils/AppContext';
import MyRoutes from './routes';
import { selectUserInfo } from 'pages/LoginPage/selector';

const MyApp = ({userInfo}) => {
    const [showMenu, setShowMenu] = useState(false);
    console.log(userInfo)

    return (
        <AppContext.Provider value={{userInfo, showMenu, setShowMenu}}>
          <MyRoutes />
        </AppContext.Provider>
    );
};

const mapStateToProps = createStructuredSelector({
	userInfo: selectUserInfo(),
});

export default connect(mapStateToProps)(MyApp);