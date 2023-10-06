import { Route, Routes } from 'react-router-dom';
import CreateMeet from './pages/CreateMeet';
import MeetingRoom from './pages/MeetingRoom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateMeet />} />
      <Route path="/:id" element={<MeetingRoom />} />
    </Routes>
  );
}

export default App;
