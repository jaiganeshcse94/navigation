import React from 'react'

function Fullstack() {
  let fullstack = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      title: "Best Full-Stack Development Project Ideas in 2024 ",
      content: "By Isha Sharma",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      title: "How Long Would It Take to Be a Full Stack Developer? ",
      content: "By Meghana D",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
      title: "How does Apache work? A detailed introduction to Apache ",
      content: "By Tushar Vinocha",
    },
  ];
  return <div className="container">
        {/* <!-- Page Heading --> */}
        <div className="row">
          {
          fullstack.map((e) => {
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

export default Fullstack