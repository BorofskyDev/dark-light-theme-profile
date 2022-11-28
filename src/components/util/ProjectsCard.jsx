
function ProjectsCard(props) {
  const { title, repository, liveSite, description, imageUrl } = props

  return (
    <container className='Card'>
      <div className='Card__container border-radius'>
        <img src={imageUrl} alt={title} className='Card__image' />
        <div className='Card__body'>
          <h3 className='Card__body--title'>{title}</h3>
          <div className='Card__body--links'>
            <a href={liveSite} className='Card__body--link'>
              Live Site
            </a>
            <a href={repository} className='Card__body--link'>
              Repository
            </a>
          </div>
          <div className='Card__body--description'>
            {description}
          </div>
        </div>
      </div>
    </container>
  )
}

export default ProjectsCard
