import React from "react";
import MeetTheTeam from "../../components/MeetTheTeam";
import Methodology from "../../components/Methodology";

const index = () => {
  return (
    <div className="lg:mx-20 my-5">
      <p className="text-center text-2xl" style={{fontFamily:"serif"}}>
        Notwithstanding the hype around AI in recent years, quintessentially its
        ability to discern patterns and relationships across untenably large and
        complex datasets is powerful.
        <br />
        This clarity allows people to make confident decisions while alleviating
        cognitive limitations.
        <br />
        Cognisant of this and the research that has underpinned AI globally, we
        embarked on creating Stock Seer and Seer Insights.
      </p>
      <MeetTheTeam />
      <Methodology />
    </div>
  );
};

export default index;
