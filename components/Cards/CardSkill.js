function CardSkill(props) {
  const { name, level} = props.skill;

  return (
    <div id="card-skill">
      <div className="content">
        <p className="title">
          <code lang="en" translate="no">
            {name}
          </code>
        </p>
        
        <code className="level-text" lang="en" translate="no">{level}</code>
        </div>
    </div>
  );
}
export default CardSkill;
