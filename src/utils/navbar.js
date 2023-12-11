import UseUniqeID from "../hooks/UserID";
import BacktoPage from "../pages/BacktoPage";
import ContactPage from "../pages/ContactPage";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import Proportiespage from "../pages/Proportiespage";

export const navbar = [
  {
    id: UseUniqeID,
    title: "Home",
    path: "/home",
    element: <Homepage />,
    private: false,
    hidden: false,
  },
  {
    id: UseUniqeID,
    title: "Proporties",
    path: "/proporties",
    element: <Proportiespage />,
    private: false,
    hidden: false,
  },
  {
    id: UseUniqeID,
    title: "Contacts",
    path: "/contact",
    element: <ContactPage />,
    private: false,
    hidden: false,
  },
  {
    id: UseUniqeID,
    title: "BacktoPage",
    path: "/backtoPage",
    element: <BacktoPage />,
    private: false,
    hidden: true,
  },
  {
    id: UseUniqeID,
    title: "LoginPage",
    path: "/login",
    element: <Loginpage />,
    private: false,
    hidden: true,
  },
];
