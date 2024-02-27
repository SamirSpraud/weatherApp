/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import '../css/BtnChange.css'
const BtnChangeCat = ({OnClickAction,bg,categoria}) =>{
return(<>
<div className="btnChange">
    <div className={bg}>
    <h3>{categoria}</h3>
        
    </div>
</div>
</>);
}

export default BtnChangeCat;