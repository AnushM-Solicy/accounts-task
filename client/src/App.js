import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/Accounts';
import SingleAccount from './components/SingleAccount'
import './App.css';

function App() {
  return (
    <Router >
      <Routes>
        <Route
          exact
          path="/accounts"
          element={<MainContent />}
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
