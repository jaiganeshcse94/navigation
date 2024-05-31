import React from 'react'

function Cybersecurity() {
  let cybersecure = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
      content: "By Tushar Vinocha",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide ",
      content: "By Jaishree Tomar",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More  ",
      content: "By Meghana D",
    },
  ];
  return <div className="container">
        {/* <!-- Page Heading --> */}
        <div className="row">
          {
          cybersecure.map((e) => {
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

export default Cybersecurity