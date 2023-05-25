
import './App.css';
import Content from './components/Content';

import Header from './components/Header';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <section >
        <Header />
        <Content/>
        <NoteList/>
      </section>
    </div>
  );
}

export default App;
