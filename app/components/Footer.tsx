import facebook from "../assets/facebook-xxl.png";
import instagram from "../assets/instagram.png";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full flex gap-2 justify-center flex-wrap text-white bg-black h-12 items-center">
      <span className="pt-1 text-lg font-bold">Follow us on social media:</span>
      <a
        href="https://www.facebook.com/profile.php?id=100087910497495"
        className="unhighlighted-link"
      >
        <img src={facebook} className="w-10 h-10"></img>
      </a>
      <a
        href="https://www.instagram.com/ai_gallery__/"
        className="unhighlighted-link"
      >
        <img src={instagram} className="w-10 h-10"></img>
      </a>
    </footer>
  );
};
