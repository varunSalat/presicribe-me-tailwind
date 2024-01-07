import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").slice(1);
  return (
    <div className="w-full overflow-x-hidden">
      <ul className="flex gap-1">
        {pathNames.map((path, index) => (
          <li key={index}>
            <p
              className={`text-md ${
                pathNames.length - 1 === index
                  ? "text-primary"
                  : "text-black-3 "
              }`}
            >
              <NavLink
                to={`/${path}`}
                className={"transition-three-all hover:text-primary"}
              >
                {path.charAt(0).toUpperCase() + path.substring(1)}
              </NavLink>
              <span
                className={`text-black-3 ${
                  pathNames.length - 1 === index ? "hidden" : "visible"
                }`}
              >
                {" "}
                /
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
