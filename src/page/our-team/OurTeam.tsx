import "./OurTeam.css"
import MemberTile, { MemberTileProps } from "../../components/member-tile/MemberTile"
import picture1 from "../../assets/img/le-ngoc-hoang.png"
import picture2 from "../../assets/img/vu-pham-thao-vy.jpeg"
import picture3 from "../../assets/img/nguyen-minh-tri.png"
import picture4 from "../../assets/img/ngo-van-phat.png"
import picture5 from "../../assets/img/nguyen-thuan-phat.png"
import picture6 from "../../assets/img/truong-nguyen-khanh-hung.png"


function OurTeam() {
  const members: Array<MemberTileProps> = [
    {
      avatar: picture1,
      fullName: "Le Ngoc Hoang",
      role: "Lead Researcher",
      descriptions: ["M.S. of College of Biomedical Engineering, Taipei Medical University", "Founder of YRDx-AI Laboratory"]
    },
    {
      avatar: picture2,
      fullName: "Dr. Vu Pham Thao Vy  ",
      role: "Radiologist",
      descriptions: ["M.D. of Thai Nguyen National Hospital", "Ph.D. candidate of International Ph.D. Program in Medicine, Taipei Medical University, Taipei, Taiwan", "Co-Founder of YRDx-AI Laboratory"]
    },
    {
      avatar: picture3,
      fullName: "Nguyen Minh Tri",
      role: "Lead Technician",
      descriptions: ["B.A. of Advance Program in Software Engineer, University of Science, Ho Chi Minh City, Vietnam", "Co-Founder of YRDx-AI Laboratory"]
    },
    {
      avatar: picture4,
      fullName: "Ngo Van Phat",
      role: "Full stack developer",
      descriptions: ["B.A of Advance Program in Software Engineer, University of Science, Ho Chi Minh City, Vietnam"]
    },
    {
      avatar: picture5,
      fullName: "Nguyen Thuan Phat ",
      role: "Developer",
      descriptions: ["B.A. of Department of Computer Science, Vietnamese German University, Ho Chi Minh City, Vietnam"]
    },
    {
      avatar: "",
      fullName: "",
      role: "",
      descriptions: []
    }
  ]

  const advisors: Array<MemberTileProps> = [    
    {
      avatar: picture6,
      fullName: "Dr. Truong Nguyen Khanh Hung",
      role: "",
      descriptions: ["M.D. of Department of Orthopedic and Trauma, Cho Ray Hospital, Ho Chi Minh City, Vietnam", "Ph.D. of International Ph.D. Program in Medicine, Taipei Medical University, Taipei, Taiwan"]
    },
    {
      avatar: "",
      fullName: "",
      role: "",
      descriptions: []
    }
  ]
  return (
    <div className="our-team">
        <h1 className="section-title">Ours Members</h1>
        <div className="row flex-wrap center">
            {
              members.map((member) => <MemberTile avatar={member.avatar} fullName={member.fullName} role={member.role} descriptions={member.descriptions}/>)
            }
        </div>
        <h1 className="section-title">Ours Advisors</h1>
        <div className="row flex-wrap center">
            {
              advisors.map((advisor) => <MemberTile avatar={advisor.avatar} fullName={advisor.fullName} role={advisor.role} descriptions={advisor.descriptions}/>)
            }
        </div>
    </div>
  )
}

export default OurTeam
