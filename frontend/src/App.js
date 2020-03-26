import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MainNavigation from "./shared/component/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/component/UIElements/LoadingSpinner";
import Social from "./users/pages/Social";
import Search from "./search/pages/Search";
const ForgetPassword = React.lazy(() =>
  import("./users/components/ForgetPassword")
);
const ResetEmail = React.lazy(() => import("./users/components/ResetEmail"));
const Auth = React.lazy(() => import("./users/pages/Auth"));
const User = React.lazy(() => import("./users/pages/User"));
const Users = React.lazy(() => import("./users/pages/Users"));
const Friends = React.lazy(() => import("./friends/pages/Friends"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace"));
const BucketList = React.lazy(() => import("./places/components/BucketList"));

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/search' exact>
          <Search />
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>
        <Route path='/places/new' exact>
          <NewPlace />
        </Route>
        <Route path='/places/:placeId/'>
          <UpdatePlace />
        </Route>
        <Route path='/:userId/friends' exact>
          <Friends />
        </Route>
        <Route path='/:userId/bucketlist'>
          <BucketList />
        </Route>
        <Route path='/:userId/profile'>
          <User />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/social'>
          <Social />
        </Route>
        <Route path='/forgetpassword'>
          <ForgetPassword />
        </Route>
        <Route path='/resetpassword/:token'>
          <ResetEmail />
        </Route>
        <Redirect to='/auth' />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        login,
        logout,
        userId
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className='center'>
                <LoadingSpinner asOverlay />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
