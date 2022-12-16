

const FilterDataById=(id,Data)=>{
    
    const FilteredObj=Data.filter(data=>data.id==id);
    
    return FilteredObj;    

};


export default FilterDataById;