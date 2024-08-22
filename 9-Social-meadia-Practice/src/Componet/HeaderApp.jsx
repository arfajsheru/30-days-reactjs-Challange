const HeaderApp = ({ selectedItem , setselectedItem ,setSelectedLoginTab }) => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 nav-pills">
            <li onClick={() => setselectedItem("Home")}>
              <a href="#" className={`nav-link text-white  ${selectedItem === "Home" && "active"}`}>
                Home
              </a>
            </li>
            <li onClick={() => setselectedItem("Create Post")}>
              <a href="#" className={`nav-link text-white ${selectedItem === "Create Post" && "active"}`}>
                Create Post
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2" onClick={() => setSelectedLoginTab("Login")}>Login</button>
        <button type="button" className="btn btn-primary" onClick={() => setSelectedLoginTab("Sign-UP")}>Sign-up</button>
      </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
