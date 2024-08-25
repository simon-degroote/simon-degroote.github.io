import DATA from "../data/Data";
import "./VisitSection.css"

const VisitSection: React.FC<any> = (props: any) => {
    const images: any[] = [
        require("./../img/visit1.jpg"),
        require("./../img/visit2.png")
    ];
    return (
        <section id="visitSection" className="visitSection">
            <p className="visitSectionTitle">Visites d'entreprises et parcours prévention</p>
            {
                DATA.visits.map((visit, index) => {
                    if(index % 2 == 0) {
                        return <div className="visitSectionDiv">
                            <img className="visitSectionDivImage" src={images[index]}></img>
                            <p className="visitSectionDivDescription">{visit.description}</p>
                        </div>
                    } else {
                        return <div className="visitSectionDiv">
                            <p className="visitSectionDivDescription">{visit.description}</p>
                            <img className="visitSectionDivImage" src={images[index]}></img>
                            </div>
                    }
                    
                })
            }
        </section>
    )
}

export default VisitSection;