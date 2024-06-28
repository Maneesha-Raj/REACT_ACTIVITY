import Coursecard from "./Coursecard";
import courses from "../courses.json";

console.log(courses);


const CourseCards = () => {
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>

            {/* <Coursecard courseTitle={"Ethereum Developer"} description={"Ethereum Foundations"}/>
            <Coursecard/>
            <Coursecard/>
            <Coursecard/>
            <Coursecard/> */}

              {courses.map((course)=>(
                    <Coursecard key={course.id} course={course}/>
              ))}



        </div>

    </>
  )
}

export default CourseCards;