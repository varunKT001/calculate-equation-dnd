import Board from './components/Board';
import Canvas from './components/Canvas';
import Card from './components/Card';
import { useGlobalContext } from './context/GlobalContext';
import { operators, comparators } from './data';

function App() {
  const {
    operands,
    equation,
    setEquation,
    comparator,
    setComparator,
    rhs,
    setRHS,
  } = useGlobalContext();

  const handleRHS = () => {
    let value = prompt('Enter the RHS');
    setRHS((prev) => {
      value = value ? value.trim() : '';
      return value;
    });
  };

  const removeItem = (e) => {
    setEquation((prev) => {
      const value = parseInt(e.target.getAttribute('data-value'));
      const newEquation = prev
        .filter((item, index) => index.toString() !== value.toString())
        .sort((a, b) => a.position - b.position)
        .map((item, index) => {
          item.position = index * 140 + 10;
          return item;
        });
      return newEquation;
    });
  };

  const removeComparator = () => {
    setComparator('');
  };

  const removeRHS = () => {
    setRHS('');
  };

  const evaluateEquation = () => {
    let evaluationString = '';
    equation.forEach((item) => {
      evaluationString += item.value;
    });
    evaluationString += comparator + rhs;
    try {
      // eslint-disable-next-line
      const value = eval(evaluationString);
      alert(value);
    } catch (error) {
      alert('Invalid equation');
    }
  };

  return (
    <main>
      <Board className='operands-container'>
        {operands.map((operand, index) => {
          return (
            <Card
              key={index}
              className='operand draggable'
              draggable='true'
              data-value={operand.value}
            >
              {operand.alphabet}
            </Card>
          );
        })}
      </Board>
      <Board className='operators-container'>
        {operators.map((operator, index) => {
          return (
            <Card
              key={index}
              className='operator draggable'
              draggable='true'
              data-value={operator}
            >
              {operator}
            </Card>
          );
        })}
        {comparators.map((comparator, index) => {
          return (
            <Card
              key={index}
              className='comparator'
              data-value={comparator}
              onClick={(e) =>
                setComparator(e.target.getAttribute('data-value'))
              }
            >
              {comparator}
            </Card>
          );
        })}
        <Card className='rhs' onClick={handleRHS}>
          RHS
        </Card>
      </Board>
      <Canvas className='canvas' comparator={comparator}>
        {equation.map((item, index) => {
          return (
            <Card key={index} className={item.type.split(' ')[0]}>
              {item.key}
              <span className='remove' data-value={index} onClick={removeItem}>
                x
              </span>
            </Card>
          );
        })}
        {comparator && (
          <Card className='comparator' data-value={comparator}>
            {comparator}
            <span className='remove' onClick={removeComparator}>
              x
            </span>
          </Card>
        )}
        {rhs && (
          <Card className='rhs' data-value={rhs}>
            {rhs}
            <span className='remove' onClick={removeRHS}>
              x
            </span>
          </Card>
        )}
      </Canvas>
      <button className='submit' onClick={evaluateEquation}>
        Evaluate
      </button>
    </main>
  );
}

export default App;
