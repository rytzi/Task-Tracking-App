import PropTypes from 'prop-types'

export const Card = ({ className, cardHeight, cardWidth, title, content, onClick}) => {
    return (
        <div className={"card " + className} style={{height: cardHeight, width: cardWidth}} onClick={onClick}>
            {title != null && (<div className='cardTitle text'>{title}</div>)}
            {content}
        </div>
    );
}

Card.propTypes = {
  className: PropTypes.string,
  cardHeight: PropTypes.string,
  cardWidth: PropTypes.string,
  title: PropTypes.element,
  content: PropTypes.element,
  onHover: PropTypes.func,
  onClick: PropTypes.func
}