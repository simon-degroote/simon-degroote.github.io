import { AgCharts } from "ag-charts-react"
import DATA from "../data/Data"
import "./ExpertiseSection.css"


const ExpertiseSection: React.FC<any> = (props: any) => {
    return (
        <section id="pixSection" className="expertiseSection">
          <p className="expertiseSectionTitle">PIX</p>
            <p className="expertiseSectionDescription">{DATA.expertise.text}</p>
            <img className="pixImg" src={require("./../img/pix.png")}></img>
            {
                DATA.expertise.data.map((exp) => {
                    return <div className="expertiseDiv">
                        <p className="expertiseDivTitle">{exp.title}</p>
                        <div className="expertiseDivList">

                        
                        {
                            exp.data.map((d) => {
                                const data: any = {
                                    data: [
                                        { asset: "", amount: d.nextLevel },
                                        { asset: "", amount: 100 - d.nextLevel },
                                      ],
                                    // title: {
                                    //   text: d.title,
                                    // },
                                    series: [
                                      {
                                        type: "donut",
                                        //calloutLabelKey: "asset",
                                        angleKey: "amount",
                                        innerRadiusRatio: 0.9,
                                        //innerRadiusOffset : 20,
                                        radiusMin : 200,
                                        radiusMax : 200,
                                        showInLegend: false,
                                        innerLabels: [
                                            {
                                                text: "Niveau",
                                                fontSize: 15,
                                                spacing : 20
                                              },
                                            {
                                                text: "" + d.level,
                                                fontWeight: "bold",
                                                fontSize: 90
                                            }
                                        ],
                                        innerCircle: {
                                          fill: "#c9fdc9",
                                        },
                                      },
                                    ],
                                  }
                                return <div className="subExpertiseDiv" style={{backgroundColor: exp.color}}>
                                    <div className="subExpertiseTitles" style={{backgroundColor: exp.color}}>
                                        <p className="subExpertiseMainTitle">{exp.title}</p>
                                        <p className="subExpertiseSubTitle">{d.title}</p>
                                    </div>

                                    
                                    <AgCharts options={data} />
                                </div>
                            })
                        }
                        </div>
                    </div>
                })
            }
          </section>
    )
}

export default ExpertiseSection;