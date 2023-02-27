const SocialIcon = ({ website, icon }) => {
  return (
    <a href={website}>
      <i className={icon}></i>
    </a>
  )
}

export default SocialIcon
