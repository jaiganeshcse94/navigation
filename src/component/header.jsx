import React ,{useState}from "react";
import { Link} from "react-router-dom"
function Header() {
    let [activeIndex,setactiveIndex]=useState(0);
    const handle__index=(i)=>{
        setactiveIndex(i);
    }
  let data = [
    {
      name: "All",
      path:"/all"
    },
    {
      name: "Full Stack Developer",
      path:"/full-stack"
    },
    {
      name: "Data science",
      path:"/data-science"
    },
    {
      name: "Cyber Security",
      path:"/cyber-security"
    },
    {
      name: "Career",
      path:"/career"
    }
  ];
  
  return (
    <>
      <div className="">
        {/* <!-- nav options --> */}
        <ul className="nav nav-pills d-flex justify-content-center mb-3 shadow-sm">
          {

          data.map((e,i) => {
            return <li className="nav-item" key={i}>
            <Link to={`${e.path}`} className={i==activeIndex?"nav-link active":"nav-link"}  onClick={()=>handle__index(i)}>{e.name}</Link>
          </li>
          })
          }
        </ul>
      </div>
    </>
  );
}

export default Header;
