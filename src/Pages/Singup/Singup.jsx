
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { useFormik } from "formik";
// import axios from "axios";
// import { SingupSchema } from "../Schemas/Schema";
// import { Stack } from "@mui/material";
// import { NavLink, useNavigate } from "react-router-dom";
// import LockRoundedIcon from '@mui/icons-material/LockRounded';

// let initialValues = {
//     name:"",
//     email:"",
//     password:"",
//     conform_password:""

// }
// export default function Signup() {
//     let navigate=useNavigate()
//     let {values,errors,handleBlur,handleChange,handleSubmit,touched }=useFormik({
//         initialValues: initialValues,
//         validationSchema:SingupSchema,
//         onSubmit: (values,action) => {
//             console.log(values);
//             // axios.post("/login/data",values)
//             // .then(()=>{
//             //   console.log("ok");
//             // })
//             // .catch(e=>{
//             //   console.log(e)
//             // })
            
//             action.resetForm()
//             navigate('/about')
//         },
        

//     })

//     return (
//         <Container component="div" variant="div">
//         <Box
//           sx={{  
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography component="div" variant="div" color={'#ae275f'} >
//           <div style={{display:'flex',alignItems:'center',marginBottom:'14px'}}> <LockRoundedIcon fontSize="medium"></LockRoundedIcon><span style={{fontSize:'22px !importent'}}>HIGH SECURED LOGIN</span></div>
//           </Typography>
//           <div style={{borderBottom: '2px solid #ae275f',width:'260px'}}></div>
//           <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1,width:'260px' }}>
//           <Stack>
//                     {/* <TextField
//                         margin="normal"
//                         fullWidth
//                         id="text"
//                         label="name"
//                         name="name"
//                         autoComplete="name"
//                         autoFocus
//                        onBlur={handleBlur}
//                        onChange={handleChange}
//                        value={values.name}
//                     />
//                     {errors.name&&touched.name?<p style={{margin:"-8px 0px 0px 0px",color:'red',fontSize:"10px"}}>{errors.name}</p>:null} */}
//                     <div class="input-field">
//         <input 
//         className="input"
//         id="name"
//         name="name"
//         type="text"
//         autoComplete="name"
//         autoFocus
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.name}
//          required/>
//         <label>Enter your name</label>
//       </div>
       
//     {errors.name&&touched.name?<p style={{margin:"-8px 0px 0px 0px",color:'red',fontSize:"10px"}}>{errors.name}</p>:null} 

//                     </Stack>
                
//                     <Stack>
//                         {/* <TextField
//                         margin="normal"
//                         fullWidth
//                         id="email"
//                         label="Email Address"
//                         name="email"
//                         autoComplete="email"
//                         autoFocus
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.email}
//                     />
                     
//                      {errors.email&&touched.email?<p  style={{margin:"-8px 0 0px 0px",color:'red',fontSize:"10px"}}>{errors.email}</p>:null}</Stack> */}
//                    <div class="input-field">
//         <input 
//         className="input"
//         id="email"
//         name="email"
//         type="email"
//         autoComplete="email"
//         autoFocus
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.email}
//          required/>
//         <label>Enter your email</label>
//       </div>
       
//     {errors.email&&touched.email?<p  style={{margin:"-8px 0 0px 0px",color:'red',fontSize:"10px"}}>{errors.email}</p>:null}
// </Stack>
//                    <Stack>
//                      {/* <TextField
//                         margin="normal"
//                         fullWidth
//                         name="password"
//                         label="Password"
//                         type="password"
//                         id="password"
                       
//                         autoComplete="current-password"
//                         onBlur={handleBlur}
//                        onChange={handleChange}
//                        value={values.password}
//                     />
//                     {errors.password&&touched.password?<p  style={{margin:"-8px 0px 0px 0px",color:'red',fontSize:"10px",width:'300px',overflow:"hidden",textOverflow:'ellipsis'}}>{errors.password}</p>:null}</Stack> */}
//                   <div class="input-field">
//         <input 
//         className="input"
//         id="password"
//         name="password"
//         type="password"
//         autoComplete="password"
//         autoFocus
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.email}
//          required/>
//         <label>Enter your password</label>
//       </div>
       
