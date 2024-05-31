import React from 'react'

function Card() {
    let all = [
        {
          id: 1,
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp",
          title: "8 Mistakes To Avoid When You Begin a Data Science Career ",
          content: "By Srinithi Sankar",
        },
        {
            id: 2,
            img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
            content: "By Tushar Vinocha",
          },
          {
            id: 3,
            img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024 ",
            content: "By Isha Sharma",
          },
          {
            id: 4,
            img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/full_stack_developer_roadmap_in_2024.webp",
            title: "Best Full-Stack Development Project Ideas in 2024 ",
            content: "By Isha Sharma",
          },
      ];
      return <div className="container">
            {/* <!-- Page Heading --> */}
            <div className="row">
              {
              all.map((e) => {
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

export default Card