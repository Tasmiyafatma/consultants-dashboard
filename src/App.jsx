import Content from "./components/Content"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
        <Header />
        <div className="w-full flex">
          <div className="w-[10%] h-[92vh] fixed top-20 left-0 overflow-y-auto">
            <Sidebar />
          </div>
          <div className="w-[90%] bg-gray-100 p-4 ml-36">
            <Content />
          </div>
        </div>
    </>
  )
}

export default App
