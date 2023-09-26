import TeamCard from "../../components/TeamCard";

const teamData = [
  {
    imageName: "brian.jpeg",
    name: "Brian Gorman",
    role: "Back-End Development",
    github: "GormanBrian",
    website: "https://briangorman.netlify.app/",
  },
  {
    imageName: "matthew.png",
    name: "Matthew Alfaro",
    role: "Front-End Development",
    github: "alfaro-matttthew",
    website: "https://www.alfaromatthew.com/",
  },
  {
    imageName: "holden.jpeg",
    name: "Holden Garrison",
    role: "Back-End Development",
    github: "holdenmg",
    website: "https://holdengarrison.netlify.app/",
  },
  {
    imageName: "jacob.jpeg",
    name: "Jacob Lausier",
    role: "Front-End Development",
    github: "Jlausier",
    website: "none",
  },
  {
    imageName: "arnaldo.jpeg",
    name: "Arnaldo Henriquez",
    role: "Front-End Development",
    github: "arnald18",
    website: "none",
  },
];

export default function About() {
  return (
    <div className="border p-4 rounded">
      <div className="mb-5">
        <h2 className="header">About</h2>
      </div>
      <div className="row">
        <div className="col">
          <section className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="body-font">Who We Are</h4>
                <p>
                  Welcome to LawnShark, where we bridge the gap between
                  homeowners seeking top-notch lawn care services and
                  professionals dedicated to transforming your outdoor spaces
                  into beautiful landscapes. We understand the importance of a
                  well-maintained lawn, and that&apos;s why we&apos;re here to
                  make your lawn care journey easier, more efficient, and more
                  enjoyable.
                </p>
              </div>
              <div className="col-lg-6">
                <h4 className="body-font">Our Mission</h4>
                <p>
                  Our mission is simple yet powerful: to create a seamless
                  connection between homeowners and lawn care experts. We
                  believe that everyone deserves access to high-quality,
                  reliable lawn care services, and we&apos;re committed to
                  making that happen.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-light py-5">
            <div className="container">
              <h2 className="text-center body-font">Our Dev Team</h2>
            </div>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-wrap justify-content-center">
          {teamData.map((member) => (
            <TeamCard {...member} key={member.github} />
          ))}
        </div>
      </div>
    </div>
  );
}
