({
	doInit : function(cmp, event, helper) {
		var action=cmp.get("c.getContactsDB");
      
       	cmp.set("v.contactColumns", [
          //  {label: 'Id', fieldName: 'Id', type: 'id', sortable:"true"},
          	{label: 'ID', fieldName: 'linkName', type: 'url', typeAttributes: {label: { fieldName: 'Id' },target: '_blank'}},
           	{label: 'Name', fieldName: 'Name', type: 'Name'},
            {label: 'Phone Number', fieldName: 'Phone', type: 'Phone'}
        ]);
        
        	action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
               var records =response.getReturnValue();
                records.forEach(function(record){
                    record.linkName = '/resources/s/detail/'+record.Id;
                });
                
               cmp.set("v.contactList",records);
            }
	});
        
         $A.enqueueAction(action);
    },
    
    
    
    doBack : function (cmp,event, helper)
    {
		cmp.set("v.contactList",null);        
    },
    
    handleNextPage : function (cmp,event, helper)
    {
		var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": "/" + cmp.get("v.nextPageURL")
        });
        urlEvent.fire();       
    }

})