// import ChildCompoent from './ChildCompoent'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { increment, decrement } from '../../../redux/action'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../../redux/silce'
const ParentCompoent = (props: any) => {
    const { count, increment, decrement, reset } = props
    const navigation = useNavigate();
    const location = useLocation();
    return (
      <div className='bg-red-500'>
        <h1 className="text-xl">Counter: {count}</h1>
        <h1>URL: {location.pathname}</h1>
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => navigation("/child")}>Navigation</button>
      </div>
    );
  };

const mapStateToProps = (state: any) => ({
    count: state.counter.count
});

const mapDispatchToProps = {
    increment,
    decrement,
    reset
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ParentCompoent);
