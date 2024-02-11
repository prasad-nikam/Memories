const reducers = (action, posts=[] )=>{
    switch (action) {
        case 'FETCH_ALL':
            return posts;
            
    
        case 'CREATE':
            return posts;
             
        default:
            return posts;
    }
}

export default reducers;