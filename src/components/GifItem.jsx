import PropTypes from 'prop-types'

export const GifItem = ({title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifItem.propType ={
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}
export default GifItem
