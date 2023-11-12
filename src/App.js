import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import {filterData, apiUrl} from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  
  async function fetchData() {
    setCourses(true);
    try{
      let response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Something Fucked up !");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  );
};

export default App;
