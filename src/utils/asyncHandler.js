const asyncHnadler = (requestHandeler) => {
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}


export {asyncHandler}


// const  asyncHndler = () => {}
// const asyncHandler = (func) =>() => {}
// const asyncHandler = (func) => async () => {}





// const asyncHandler = (fn) => async (req, res, next) =>{
//     try{
//         await fn(req, res, next)
//     }
//     catch (error){
//         res.status(err || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }