import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 px-4 md:px-8 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl font-medium text-gray-800">
          Learn from the best
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-3">
          Discover our top-rated courses across various categories.
          From coding and design to business and wellness, our courses
          are crafted to deliver results.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {allCourses && allCourses.length > 0
            ? allCourses.slice(0, 4).map((course, index) => (
                <CourseCard key={index} course={course} />
              ))
            : <p className="col-span-full text-gray-500">No courses available</p>
          }
        </div>

        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded inline-block mt-6 hover:bg-gray-100 transition"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
