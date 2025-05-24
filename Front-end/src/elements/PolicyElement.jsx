import React from "react";

const PolicyElement = ({ policyImage, policyHeader, policyDescription }) => {
  return (
    <>
      <div className="flex-col-center gap-4">
        <img src={policyImage} alt="Policy Icon" />

        <div className="flex-col-center">
          <p className="font-[600]">{policyHeader}</p>
          <p className="text-light-gray">{policyDescription}</p>
        </div>
      </div>
    </>
  );
};

export default PolicyElement;
