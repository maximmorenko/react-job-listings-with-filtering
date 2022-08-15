// стек - набор бейджей
import PropTypes from 'prop-types';

const Stack = ({children, pos}) => (
  // принимает набор детей (бейджей) и располагает их в зависимости от позиции (pos)
  <div className='stack' style={{
    justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
  }}>
     {children}
  </div>
);

export {Stack};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}