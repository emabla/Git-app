import {RandomNumber} from "./RandomNumber";
import {IsEven} from "./IsEven";

const FunComponent = () => {
    return (
        <>
        {IsEven() && <p>Tvoj datum je paran!</p>}
        {!IsEven() && RandomNumber() }
        </>
    )
}

export default FunComponent;