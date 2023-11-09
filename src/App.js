
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
function App() {
 

  return (
    <div className='bg-gray-100 h-screen'>
      <TopBar/>
      <div>
    <SideBar/>
        <div className='md:w-5/6 h-screen md:absolute md:right-0 bg-gray-100'>
         
        <div className='text-2xl self-center text-center items-center justify-center  font-semibold '>
          hello world!
          
        </div>
        </div>
   
      </div>
    </div >

  );
}

export default App;


