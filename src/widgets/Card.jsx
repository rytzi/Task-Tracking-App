import PropTypes from 'prop-types'

export const Card = ({ className, cardHeight, cardWidth, content, onClick}) => {
    return (
        <div className={"card " + className} style={{height: cardHeight, width: cardWidth}} onClick={onClick}>
            {content}
        </div>
    );
}

Card.propTypes = {
  className: PropTypes.string,
  cardHeight: PropTypes.string,
  cardWidth: PropTypes.string,
  content: PropTypes.element,
  onHover: PropTypes.func,
  onClick: PropTypes.func
}