import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <DarkModeProvider>
        <AppRouter/>
      </DarkModeProvider>
    </div>
  );
}

export default App;
