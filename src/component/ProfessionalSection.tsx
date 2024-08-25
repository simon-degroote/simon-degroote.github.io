import DATA from "../data/Data";
import "./ProfessionalSection.css"


const ProfessionalSection: React.FC<any> = (props: any) => {
    const images : any[] = [
        require("./../img/exp1.png"),
        require("./../img/exp2.jpg"),
        require("./../img/exp3.jpg"),
        require("./../img/exp4.png"),
        require("./../img/exp5.png"),
    ];

    return (
        <section className="professionalSection">
            <p className="professionalSectionTitle">Expériences professionnelles</p>
            <div className="professionalList">
            {
                DATA.professional.map((pro, index) => {
                    console.log(index)
                    if(index % 2 == 0) {
                        return <><div className="professionalItem">
                                    <div className="professionalItemData">
                                        <div className="professionalItemPlaceAndTime">
                                            <p className="professionalItemPlace">{pro.where}</p>
                                            <p className="professionalItemTime">{pro.from} - {pro.to}</p>
                                        </div>
                                        
                                        <p className="professionalItemFormation">Formation : {pro.formation}</p>
                                    </div>
                                    <img  className="professionalItemImg" src={images[index]}></img>
                                </div>
                                </>
                    } else {
                        return <><div className="professionalItem">
                                    <img  className="professionalItemImg" src={images[index]}></img>
                                    <div className="professionalItemData">
                                        <div className="professionalItemPlaceAndTime">
                                                <p className="professionalItemPlace">{pro.where}</p>
                                                <p className="professionalItemTime">{pro.from} - {pro.to}</p>
                                            </div>
                                        <p className="professionalItemFormation">Formation : {pro.formation}</p>
                                    </div>
                                </div>
                                </>
                    }
                    
                })
            }
            </div>
          
          </section>
    )
}

export default ProfessionalSection;