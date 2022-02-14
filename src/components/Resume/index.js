import { ResumeSection } from './Resume.elements'

export const Resume = () => {
  return (
    <ResumeSection>
        <embed
          src={`${process.env.PUBLIC_URL}/assets/pdf/Resume.pdf`}
          type="application/pdf"
          width='100%'
          height='100%'
        />
    </ResumeSection>
  )
}
