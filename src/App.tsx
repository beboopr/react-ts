import AboutMe, { Person } from './AboutMe';
import Counter from './components/Counter';
import './App.css';
import Greeting from './components/Greeting';
import PhotoCard, { PhotoCardType } from './components/PhotoCard';

const me: Person = {
  name: 'Todd',
  age: 47,
  awsome: true,

}

const card: PhotoCardType = {
photo: 'https://lh3.googleusercontent.com/ogw/AOh-ky34t5fd0w9ldRPKMVEIsV_xbcSYNHplZ9kVirThwQ=s32-c-mo',
user: 'Todd',
mainPhoto: 'https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
description: 'open sing',
likeCount: 99,
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello typescript</h1>
      <AboutMe person={me} />
      <Counter />
      <Greeting firstName={'E'} lastName={'D'} />
      <PhotoCard card={card}/>
      </header>
    </div>
  );
}

export default App;
