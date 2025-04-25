import React from "react";
import  Button  from "./components/ui/Button";
import leaves from "/background_leaves.jpg";
import linkedIn from "/LinkedIn.png";
import portrait from "/portrait.png";
import contact from "/Contact.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div
        className="w-full max-w-6xl p-8 rounded-2xl shadow-lg bg-white bg-opacity-90 bg-cover bg-center"
        style={{ backgroundImage: `url(${leaves})` }}
      >
        <div className="text-[#9ba371] text-4xl md:text-5xl font-serif text-center mb-8">
          Micah Sonderman
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            className="w-60 md:w-80 h-auto object-cover rounded-lg mx-auto"
            alt="Portrait"
            src={portrait}
          />
          <div className="flex flex-col justify-center text-black text-lg md:text-xl font-serif leading-relaxed space-y-4">
            <p>
              As a UX leader with over 20 years of experience, including 15 years
              in healthcare, I am fascinated by the stories that data can tell and
              the lives that technology can impact. My design approach is rooted
              in empathy, leading with curiosity.
            </p>
            <p>
              The best solutions arise from understanding the people behind the
              workflows. From ambulatory care to medication management, I strive
              to create thoughtful and impactful experiences by translating
              complexity into clarity.
            </p>
            <p className="font-bold">Curious how that all comes to life?</p>
            <p>Take a look at a few of my favorite projects.</p>
            <div className="flex items-center space-x-4 mt-4">
              <Button className="w-12 h-12" color="#C7CDA8" />
              <img className="w-10 h-10 object-cover" alt="Contact" src={contact} />
              <img className="w-10 h-10 object-cover" alt="LinkedIn" src={linkedIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;