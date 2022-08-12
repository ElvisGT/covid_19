import {HashRouter,Routes,Route} from 'react-router-dom';
import {Home} from './views/Home';
import {Search} from './views/Search';
import {About} from './views/About';
import {Stadistics} from './views/Stadistics';
import {MainLayout} from './layouts/MainLayout';
import {Favorites} from './views/Favorites';


function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/stats" element={<Stadistics />}/>
          <Route exact path="/search" element={<Search />}/>
          <Route exact path="/favorites" element={<Favorites />}/>
        </Routes>
      </MainLayout>
      </HashRouter>
  )
}

export default App;
