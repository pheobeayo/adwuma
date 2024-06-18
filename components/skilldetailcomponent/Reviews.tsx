import React from "react";
import ProfilePhoto from "../../assets/skill-detail/profilephoto.svg";
import ProfilePhoto2 from "../../assets/skill-detail/profilephoto2.svg";
import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      image: ProfilePhoto,
      name: "John Doe",
      review:
        "Alicia did an amazing job with our logo. Highly recommend her services!",
      ratings: 4.4,
      date: "May 15, 2024",
    },
    {
      image: ProfilePhoto2,
      name: "Jerry Khan",
      review: "Great work, very professional and quick turnaround.",
      ratings: 4.8,
      date: "May 10, 2024",
    },
  ];
  return (
    <div className="pt-11">
      <div>
        <p className="text-sm text-[#888888] font-semibold">Reviews</p>
      </div>

      {reviews.map((review, index) => (
        <div key={index} className="bg-[#F8F8F8] mt-5 px-2 py-3">
          <div className="flex justify-between">
            <div>
              <p className="text-xs">
                Ratings:{" "}
                <span className="text-[#6A93FF]">{review.ratings}</span>
              </p>
              {/* star image */}
            </div>
            <div>
              <p className="text-xs">{review.date}</p>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-sm font-semibold text-[#3D3D3D]">
              {review.review}
            </p>

            <div className="flex space-x-2 pt-3 items-center">
              <Image src={review.image} alt="profile_photo" />
              <p className="text-sm font-semibold text-[#3D3D3D]">
                {review.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
