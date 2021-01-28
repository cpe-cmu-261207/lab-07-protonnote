import { createContext, useEffect, useReducer,useState } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";
import Link from 'next/link'

export const CardContext = createContext({});



function App() {
  const initialState = {myTable: []}
  const [GPA, setGPA] = useState(0.00);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          myTable: [...state.myTable, action.payload],
        };
      case "SET":
        return {
          ...state,
          myTable: action.payload,
        };
      case "DELETE":
        return {
          ...state,
          myTable: state.myTable.filter((objj) => objj.time !== action.payload),
        };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchTodos() {
    const localTodos = localStorage.getItem("myTable");
    if (localTodos) {
      dispatch({
        type: "SET",
        payload: JSON.parse(localTodos),
      });
    }
  }

  function cal_GPA(cc){
    var cal_gpa = 0
    var cal_cre = 0
    cc.forEach((obj) => {
      if (obj.gpa !== 'W'){
        cal_gpa += Number(obj.gpa_num) * Number(obj.credit)
        cal_cre += Number(obj.credit)
      }
    })
    var final_cal = Number(cal_gpa)/Number(cal_cre)
    console.log(final_cal)
    if(Number(final_cal) >= 0)
      setGPA(Number(final_cal.toPrecision(3)))
    else setGPA(0.00)
  }

  useEffect(fetchTodos, []);

  useEffect(() => {
    localStorage.setItem("myTable", JSON.stringify(state.myTable));
    cal_GPA(state.myTable)
  }, [state.myTable]); 



  return (
    <CardContext.Provider value={{ state, dispatch }}>
      <header>
            <nav>
              <center>
                  <div class="topnav">
                    <Link href="/">
                      <button><h4><belgano>Home</belgano></h4></button>
                    </Link>
                    <Link href="Gallery">
                      <button><h4><belgano>Gallery</belgano></h4></button>
                    </Link>
                    <Link href="Contact">
                      <button><h4><belgano>Contact</belgano></h4></button>
                    </Link>
                    <Link href="GPAcal">
                      <button><h4><belgano>GPA calculator</belgano></h4></button>
                    </Link>
                    <Link href="post">
                      <button><h4><belgano>Posts</belgano></h4></button>
                    </Link>
                  </div>
              </center>
            </nav>
          </header>
      <div className="container mx-auto h-screen">
        <center><h1 >GPA Calculator</h1></center>
        <center>
          <CourseCard myTable ={state.myTable} />

          <CourseForm />
        </center>
      </div>
      <center>
        <div>
          <h2>{GPA.toFixed(2)}</h2>
        </div>
      </center>
    </CardContext.Provider>
  
  );
}

export default App;