//     {errors.password&&touched.password?<p  style={{margin:"-8px 0px 0px 0px",color:'red',fontSize:"10px",width:'300px',overflow:"hidden",textOverflow:'ellipsis'}}>{errors.password}</p>:null}
// </Stack>
//                   <Stack>
//                   {/* <TextField
//                         margin="normal"
//                         fullWidth
//                         name="conform_password"
//                         label="conform_Password"
//                         type="password"
//                         id="conform_password"
//                         autoComplete="current_password"
//                         onBlur={handleBlur}
//                        onChange={handleChange}
//                        value={values.conform_password}
//                     />
//                   {errors.conform_password&&touched.conform_password?<p  style={{margin:"-8px 0px 0px 0px",color:'red',fontSize:"10px"}}>{errors.conform_password}</p>:null}</Stack> */}
//                     <div class="input-field">
//         <input 
//         className="input"
//         id="conform_password"
//         name="conform_password"
//         type="password"
//         autoComplete="password"
//         autoFocus
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.conform_password}
//          required/>
//         <label>Re-enter your password</label>
//       </div>
       
//     {errors.conform_password&&touched.conform_password?<p  style={{margin:"-8px 0px 0px 0px",color:'red',fontSize:"10px"}}>{errors.conform_password}</p>:null}
// </Stack>
//                     <FormControlLabel
//                         control={<Checkbox value="remember" color="primary" />}
//                         label="Remember me"
//                     />
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         sx={{ mt: 3, mb: 2 }}
//                     >
//                         Sign In
//                     </Button>
//                     <Grid container>
//                         <Grid item xs>
//                             <Link href="#" variant="body2">
//                                 Forgot password?
//                             </Link>
//                         </Grid>
//                         <Grid item>
//                             <NavLink to={'/about'} variant="body2">
//                                 {"Don't have an account? Sign Up"}
//                             </NavLink>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
//         </Container>
//     );
// }

// import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { Stack, TextField } from "@mui/material";
// import {  useNavigate } from "react-router-dom";
// import "./Singin.css"
// import LockRoundedIcon from '@mui/icons-material/LockRounded';
// import { useForm } from 'react-hook-form';




// export default function SignIn() {
// let navigate=useNavigate()
  
// const { register, handleSubmit, watch, formState: { errors } } = useForm()
// const onSubmit = data => console.log(data,"xxx");
// console.log(watch('username'));


