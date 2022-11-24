import facebook from "../assets/facebook-xxl.png";
import instagram from "../assets/instagram.png";

export const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full flex gap-2 justify-center flex-wrap text-white bg-black h-20 items-center md:h-12">
      <span className="pt-1 text-lg font-bold">Follow us on social media:</span>
      <a href="#" className="unhighlighted-link">
        <img src={facebook} className="w-10 h-10"></img>
      </a>
      <a href="#" className="unhighlighted-link">
        <img src={instagram} className="w-10 h-10"></img>
      </a>
    </footer>
  );
};
