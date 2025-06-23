import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/my_image.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "sithirabuddhika@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Homagama, Sri Lanka",
      Link: "https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0594885,31.2584644,13z", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+94 71 752 0287",
      Link: "tel:+94717520287",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "SLIIT University",
      Link: "https://www.asu.edu.eg/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Information Technology",
      Link: "https://cis.asu.edu.eg/",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/sithira23",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/kareem-hamouda/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/kareem.ehab.37",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/kareem.ehabz/",
    },
  ],
};
