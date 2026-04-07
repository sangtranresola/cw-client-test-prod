import './App.css'

declare global {
  interface Window {
    __DECA_CLIENT__01j19dwrdd4nhwey9661cvwbh1: any;
  }
}

function App() {
  const openCWwbh1= () => {
    window.__DECA_CLIENT__01j19dwrdd4nhwey9661cvwbh1.chat.toggleChatWindow();
  };

  return (
    <>
      <div className='flex col gap-4 mb-4'>
        <h1>CW Client Production</h1>
      </div>
      <div className='flex col gap-4 mb-4'>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={openCWwbh1}>
          OPEN CW ID: ...wbh1 
        </button>
      </div>
    </>
  )
}

export default App
