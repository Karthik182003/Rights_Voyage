const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/tutorial")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
 console.log('error');
})