export const validation = infoes => {
    
    const errs = {}

    if (!infoes.name.trim()){
        errs.nameerr="please enter your firstname"
    }
    else{
        delete errs.nameerr
    }

    if(!infoes.password){
        errs.passworderr="please enter your password"
    }else if (infoes.password.length < 6 ){
        errs.passworderr="your password should be more than 6 chars"
    }else{
        delete errs.passworderr
    }

    if (infoes.password !== infoes.confirmpassword) {
        errs.confirmpassworderr="passwords are not the same"
        
    } else {
        delete errs.confirmpassworderr
    }
    
    if (!infoes.email){
        errs.emailerr="please enter your email"
    }else if (!/\S+@\S+\.\S+/.test(infoes.email)){
        errs.emailerr="please cheack if your email is true "
    }else {
        delete errs.emailerr
    }
    // console.log(errs)
    return errs ;

}