import { useEffect, useState } from "react";
import DATA from "../data/Data"
import "./EducationSection.css"

const EducationSection: React.FC<any> = (props: any) => {
    const [i, setI] = useState<number>(0);

    const [time, setTime] = useState(new Date());

    
    const schoolImages: any[] = [
        require("./../img/Saint-Marie.jpg"),
        require("./../img/ecam.png"),
        require("./../img/ephec.jpeg")
    ]

    const educations: any[] = [
        
    ]

    const incrementI = (event: any) => {
        event.preventDefault()
        const tmp = (i + 1) % DATA.education.length;
        setI(tmp);
    }

    const incrementI2 = () => {
        const tmp = (i + 1) % DATA.education.length;
        setI(tmp);
    }
    //setInterval(incrementI2, 4000);

    DATA.education.forEach((educ, index) => {
        const data = <div className="educationItem" onClick={incrementI}>
        <img className="formationItemImage" src={schoolImages[index]}></img>
        <p className="educationTime">{educ.from} - {educ.to}</p>
        <p className="educationPlace">{educ.where}</p>
        <p className="educationFormation">Formation : {educ.formation}</p>
    </div>;
        educations.push(data);
    })

    // DATA.education.forEach( (educ) => {
    //     schoolImages.push(require(educ.image as string));
    // })

    return (
        <section className="educationSection">
            <p className="educationSectionTitle">Education</p>
            {
                educations[i]
            }
          </section>
    )
}

export default EducationSection;