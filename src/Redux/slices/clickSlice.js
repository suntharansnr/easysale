import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{   
        showOverlay:false, 
        showMobileNav:false, 


        storeMobileNav:null, 

        showLocationPopUp:false, 
        showCategoryPopUp:false, 
        
        classifiedPageSelectedLocation:"Location",
        classifiedPageSelectedCategory:"Category",
        
        classifiedPagefilter:false, 

        showNearbyLocationPopUp:false, 
        

        UserDashBoardSelectedComp:null,


    },
    reducers:{
        ShowMobileNavFN:(state)=>{     

            state.showOverlay=true;   
            state.showMobileNav=true;   
        },

        setStoreMobileNav:(state,action)=>{     

            state.showOverlay=true;   
            state.storeMobileNav=action.payload;   

        },


        ShowLocationPopupFN:(state)=>{     
            state.showOverlay=true;    
            state.showLocationPopUp=true;    
        },
        ShowCategoryPopupFN:(state)=>{     
            state.showOverlay=true;    
            state.showCategoryPopUp=true;    
        },





        SetClassifedLocationFN:(state,action)=>{     

            state.classifiedPageSelectedLocation=action.payload;    
        },

        SetShowPostAdFN:(state,action)=>{     

            state.showPostAd=true;    
            state.showOverlay=true;    
        },



        SetClassifedCategoryFN:(state,action)=>{     

            state.classifiedPageSelectedCategory=action.payload;    
        },


        SetUserDashBoardSelectedCompFN:(state,action)=>{     

            state.UserDashBoardSelectedComp=action.payload;    

            if(document.documentElement.clientWidth<600)  return; //guard class

            // state.showOverlay=true;   
        },


        ShowClassifiedPageFilter:(state,action)=>{     

            state.classifiedPagefilter=true;    
            state.showOverlay=true;  

        },

        ShowNearbyLocationPopUpFN:(state,action)=>{     

            state.showOverlay=true;  
            state.showNearbyLocationPopUp=true;    

        },

        
        ShowHideAllFN:(state)=>{     

            state.showOverlay=false; 
            state.showMobileNav=false; 

            state.storeMobileNav=null; 
    
            state.showLocationPopUp=false; 
            state.showCategoryPopUp=false; 

            state.classifiedPagefilter=false; 
            state.showNearbyLocationPopUp=false; 

            state.showPostAd=false; 
            state.UserDashBoardSelectedComp=null; 

        },



     

    }
});



export const {
                            ShowMobileNavFN,
                            HideMobileNavFN,

                            setStoreMobileNav,

                            SetClassifedLocationFN,
                            SetClassifedCategoryFN,

                            ShowCategoryPopupFN,
                            ShowLocationPopupFN,

                            SetShowPostAdFN,

                            ShowNearbyLocationPopUpFN,

                            SetUserDashBoardSelectedCompFN,

                            ShowClassifiedPageFilter,


                            ShowHideAllFN,


                                                                        } =clickSlice.actions; 

//selectors
export const selectClicks=(state)=>state.clicks;

export default clickSlice.reducer;

