import { connect, useDispatch, useSelector } from "react-redux";
import { bycake } from "../../Redux/Cake/CakeAction";
import Ice from "./Ice"
import LoginAction from "../../Redux/CheckLogin/LoginAction";
import { NavLink } from "react-router-dom";
const Home = (props) => {
     let loggedin=useSelector(state=>state.login.loggedin)
     const dispatch=useDispatch()
    return ( 
        <>
            <div style={{ marginTop:'300px',width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                {/* <h1>Sell Cake: {props.numOfCake}</h1> */}
                {/* <h1>Sell Cake: {numOfCake}</h1>
                <br />
                <button onClick={()=>{
                   dispatch(bycake())
                }}>Sell</button> */}
                <div><h1>logout : {loggedin}</h1>
                <br />
               <NavLink to={'/about'}> <button  onClick={()=>{
                                        localStorage.clear()

                   dispatch(LoginAction())
                }}>Sell</button></NavLink><Ice></Ice> </div>
                
            </div>

        </>
    );
};

// const mapStateToProps = state=> {
//     return {
//         numOfCake: state.numOfCake
//     };
// };

// const mapDispatchToProps = dispatch=> {
//     return {
//         bycake: () => dispatch(bycake())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
