import React from 'react';
import Nav from '../NavComponent/Nav';

function LandingPage() {
  return (
    <div>
      <Nav />
      {/* Landing welcome section */}
      <div className="flex justify-center items-center py-[10rem]">
        <h1 className="text-[#064E3B] font-extrabold text-2xl animate-slide-in">
          Welcome to Alumunite Technical Assessment page
        </h1>
      </div>
    </div>
  );
}

export default LandingPage;
