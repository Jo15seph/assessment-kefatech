import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "../src/components/auth/Login";
import Dashboard from "../src/components/pages/Dashboard";
import PageNotFound from '../src/components/pages/404/PageNotFound';


const PrivateRoute = ({children}) => {
    const isAuthenticated = !!localStorage.getItem("isAuthenticated");
    return isAuthenticated ? children : <Navigate to="/" replace={true}/>
}

const AppRouter = () => {
  
    return (
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={ <Login /> } />

          {/* Private Route */}
          <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
          }
          />
          {/* Invalid Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;