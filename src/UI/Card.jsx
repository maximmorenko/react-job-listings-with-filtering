import PropTypes from 'prop-types';

const Card = ({children, isFeatured, className}) => {
  return (
    <div
      className={
        // проверяем если есть пропс isFeatured (булевое значение) то передаем имя каласса card--featured
        `card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
      }
    >
      {children}
      {/* children обязателен для карточки, в библиотеке указываем isRequired*/}
    </div>
  )
}

export {Card};

// propTypes - стороння библиотека. упрощенная типизация, которая представляется реактом
Card.propTypes = {
  children: PropTypes.node.isRequired,
  isFeatured: PropTypes.bool,
  className: PropTypes.string,
}