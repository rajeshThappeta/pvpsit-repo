import './App.css';
import Employees from './components/Employees';
import Test from './components/Test';


function App() {

  let names = ["Kiran", "Ravi", "Bhanu", "Manasa"];

  let emps = [
    { empId: 100, name: "Vikas",image:"https://i.pinimg.com/originals/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg"},
    { empId: 200, name: "Manoj",image:"https://i.pinimg.com/474x/4a/5c/2f/4a5c2f2a828314d79432bb91afeb3ef3.jpg" },
    { empId: 300, name: "Bharat" ,image:"https://i.pinimg.com/236x/46/20/81/462081fa0902590e3b03f3cbcaecfafb.jpg"}
  ]


  return (
    <div>
      <h1 className='text-center display-2 text-success'>Welcome to React</h1>
      {/* Nest EMployees component */}
      <div className="d-flex justify-content-around">



        {
          emps.map(emp => <Employees e={emp} key={emp.empId} />)
        }

      </div>

    </div>
  )

}

export default App
