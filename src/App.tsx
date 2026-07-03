import './App.css'

// https://sangtranresola.github.io/cw-client-test-prod/

declare global {
  interface Window {
    __DECA_CLIENT__01j19dwrdd4nhwey9661cvwbh1: any;
    __DECA_CLIENT__01kwjtk51hyf11teqa4szf6z9r: any;
  }
}

function App() {
  // const openCWwbh1= () => {
    // window.__DECA_CLIENT__01j19dwrdd4nhwey9661cvwbh1.chat.toggleChatWindow();
  // };

  const sendCustomerData= () => {
    window.__DECA_CLIENT__01kwjtk51hyf11teqa4szf6z9r.chat.setVariable("userInfo", {
      "customerName": "John Doe",
      "customerId": "zxy39x4a3olq5",
    });
  };

  const sendNavigationsLog= () => {
    const pages = ['url1.com', 'url2.com', 'url3.com'];
    window.__DECA_CLIENT__01kwjtk51hyf11teqa4szf6z9r.chat.setVariable("pages", pages.join(', '));
  };

  

  return (
    <>
      <div className='flex col gap-4 mb-4'>
        <h1>CW Client Production</h1>
      </div>
      <div className='flex col gap-4 mb-4'>
        {/* <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={openCWwbh1}>
          OPEN CW ID: ...wbh1 
        </button> */}
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={sendCustomerData}>
          Send CustomerInfo
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={sendNavigationsLog}>
          Send Navigations Log
        </button>
      </div>
    </>
  )
}

export default App
