import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar/NavBar'
import Posts from './components/Posts/Posts'
import SpecificPost from './components/SpecificPost/SpecificPost';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Main from './components/Main/Main';
import Photos from './components/Photos/Photos';
import Albums from './components/Albums/Albums';

// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// const Profile = React.lazy(() => import('./components/Profile/Profile'));



function App() {

  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/posts');
  }, []);


  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route exact path="/main"
            element={<Main />}
          />
          <Route exact path="/posts"
            element={<Posts />}
          />
          <Route exact path="/posts/:postId?"
            element={<SpecificPost />}
          />
          <Route exact path="/photos"
            element={<Photos />}
          />
          <Route exact path="/gallery"
            element={<Albums />}
          />
          <Route exact path="/users"
            element={<Users />}
          />
          <Route exact path="/todos"
            element={<div>Информация о делах</div>}
          />
          <Route exact path="*"
            element={<div>404 NOT FOUND</div>}
          />
        </Routes>
      </div>
    </div>
    // <Space
    //   direction='vertical'
    //   style={{
    //     width: '100%',
    //   }}
    //   size={[0, 48]}>
    //   <Layout>
    //     <Sider className='siderStyle'>
    //       <NavBar />
    //     </Sider>
    //     <Layout>
    //       <Header className='headerStyle'>
    //         <Header />
    //       </Header>
    //       <Content className='contentStyle'>
    //         <Routes>
    //           <Route exact path="/main"
    //             element={<Main />}
    //           />
    //           <Route exact path="/posts"
    //             element={<Posts />}
    //           />
    //           <Route exact path="/posts/:postId?"
    //             element={<SpecificPost />}
    //           />
    //           <Route exact path="/photos"
    //             element={<Photos />}
    //           />
    //           <Route exact path="/gallery"
    //             element={<Albums />}
    //           />
    //           <Route exact path="/users"
    //             element={<Users />}
    //           />
    //           <Route exact path="/todos"
    //             element={<div>Информация о делах</div>}
    //           />
    //           <Route exact path="*"
    //             element={<div>404 NOT FOUND</div>}
    //           />
    //         </Routes></Content>
    //       <Footer className='footerStyle'>
    //         Footer
    //       </Footer>
    //     </Layout>
    //   </Layout>
    // </Space>
  )
}

const AppJs = (props) => {
  return <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
}

export default AppJs;