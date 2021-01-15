import CardSkill from './Cards/CardSkill'

function Skills(props){
    const { description, skills } = props.content;

    function CreateSkills(){
        const cards = skills.map((skill,i) =>{
            return(
                <CardSkill key={i} skill={skill}/>
            )
        })
        return cards;
    }

    return(
        <div id="skills">
            <div className="container">
                <p className="title">Mis Habilidades</p>
                <p className="description">
                    {description}
                </p>
                <div className="cards">
                    {CreateSkills()}
                </div>
            </div>
            
        </div>
    );
}

export default Skills;