const Sponsor = ({name, link, logo}) => {
  // Hack to get the /static/ folder to work for gh-pages. Set to true for gh-pages build
  const ghPages = false
  const assetPrefix = ghPages ? '/devfest-miami-2019' : ''
  const img = `${assetPrefix}${logo}`

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={name} />
    </a>
  )
  }

export default Sponsor
