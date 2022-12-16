const getStatus=(status)=>{
    switch (status) {
        case '0':
            return 'Pending'
            break;
        case '1':
            return 'Approved'
            break;
        case '2':
                return 'Rejected'
                break;
        default:
            return 'LOL'
            break;
    }   
};


export default getStatus;