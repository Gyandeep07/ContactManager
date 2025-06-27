function ContactList(props){

   const {contact,removeContact}=props
    const contactList=contact.map((val)=>{
        return(
            <div className=" text-center  d-flex justify-content-between fw-10 bg-light border rounded m-2 p-2 fs-3">
                <div className="">
                    {val.data.name}
                </div>
                <div className="">{val.data.email}</div>
              <span onClick={()=>removeContact(val.id)}><i className="bi bi-trash-fill"></i></span> 

            </div>
        )
    })
return(
    <div className=" text-black py-2 text-center">
        <h2>CONTACT LIST</h2>
       <div className="">
        {contactList}
       </div>

    </div>
)
}
export default ContactList;