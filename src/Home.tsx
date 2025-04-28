import { Link } from "react-router-dom";
import  Button  from "./components/ui/Button";
import leaves from "/background_leaves.jpg";
import linkedIn from "/LinkedIn.png";
import portrait from "/portrait.png";
import contact from "/Contact.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-12">
      <div
        className="w-full max-w-6xl bg-cover bg-center grid grid-rows-[auto_1fr] p-8"
        style={{ backgroundImage: `url(${leaves})` }}
      >
        <div className="flex justify-end space-x-4 mb-8">
          <Link to="/contact">
            <img className="icon-small" alt="Contact" src={contact} />
          </Link>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon-small" alt="LinkedIn" src={linkedIn} />
          </a>
        </div>
        <div className="card-primary mt-24">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-center">
            <img
              className="portrait-small md:portrait-large"
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
            </div>
            <div className="flex justify-center">
              <Button to="/case-study/care-in-motion" className="w-12 h-12" color="#C7CDA8" id="show-my-work" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;