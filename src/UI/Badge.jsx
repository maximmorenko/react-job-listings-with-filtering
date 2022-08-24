// бейджи это наши слова иконнки, по которым мы будем фильтровать списока
import PropTypes from 'prop-types';
import {ReactComponent as Remove} from '../assets/images/icon-remove.svg';
// иконку (крестик) импортируем как реакт компонент

const Badge = ({
    // на входе ждем пропсы
    variant = 'basic', //варианты, по умолчанию базик
    colorScheme = 'light', //цветовая схема
    children, //получаем текст, запишем в спан
    onClear,
    onClick,
}) => (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
        <span>
            {children}
        </span>
        {variant === 'clearable' && (
            // если вариант clearable то добавляем иконку крестик и функцию очистки
            <div className='badge-remover' onClick={onClear}>
                <Remove /> 
            </div>
        )}
    </div>
);

export {Badge};

// propTypes - стороння библиотека. упрощенная типизация, которая представляется реактом
Badge.propTypes = {
  variant: PropTypes.oneOf(['basic', 'clearable', 'rounded']),
  // rounded - скругленный используется при выборее базового
  // clearable - для очистки, удаления бейджа (с крестиком)
  colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']),
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func,
}
