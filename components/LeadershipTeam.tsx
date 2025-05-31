import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    id: 1,
    image: '/images/lt-item1.png',
    name: 'Dr. (Prof) U S Vishal Rao, MS, FRCS (Glasgow), FACS (USA)',
    linkedin: 'https://www.linkedin.com/in/drvishalrao/'
  },
  {
    id: 2,
    image: '/images/lt-item2.png',
    name: 'Dr Deepak Saini, PhD',
    linkedin: 'https://www.linkedin.com/in/deepakksaini/?originalSubdomain=in'
  },
  {
    id: 3,
    image: '/images/lt-item3.png',
    name: 'Darshit Patel',
    linkedin: 'https://www.linkedin.com/in/darshitlongevity/'
  }
]

export default function LeadershipTeam() {
  return (
    <section className="leadership-team-wrapper page-spacing page-width">
      <div className="lt-heading-wrapper heading-wrapper">
        <h2 className="leadership-team-title section-title">Leadership Team</h2>
        <p className="lt-para">
          Our team is a dynamic assembly of experts, passionate about pushing the boundaries of science
          to uncover new therapeutic strategies.
        </p>
      </div>
      <div className="lt-items-wrapper">
        {teamMembers.map((member) => (
          <div key={member.id} className="lt-item">
            <div className="lt-item-inner">
              <div className="lt-item-img">
                <Image
                  src={member.image}
                  width={300}
                  height={300}
                  alt={member.name}
                />
              </div>
              <p className="lt-item-text">{member.name}</p>
              <Link href={member.linkedin} target="_blank" className="linkedin-icon">
                <svg
                  className="linkedin-icon-inner"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.446 3.75914V5.24408C7.75696 4.7704 8.18559 4.38558 8.68992 4.12728C9.19425 3.86898 9.75701 3.74605 10.3231 3.77052C13.3463 3.77052 14 5.66059 14 8.11944V13.1255H11.1999V8.68734C11.1999 7.62854 10.9864 6.26699 9.33782 6.26699C7.73913 6.26699 7.46612 7.41941 7.46612 8.60858V13.1255H4.67477V3.75914H7.446ZM2.79957 1.4053C2.79922 1.68269 2.717 1.95381 2.5632 2.18466C2.40941 2.4155 2.19089 2.59581 1.93503 2.70298C1.67929 2.80928 1.39769 2.83709 1.1261 2.78286C0.854496 2.72863 0.60517 2.59483 0.40985 2.39847C0.214163 2.20199 0.0809377 1.95203 0.0269286 1.68004C-0.0270805 1.40804 0.000537886 1.12615 0.10631 0.869807C0.212082 0.613466 0.391286 0.394121 0.621387 0.239356C0.851487 0.0845906 1.12221 0.00131465 1.39951 0C1.58381 -1.29583e-06 1.7663 0.0363853 1.93651 0.107073C2.10671 0.17776 2.26129 0.281357 2.39136 0.411921C2.52144 0.542484 2.62446 0.697445 2.69451 0.867914C2.76456 1.03838 2.80026 1.22101 2.79957 1.4053Z"
                    fill="white"
                  />
                  <path d="M2.79994 3.77002H0V13.1244H2.79994V3.77002Z" fill="white" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}