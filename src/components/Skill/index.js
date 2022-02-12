import PropTypes from 'prop-types'
import { Card } from './Skill.elements'

export const SkillCard = ({ children, name }) => {


  return (
    <Card>
      {children}
      {
        name.split(' ').map((word, i) => <span key={i}>{word}</span>)
      }
    </Card>
  )
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired
}
