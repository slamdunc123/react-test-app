import './App.css';
import MyComponent from './components/MyComponent/MyComponent';
import MyNewComponent from './components/MyNewComponent/MyNewComponent';

console.log('hello this is a test')
function App() {
  return (
    <>
      <div className="App">
        <MyComponent />
        <MyNewComponent />
      </div>
    </>
  )
}

export default App;
