import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";
import { CardContext } from "../GPAcal";


const CourseForm = () => {
  const [inputData, setInputData] = useState({ name: '', code: '', grade: 'A', grade_n: 4 , credit: 1 });
  const { dispatch } = useContext(CardContext);

  function addCourse (e) {
    e.preventDefault();
    if (inputData !== "") {
      dispatch({
        type: "ADD",
        payload: {
          time: Date.now(),
          name: inputData.name,
          code : inputData.code,
          gpa : inputData.grade,
          gpa_num : inputData.grade_n,
          credit : inputData.credit,
        },
      });
    } else {
      alert("please add some ?");
    }
  }


  return (
    <div className=" md:w-11/12 p-3 rounded-lg mx-auto overflow-auto">
        <form onSubmit={addCourse} class="ff" >
          <input type="text" placeholder=" ชื่อวิชา" className="bg-blue-300 w-1/6 p-2 m-5 rounded-3xl" value={inputData.name} onChange={(e) => setInputData({ ...inputData, name: e.target.value })} />
          <input type="text" placeholder=" รหัสวิชา" className="bg-blue-300 p-2 w-1/6 m-5 rounded-3xl " value={inputData.code} onChange={(e) => setInputData({ ...inputData, code: e.target.value })} />
          <select name='grade' calss="options" className='bg-blue-300 w-1/6 m-5 p-2 rounded-3xl ' value={inputData.grade} onChange={(e) => setInputData({
             ...inputData, grade : e.target.options[e.currentTarget.selectedIndex].text, grade_n: e.target.value  })}>
               <option></option>
               {
            GRADES.map((item) => (
              <option value={item.value} >{item.name}</option>
            ))}
          </select >
          <select name='credit' className='bg-blue-300  p-2 w-1/6 m-5 rounded-3xl ' onChange={(e) => setInputData({ ...inputData, credit: e.target.value })} >
            <option ></option>
            { 
              CREDITS.map((item) => (
                <option value={item}>{item}</option>
              ))}
          </select>
          <button type='submit' className='bg-blue-300 w-auto m-5 p-2 rounded-3xl bg-blue-500 hover:bg-blue-700' >{'\u2714'}</button>
        </form>
      </div>
  );
};

export default CourseForm;
