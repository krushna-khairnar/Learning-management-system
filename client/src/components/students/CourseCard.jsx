import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const CourseCard = ({ course }) => {
  const { currency, calulateRating } = useContext(AppContext);

  const rating = (calulateRating && course) ? calulateRating(course) : 0;

  const price = course?.coursePrice ? (course.coursePrice - ((course.discount || 0) * course.coursePrice / 100)).toFixed(2) : '0.00';

  return (
    <Link
      to={`/course/${course?.id || ''}`}
      onClick={() => window.scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img className="w-full" src={course?.courseThumbnail || ''} alt={course?.courseTitle || 'Course'} />

      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">{course.educator.name}</p>
        <div className="flex items-center space-x-2">
          <p>{rating.toFixed(1)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-3.5 h-3.5"
                src={i < Math.floor(rating) ? assets.star : assets.star_blank}
                alt=""
              />
            ))}
          </div>
          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>

        <p className="text-base font-semibold text-gray-800">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
