import './SectionHeader.css'

const renderTitle = (title, titleHighlight) => {
  if (!titleHighlight || typeof title !== 'string') {
    return title
  }

  const index = title.indexOf(titleHighlight)
  if (index === -1) {
    return title
  }

  const before = title.slice(0, index)
  const after = title.slice(index + titleHighlight.length)

  return (
    <>
      {before}
      <span className="ze-section-title__mark">{titleHighlight}</span>
      {after}
    </>
  )
}

const SectionHeader = ({
  eyebrow,
  title,
  titleHighlight,
  lead,
  align = 'center',
  as = 'h2',
  light = false,
  className = '',
}) => {
  const HeadingTag = as === 'h1' ? 'h1' : 'h2'
  const alignClass = align === 'start' ? '' : 'ze-section-header--center'
  const lightClass = light ? 'ze-section-header--light' : ''

  return (
    <header className={`ze-section-header ${alignClass} ${lightClass} ${className}`.trim()}>
      {eyebrow ? <p className="ze-eyebrow">{eyebrow}</p> : null}
      <HeadingTag className="ze-section-title">{renderTitle(title, titleHighlight)}</HeadingTag>
      {lead ? <p className="ze-section-lead">{lead}</p> : null}
    </header>
  )
}

export default SectionHeader
