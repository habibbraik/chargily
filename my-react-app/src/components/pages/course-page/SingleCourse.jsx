import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from "../../../utils/customFetch";
import Footer from '../../footer/Footer';
import Loader from "../../loading/Loader";
import SecondNavbar from '../../navbar/SecondNavbar';
import First from './sections/first-section/first';
import Second from './sections/second-section/Second';
import Third from './sections/third-sectoin/Third';
const SingleCourse = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [courseData, setCourseData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
        const response = await customFetch('/courses');
        setData(response.data.courses);
    } catch (error) {
        console.error(error);
        setData([]);
    }
}
useEffect(() => {
  if(!data){
      fetchData();
  }
}, [data]);
useEffect(() => {
  if (data) {
      const course = data.find((item) => item._id === id);
      setCourseData(course);
      setLoading(false)
  }
}, [data, id]);


if(loading){
  return <div style={{ height: '100vh', display:'flex' , alignItems:'center' , justifyContent:'center',background:'white' }}><Loader/></div>
}

  return (
    <>
      <SecondNavbar/>
      <First course={courseData} courseData={courseData} />
      <Second description={courseData.description} />
      <Third schedule={courseData.schedule} />
      <Footer/>
    </>
  );
};

export default SingleCourse;

