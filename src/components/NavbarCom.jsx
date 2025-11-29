import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavListArr=[
  {
    id:1,
    name:"Home",
    link:"/",
    icon:"fa-solid fa-house"
  },
  {
    id:2,
    name:"About",
    link:"/about",
    icon:"fa-solid fa-address-card"
  },
  {
    id:3,
    name:"General",
    link:"/general",
    icon:"fa-solid fa-user"
  },
   {
    id:4,
    name:"Favorites",
    link:"/favourites",
    icon:"fa-solid fa-list"
  },
]

const NavListItem=({list,handleNavClick})=>{
  const {name,link,icon}=list;
  return(
    <li
      className="nav-item px-lg-2"
      onClick={handleNavClick}
    >
      <NavLink className="nav-link" to={link}>
        <i className={`${icon} me-1 icons_anim`} />
        {name}
      </NavLink>
    </li>
  )
}

NavListItem.propTypes={
  list:PropTypes.object.isRequired,
  handleNavClick:PropTypes.func.isRequired,
}

const NavList=({handleNavClick})=>{
  return(
    <ul className="navbar-nav ms-auto xyz">
      {NavListArr.map((list)=>{
        return(
          <NavListItem 
            key={list.id} 
            list={list} 
            handleNavClick={handleNavClick}
          />
        )
      })}
    </ul>
  )
}

NavList.propTypes={
  handleNavClick:PropTypes.func.isRequired,
}

const NavbarCom = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick=() => {
    setIsNavOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <section className="nav-section">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h3 className=" d-flex justify-content-start align-items-center nav-brand-name">
            <i className="fab fa-react react_rotate"></i>
            <span className=" ms-2">News Monkey</span>
          </h3>

          <button
            className="navbar-toggler"
            title="menu toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <i className={`${isNavOpen?"fa-solid fa-times":"fa fa-bars"}`} />
          </button>

          <div className={`collapse navbar-collapse new-back-col ${isNavOpen ? "show" : ""}`}>
            <NavList
              isOpen={isNavOpen}
              handleNavClick={handleNavClick}
            />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavbarCom;
