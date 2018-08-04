public class ViewContactsApexController {
    
    @AuraEnabled
    public static List<Contact> getContactsDB()
    {
        /* Apply CRUD and FLS CHECK here, and then return records */
        
        return [select Id, Name, Phone from Contact limit 5];
    }

}