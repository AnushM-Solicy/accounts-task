import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './components/MainContent';
import SingleAccount from './components/SingleAccount'


function App() {
   return (
    <Router >
      <Routes>
        <Route
          exact
          path="/accounts"
          element={<MainContent  />}
        />
        <Route
          path={`/accounts/:id`}
          element={<SingleAccount />}
        />
      </Routes>
    </Router>
  );
}

export default App;
