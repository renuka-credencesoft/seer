import React, { useState } from "react";
import Person1 from "../../assets/images/Joshua.webp";
import Person2 from "../../assets/images/Roland.webp";
import Person3 from "../../assets/images/damien.webp";

const MeetTheTeam = () => {
  const details = [
    {
      image: Person1,
      name: "Joshua D’Silva",
      designation: "Founder",
      description:
        "Josh holds an accredited mechatronics and electronics engineering degree from the Australian National University, however, he has completed projects in domains as different as materials science and computer vision. Having gained an appreciation for deep-learning’s potency early in his career, he has since focused his versatile aptitudes towards the mastery of this discipline, and currently researches, designs and implements the algorithms at the core of SEER's solutions.",
    },
    {
      image: Person2,
      name: "Roland D’Silva",
      designation: "Founder",
      description:
        "With a degree in Mathematics and Computer Science, Roland has thrived at the juncture of software engineering and Retail for 25+ years, having architected and managed complex implementations that have aligned technology with the customer's business goals. Roland has also been mentoring businesses and start-ups in their quest for market growth and is often the go-to person when complex issues need a sounding board.",
    },
    {
      image: Person3,
      name: "Damien Anselmi",
      designation: "Founder",
      description:
        "A chartered accountant by qualification, Damien brings more than 35 years of retail technology experience to Seer, specialising in Data Design, Analytics, and Data Visualization. Damien's focus at Seer is Data Development, and he is a key contributor to product strategy and design.",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 lg:gap-16 mt-10 gap-5 mx-3 lg:mx-10">
      {details.map((s) => {
        return (
          <div className="w-96 lg:px-0 px-10 ">
            <div>
              <img src={s.image} className=" w-full mx-auto" />
            </div>
            <div className="text-center mt-3">
              <p className="text-4xl font-bold">{s.name}</p>
              <p className="text-lg text-gray-700 font-semibold mt-2">
                {s.designation}
              </p>
              <p className="text-base text-gray-500 mt-2">{s.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeetTheTeam;
