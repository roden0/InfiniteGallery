import React from 'react';
import ImageContainer from './components/ImageContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section>
        <header>
          <h1>Infinite Gallery</h1>
        </header>
        <article>
          <ImageContainer />
        </article>
        <footer>

        </footer>
      </section>
    </div>
  );
}

export default App;
