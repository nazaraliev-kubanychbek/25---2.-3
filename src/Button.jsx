import { useDispatch } from "react-redux";
import { incrementNum, resetNum, decrementNum } from "./redux/reducers/car";

const Button = () => {
    const dispatch = useDispatch();
    return (
        <div>
           <button onClick={()=>{
            dispatch(incrementNum())
           }}>+</button>
           <button onClick={()=>{
            dispatch(decrementNum())
           }}>-</button>
           <button onClick={()=>{
            dispatch(resetNum())
           }}>reset</button>

           <button>+5</button>
           <button>-5</button>

        </div>
    );
}

export default Button;
