import React from 'react'
import index from'./index.css'


export const Landing = () => {
    const coursesData = {
        "Courses": [
          {
            "id": 1,
            "title": "Digital Marketing Fundamentals",
            "description": "Master the basics of SEO, SEM, and social media marketing.",
            "instructor": "Emily Johnson",
            "start_date": "2023-04-15T10:00:00Z",
            "end_date": "2023-06-15T17:00:00Z"
          },
          {
            "id": 2,
            "title": "Web Development Fundamentals",
            "description": "Learn HTML, CSS, and JavaScript basics.",
            "instructor": "John Smith",
            "start_date": "2023-05-01T08:00:00Z",
            "end_date": "2023-06-30T17:00:00Z"
          },
          {
            "id": 3,
            "title": "Startup Essentials",
            "description": "Key strategies and tactics for launching a successful startup.",
            "instructor": "Michael Thompson",
            "start_date": "2023-06-10T09:00:00Z",
            "end_date": "2023-08-10T18:00:00Z"
          },
          {
            "id": 4,
            "title": "Introduction to Stock Market",
            "description": "Understand the basics of stock markets and trading.",
            "instructor": "Robert Davis",
            "start_date": "2023-05-20T08:30:00Z",
            "end_date": "2023-07-20T16:30:00Z"
          }
        ]
      };
   
  return (
    <>
    <div className='main-div'>
        
    {coursesData["Courses"].map((course)=>(
        <div className='item' >
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p>Instructor: {course.instructor}</p>
        <p>Start Date: {course.start_date}</p>
        <p>End Date: {course.end_date}</p>
      </div>
    ))}
        
      
    
        
     
    </div>
    </>
  )
}
