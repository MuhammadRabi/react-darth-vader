const SocialIcon = ({ url, icon }) => {
  return (
    <a href={url}>
      <i className={icon}></i>
    </a>
  )
}

export default SocialIcon