//   return (

    
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{  
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",

//         }}
//       >
//         <Typography component="div" variant="div" color={'rgb(255 74 0)'} >
//        <div style={{display:'flex',alignItems:'center',marginBottom:'14px'}}> <LockRoundedIcon fontSize="medium"></LockRoundedIcon><span style={{fontSize:'22px !importent'}}>HIGH SECURED LOGIN</span></div>
//         </Typography>
//         <div style={{borderBottom: '2px solid rgb(255 74 0)',width:'66%'}}></div>
//         <Box component="form" id="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1,width: '270px' }}>
//         <Stack sx={{width:'100%',margin:'12px 0px'}}>
//         <div class="input-field">
//         <TextField fullWidth label="username" InputLabelProps={{sx:{color:'#858181',fontSize:'15px'}}} variant="standard"
//         id="username"
//         {...register("username",{
//           required:true
//         })} 
//         type="text"
//         autoComplete="username"
//         autoFocus
//          required/>
       
//       </div>
        
//   {errors.username?.type === "required" && <p style={{ marginTop:'-10px', fontSize: "10px", color: 'rgb(207 6 6' }}>{errors.email}</p>
// }
// </Stack>
// <Stack sx={{width:'100%',margin:'12px 0px'}}>
// <div class="input-field">
// <TextField id="password" fullWidth label="password" variant="standard" 
       
       
//     name="password"
//     type="password"
    
//     {...register("password",{
//       required:true,maxLength:4
//     })} 
    
//      required/>
  
// </div>
//   {errors.password?.type === "required" && <p style={{ marginTop: '-8px', fontSize: "10px", color: 'rgb(207 6 6' }}>Password is required</p>
// }{errors.mobile?.type === "maxLength" &&<p style={{ marginTop: '-8px', fontSize: "10px", color: 'rgb(207 6 6' }}>Max Length Exceed</p>}
// </Stack>
// {/* <Stack>
// <div class="input-field">
//         <input 
//         className="input"
//     name="password"
//     type="password"
//     id="password"
    
//      required/>
//   <label>Enter bellow Captca</label>
// </div>
// </Stack> */}
//   {/* <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           /> */}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             className="loginbutton"
//             sx={{ mt: 3, mb: 2,bgcolor:'rgb(255 74 0)' }}
//           >
//             Proceed
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               {/* <NavLink to='/contact'  variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </NavLink> */}
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

































import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { Stack } from "@mui/material";
// import { SinginSchema } from "../Schemas/Singinschema";
import { SingupSchema } from "../Schemas/Schema";
import { NavLink, useNavigate } from "react-router-dom";
// import "./Singiup.css"
import LockRoundedIcon from '@mui/icons-material/LockRounded';

let initialValues={
    name:null,
  email:null,
  password:null,
  conform_password:null
}

export default function SignIn() {
let navigate=useNavigate()
  let {values,errors,handleBlur,handleChange,handleSubmit,touched }=useFormik({
    initialValues: initialValues,
        validationSchema:SingupSchema,
    onSubmit:(values,action)=>{
                console.log(values,"aaa");
     localStorage.setItem("login",true);
     
     
     action.resetForm()
     navigate('/about')
    }
  })
 

  return (

    
    <Container component="div" variant="div">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="div" variant="div" color={'#ae275f'} >
        <div style={{display:'flex',alignItems:'center',marginBottom:'14px'}}> <LockRoundedIcon fontSize="medium"></LockRoundedIcon><span style={{fontSize:'22px !importent'}}>HIGH SECURED SINGUP</span></div>
        </Typography>
        <div style={{borderBottom: '2px solid #ae275f',width:'260px'}}></div>
        <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 ,width:'260px'}}>
        <Stack>
        <div class="input-field">
        <input 
        className="input"
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        autoFocus
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
         required/>
        <label>Enter your name</label>
      </div>
       
  {errors.name && touched.name ? (
    <p style={{ marginTop:'-10px', fontSize: "10px", color: 'red' }}>{errors.name}</p>
  ) : null}
</Stack>
<Stack>
        <div class="input-field">
        <input 
        className="input"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
         required/>
        <label>Enter your email</label>
      </div>
       
  {errors.email && touched.email ? (
    <p style={{ marginTop:'-10px', fontSize: "10px", color: 'red' }}>{errors.email}</p>
  ) : null}
</Stack>
<Stack>
<div class="input-field">
        <input 
        className="input"
    name="password"
    type="password"
    id="password"
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
     required/>
  <label>Enter your password</label>
</div>
  {errors.password && touched.password ? (
    <p style={{ marginTop: '-8px', fontSize: "10px", color: 'red' }}>{errors.password}</p>
  ) : null}
</Stack>
<Stack>
<div class="input-field">
        <input 
        className="input"
    name="conform_password"
    type="password"
    id="conform_password"
    value={values.conform_password}
    onChange={handleChange}
    onBlur={handleBlur}
     required/>
  <label>Re-enter your password</label>
</div>
  {errors.conform_password && touched.conform_password ? (
    <p style={{ marginTop: '-8px', fontSize: "10px", color: 'red' }}>{errors.conform_password}</p>
  ) : null}
</Stack> {values.conform_password!=null&&values.email!=null&&values.password==values.conform_password?<Button
          
            type="submit"
            fullWidth
            variant="contained"
            className="loginbutton"
            sx={{ mt: 3, mb: 2,bgcolor:'rgb(174 39 95)' }}
          >
            Proceed
          </Button>:<Button
          
          disabled
          fullWidth
          variant="contained"
          className="loginbuttondesable"
          sx={{ mt: 3, mb: 2,bgcolor:'rgb(174 39 95)' }}
        >
          Proceed
        </Button>}
          <Grid container>
            
            <Grid item>
              <NavLink to='/about'  variant="body2">
                {" have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}







