

const FilterDataName=(name,Data)=>{
    
    console.log(Data);
    const FilteredObj=Data.filter(data=>{
        
        console.log(name);
        console.log(data.listTxt);
        console.log(`${data.listTxt}`==`${name}`);
        return data.listTxt==name});
    
    return FilteredObj[0];    

};


export default FilterDataName;