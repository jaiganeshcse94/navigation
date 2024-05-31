import React from "react";
function Datascience() {
  let datascience = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024 ",
      content: "By Isha Sharma",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
      title: "12 Real-World Data Science Examples: Power Of Data Science  ",
      content: "By Lukesh S",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title: "Can A Commerce Student Do Data Science? ",
      content: "By Saakshi Priyadarshini",
    },
  ];
  return <div className="container">
        {/* <!-- Page Heading --> */}
        <div className="row">
          {
          datascience.map((e) => {
            return <div className="col-lg-4 col-sm-6 mb-4" key={e.id}>
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src={e.img}
                    alt="" height={221}
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{e.title}</a>
                  </h4>
                  <p className="card-text">
                  {e.content}
                  </p>
                </div>
              </div>
            </div>;
          })
          }
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
}

export default Datascience;
