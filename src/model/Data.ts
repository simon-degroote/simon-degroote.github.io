interface Education {
    from : string,
    to : string,
    where : string,
    formation : string,
    image: string | undefined | null
}

interface Isatlife {
    title : string,
    description : string,
}

interface Visit {
    where : string,
    description : string,
}

interface AnalyzeData {
    title : string,
    color : string,
    points : string[]
}

interface Analyze {
    text : string[],
    data : AnalyzeData[]
}

interface ExpertiseDataData {
    title : string,
    level : number,
    levelMax : number,
    nextLevel : number,
}

interface ExpertiseData {
    title : string,
    color: string,
    data : ExpertiseDataData[]
}

interface Expertise {
    text : string,
    
    data : ExpertiseData[]
}

export default interface PersonalData {
    name : string,
    tel : string,
    email : string,
    address : string,
    bio : string,
    skills : string[],
    education : Education[],
    professional : Education[],
    isatLife : Isatlife[],
    visits : Visit[],
    analyze : Analyze,
    expertise : Expertise
}