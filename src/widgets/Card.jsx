import PropTypes from 'prop-types'

export const Card = ({ className, cardHeight, cardWidth, content, onHover, onClick }) => {
    return (
        <div className={"role card " + className} style={{height: cardHeight, width: cardWidth}} onMouseEnter={onHover} onClick={onClick}>
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