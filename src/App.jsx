import { Route, Router, Routes } from 'react-router-dom';
import Layout from './Compoments/Layout';
import Home from './Compoments/Home';
import Users from './Compoments/Users';
import NoMatch from './Compoments/NoMatch';
import User from './Compoments/User';

const App = () => {
  const users = [
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="home"
          element={<Home />}
        />
        <Route
          path="users"
          element={<Users users={users} />}
        >
          <Route
            path=":userId"
            element={<User />}
          />
        </Route>
        <Route
          path="*"
          element={<NoMatch />}
        />
      </Route>
    </Routes>
  );
};

export default App;
