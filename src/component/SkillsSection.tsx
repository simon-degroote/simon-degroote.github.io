import DATA from "../data/Data";
import "./SkillsSection.css"


const SkillsSection: React.FC<any> = (props: any) => {
    return (
        <section className="skillsSection">
            <p className="skillsSectionTitle">Skills</p>
            <ul className="skillsList">
                {DATA.skills.map((skill) => {
                    return <li className="skillsItem">{skill}</li>
                })}
            </ul>
          </section>
    )
}

export default SkillsSection;