import { useState, useEffect } from "react";
import "../css/Navbar.css";

export default function Navbar({}) {
  const [newItems, setNewItems] = useState({
    new: { title: "New Styles Added", url: "#" },
    upcoming: { title: "Upcoming Styles", url: "#" },
    feline: { title: "Fé-Linet Launch Calendar", url: "#" },
    popular: { title: "Most Popular", url: "#" },
    best: { title: "Best Sellers", url: "#" },
  });

  const [mensItems, setMensItems] = useState({
    original: { title: "Originals", url: "#" },
    feline: { title: "Fé-Linet", url: "#" },
    casual: { title: "Casual", url: "#" },
    business: { title: "Business", url: "#" },
    businessCasual: { title: "Business Casual", url: "#" },
    casualBusiness: { title: "Casual Business", url: "#" },
    everyday: { title: "Everyday Wear", url: "#" },
    someDays: { title: "Only Some Day Wear", url: "#" },
    sunday: { title: "Sunday Wear", url: "#" },
    burly: { title: "Burly", url: "#" },
    under: { title: "Under Sweaters", url: "#" },
    best: { title: "Best Sellers", url: "#" },
    popular: { title: "Most Popular", url: "#" },
  });

  const [womensItems, setWomensItems] = useState({
    original: { title: "Originals", url: "#" },
    feline: { title: "Fé-Linet", url: "#" },
    casual: { title: "Casual", url: "#" },
    business: { title: "Business", url: "#" },
    businessCasual: { title: "Business Casual", url: "#" },
    casualBusiness: { title: "Casual Business", url: "#" },
    everyday: { title: "Everyday Wear", url: "#" },
    someDays: { title: "Only Some Day Wear", url: "#" },
    sunday: { title: "Sunday Wear", url: "#" },
    sexy: { title: "Sexy", url: "#" },
    lingerie: { title: "Fé-Lingerie", url: "#" },
    best: { title: "Best Sellers", url: "#" },
    popular: { title: "Most Popular", url: "#" },
  });

  const [youthItems, setYouthItems] = useState({
    original: { title: "Originals", url: "#" },
    feline: { title: "Fé-Linet for Kids", url: "#" },
    casual: { title: "Casual", url: "#" },
    play: { title: "Playwear", url: "#" },
    shedFree: { title: "Shed Free", url: "#" },
    durable: { title: "Ultra Durable", url: "#" },
    everyday: { title: "Everyday Wear", url: "#" },
    someDays: { title: "Only Some Day Wear", url: "#" },
    sunday: { title: "Sunday Wear", url: "#" },
    stain: { title: "Pre-Stained", url: "#" },
    best: { title: "Best Sellers", url: "#" },
    popular: { title: "Most Popular", url: "#" },
  });

  const [expandNew, setExpandNew] = useState(false);
  const [expandMen, setExpandMen] = useState(false);
  const [expandWomen, setExpandWomen] = useState(false);
  const [expandYouth, setExpandYouth] = useState(false);
  const [expandDrawer, setExpandDrawer] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const expandList = (e) => {
    if (
      e.target.classList.contains("new-title") ||
      e.target.classList.contains("new-ul")
    ) {
      setExpandNew(true);
    } else if (
      e.target.classList.contains("men-title") ||
      e.target.classList.contains("men-ul")
    ) {
      setExpandMen(true);
    } else if (
      e.target.classList.contains("women-title") ||
      e.target.classList.contains("women-ul")
    ) {
      setExpandWomen(true);
    } else if (
      e.target.classList.contains("youth-title") ||
      e.target.classList.contains("youth-ul")
    ) {
      setExpandYouth(true);
    }
    setExpandDrawer(true);
  };

  const shrinkList = (e) => {
    setExpandNew(false);
    setExpandMen(false);
    setExpandWomen(false);
    setExpandYouth(false);
    setExpandDrawer(false);
  };

  const handleExpandDrawer = () => {
    if (
      expandNew === true ||
      expandMen === true ||
      expandWomen === true ||
      expandYouth === true
    ) {
    }
  };

  const handleShrinkDrawer = () => {
    setExpandDrawer(false);
  };

  const handleNavButton = () => {
    setNavClicked((navClicked) => !navClicked);
  };

  return (
    <>
      <div className="navbar">
        <i onClick={handleNavButton} className="fa-solid fa-chart-simple"></i>

        <div className="h1-5-div">
          <div className="h1-5-logo">
            <h1 className="h1-5-k">S</h1>
            <h1 className="h1-5-c">C</h1>
          </div>
          <h1 className="h1-5">Cat&nbsp;Sweaters</h1>
        </div>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div
        className={`nav-menu ${
          navClicked ? "slide-down-fade" : "slide-up-fade"
        }`}
      >
        <div
          onMouseOver={expandList}
          onMouseLeave={shrinkList}
          className="menu-title-div"
        >
          <h2
            className={`new-title menu-title ${
              expandNew ? "menu-title-active" : ""
            }`}
          >
            New & Featured
          </h2>
          {expandNew ? (
            <ul className={`new-ul menu-ul slide-down-fade`}>
              {Object.keys(newItems).map((key) => {
                const { title, url } = newItems[key];
                return (
                  <li key={key}>
                    <a href={url}>{title}</a>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
        <div
          onMouseOver={expandList}
          onMouseLeave={shrinkList}
          className="menu-title-div"
        >
          <h2
            className={`men-title menu-title ${
              expandMen ? "menu-title-active" : ""
            }`}
          >
            Men
          </h2>
          {expandMen ? (
            <ul className="men-ul menu-ul">
              {Object.keys(mensItems).map((key) => {
                const { title, url } = mensItems[key];
                return (
                  <li key={key}>
                    <a href={url}>{title}</a>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
        <div
          onMouseOver={expandList}
          onMouseLeave={shrinkList}
          className="menu-title-div"
        >
          <h2
            className={`women-title menu-title ${
              expandWomen ? "menu-title-active" : ""
            }`}
          >
            Women
          </h2>
          {expandWomen ? (
            <ul className="women-ul menu-ul">
              {Object.keys(womensItems).map((key) => {
                const { title, url } = womensItems[key];
                return (
                  <li key={key}>
                    <a href={url}>{title}</a>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
        <div
          onMouseOver={expandList}
          onMouseLeave={shrinkList}
          className="menu-title-div"
        >
          <h2
            className={`youth-title menu-title ${
              expandYouth ? "menu-title-active" : ""
            }`}
          >
            Youth
          </h2>
          {expandYouth ? (
            <ul className="youth-ul menu-ul">
              {Object.keys(youthItems).map((key) => {
                const { title, url } = youthItems[key];
                return (
                  <li key={key}>
                    <a href={url}>{title}</a>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`nav-drawer ${expandDrawer ? "nav-drawer-down" : ""}`}
      ></div>
    </>
  );
}
