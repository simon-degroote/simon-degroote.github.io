import { useEffect, useState } from "react";
import DATA from "../data/Data"
import "./EducationSection.css"

const EducationSection: React.FC<any> = (props: any) => {
    const [i, setI] = useState<number>(0);
    const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if(selectedElement != null) {
            selectedElement.classList.remove("bordered");
        }
        const element : HTMLElement = document.getElementById("littleImage" + i) as HTMLElement;
        element.classList.add("bordered")
        setSelectedElement(element);
    }, [i]);
    
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

    DATA.education.forEach((educ, index) => {
        const data = <div className="educationItem" onClick={incrementI}>
        <img className="formationItemImage" src={schoolImages[index]}></img>
        <p className="educationTime">{educ.from} - {educ.to}</p>
        <p className="educationPlace">{educ.where}</p>
        <p className="educationFormation">Formation : {educ.formation}</p>
    </div>;
        educations.push(data);
    })

    const select = (event: any) => {
        event.preventDefault();
        const tmp: number = +event.target.id.slice(-1);
        setI(tmp);
    }

    return (
        <section className="educationSection">
            <p className="educationSectionTitle">Education</p>
            {
                educations[i]
            }
            <div>
                {
                    DATA.education.map((educ, index) => {
                        return <img id={"littleImage" + index} className="littleImages" src={schoolImages[index]} onClick={select}></img>
                    })
                }
            </div>
        </section>
    )
}

export default EducationSection;