import React,{useState,useEffect} from 'react';
import {validation} from './validation'

const Main = () => {

    const [islogin , setIslogin] = useState(false);
    const [infoes , setInfoes]= useState ({
        name : "",
        lastname : "",
        email : "",
        password : "",
        confirmpassword : "",
        ischecked : false
    })
    
    const onChangeHandler= event => {
        if (event.target.name === "checkSsbox") {
            setInfoes({...infoes,[event.target.name] : event.target.ischecked})
        }else{
            setInfoes({...infoes,[event.target.name] : event.target.value })
        }
    } 
    
    const [errs, setErrs]= useState({})
    

    console.log(infoes.ischecked)
    useEffect(() => {
        setErrs(validation(infoes))
    }, [infoes])

    console.log(infoes.name)

    return (
        <div className="m-auto p-7">
            <div className="flex justify-center">
                <div className="flex w-10/12 p-4 ">
                    <div className="w-6/12 text-2xl text-white">
                        <div className="w-3/12 bg-green-600 text-center p-2 rounded-md">
                            log in form
                        </div>
                    </div>
                    <div className="w-6/12 ">
                        {
                            islogin ? <h3> see profile </h3>
                            : <h3 className="flex justify-end text-white"  > login </h3>
                        }
                    </div>
                </div>
            </div> 
            <div className="flex justify-center">
                <div className="border-2 ">
                    <div className="m-8">
                        <label> name :</label>
                        <input type="text" name="name" className="w-80 ml-8 border-2 "  value={infoes.name} onChange={onChangeHandler} />
                        <div className="text-red-700 text-sm m-3"> {errs.nameerr} </div>
                    </div>

                    <div className="m-8">
                        <label> email :</label>
                        <input type="text" name="email" className="w-80 ml-8 border-2 " value={infoes.email} onChange={onChangeHandler}/>
                        <div className="text-red-700 text-sm m-3"> {errs.emailerr} </div>
                    </div>
                    <div className="m-8">
                        <label> password : </label>
                        <input type="password" name="password" className="w-80 ml-8 border-2 " value={infoes.password} onChange={onChangeHandler}/>
                        <div className="text-red-700 text-sm m-3"> {errs.passworderr} </div>

                    </div>
                    <div className="m-8">
                        <label> confirm password :  </label>
                        <input type="password"  name="confirmpassword" className="w-80 ml-8 border-2 " value={infoes.confirmpassword} onChange={onChangeHandler}/>
                        <div className="text-red-700 text-sm m-3"> {errs.confirmpassworderr} </div>
                    </div>
                    {/* <div className="m-8">
                        <label> check if you agree with terms </label>
                        <input type="checkbox" name="checkbox" className="w-80 ml-8 border-2 " value={infoes.ischecked} onChange={onChangeHandler}/>
                    </div> */}
                    <div className="flex justify-end p-10">
                        <input type="submit"  className="p-2 px-8 bg-green-600 text-white rounded-md hover:bg-green-500" value={"submit your form"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;