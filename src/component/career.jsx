import React from 'react'

function Career() {
  let career = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp",
      title: "8 Mistakes To Avoid When You Begin a Data Science Career ",
      content: "By Srinithi Sankar",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/05/SEO-certfication.webp",
      title: "How Does an SEO Certification Elevate Your Digital Marketing Career? ",
      content: "By Srinithi Sankar",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp",
      title: "Career in Animation: Jobs, Salary, Future Scope in India (2024) ",
      content: "By Saanchi Bhardwaj",
    },
  ];
  return <div className="container">
        {/* <!-- Page Heading --> */}
        <div className="row">
          {
          career.map((e) => {
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

export default Career