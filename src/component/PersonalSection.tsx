import DATA from "../data/Data";
import "./PersonalSection.css"


const PersonalSection: React.FC<any> = (props: any) => {
    return (
        <section id="aboutMeSection" className="personalSection">
            <div className="personalSectionNameAndImg">
                <p className="personalSectionName">{DATA.name}</p>
                <img className="personalSectionImg" src={require("./../img/pp.jpg")}></img>
            </div>
            <div className="personalSectionDiv">
                <p className="personalSectionBio">{DATA.bio}</p>
                <a className="personalSectionCv" href={require('./../doc/cv.pdf')} target='_blank' rel='noopener noreferrer'>Mon CV</a>
            </div>
            
          </section>
    )
}

export default PersonalSection;