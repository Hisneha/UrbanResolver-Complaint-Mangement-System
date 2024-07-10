import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
const jwtSecret = 'MynameisSnehalSudhirSuryawasnhi';

const token =localStorage.getItem("authToken");



export default function RegisterComp() {


    

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const [editStatus, setEditStatus] = useState({
        personalInformation: true,
        addressDetails: true,
        complaintDetails: true,
        supportingDocuments: true
    });

    const [complaintData, setComplaintData] = useState({
        personalInformation: {
            fullName: '',
            email: '',
            phoneNumber: ''
        },
        addressDetails: {
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        },
        complaintDetails: {
            category: '',
            locationOfIncident: '',
            description: ''
        },
        supportingDocuments: {
            documents: []
        }
    });

    const handleSave = (section) => {
        if (validateSection(section)) {
            setEditStatus(prevState => ({
                ...prevState,
                [section]: false
            }));
        }else {
            // If validation fails, display error message or handle it as needed
            alert("Validation failed. Please check your input.");
        }
        
    };

    const validateSection = (section) => {
        switch(section) {
            case 'personalInformation':
                return validatePersonalInformation();
            case 'addressDetails':
                return validateAddressDetails();
            case 'complaintDetails':
                return validateComplaintDetails();
            case 'supportingDocuments':
                return validateSupportingDocuments();
            default:
                return true; // No validation needed for other sections
        }
    };

    const validatePersonalInformation = () => {
        // Destructure personal information fields
        const { fullName, email, phoneNumber } = complaintData.personalInformation;
        
        // Check if any field is empty
        if (!fullName || !email || !phoneNumber) {
            return false; // Validation failed
        }
    
        // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return false; // Validation failed
        }
    
        // Check if phone number is valid (exactly 10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            return false; // Validation failed
        }
        
        // Add more validation logic as needed
        
        return true; // Validation passed
    };

    const validateAddressDetails = () => {
        // Destructure address details fields
        const { streetAddress, city, state, postalCode, country } = complaintData.addressDetails;
        
        // Check if any field is empty
        if (!streetAddress || !city || !state || !postalCode || !country) {
            return false; // Validation failed
        }
        
        // Add more validation logic as needed
        
        return true; // Validation passed
    };

    
    const validateComplaintDetails = () => {
        // Destructure complaint details fields
        const { category, locationOfIncident, description } = complaintData.complaintDetails;
        
        // Check if any field is empty
        if (!category || !locationOfIncident || !description) {
            return false; // Validation failed
        }
        
        // Add more validation logic as needed
        
        return true; // Validation passed
    };

    
    const validateSupportingDocuments = () => {
        // Destructure the documents array from supportingDocuments
        const { documents } = complaintData.supportingDocuments;
        
        // Check if the documents array is empty
        if (documents.length === 0) {
            return false; // Validation failed
        }
        
        // Add more validation logic as needed
        
        return true; // Validation passed
    };
    
    

    const handleUpdate = (section) => {
        setEditStatus(prevState => ({
            ...prevState,
            [section]: true
        }));
    };

    const onChange = (section, event) => {
        if (editStatus[section]) {
            const { name, value } = event.target;
            setComplaintData(prevState => ({
                ...prevState,
                [section]: {
                    ...prevState[section],
                    [name]: value
                }
            }));
        }
    };

    const handleSubmitbutton = async () => {
       
        try {
            // Make HTTP POST request to backend
            const response = await fetch(`http://localhost:5000/api/registercomplaint/${localStorage.getItem('userId')}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify(complaintData) // Send complaintData to the backend
            });
    
            if (!response.ok) {
                throw new Error('Failed to register Snehal');
            }
    
            // Handle successful response
            const data = await response.json();
            console.log(data); // Log response data or handle it as needed
    
            // Reset form state or navigate to a new page
            setComplaintData({
                personalInformation: {
                    fullName: '',
                    email: '',
                    phoneNumber: ''
                },
                addressDetails: {
                    streetAddress: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    country: ''
                },
                complaintDetails: {
                    category: '',
                    locationOfIncident: '',
                    description: ''
                },
                supportingDocuments: {
                    documents: []
                }
            });
            // You can also navigate to a new page here if needed
        } catch (error) {
            console.log("dsfskjednf")
            console.error(error);
            // Handle error (e.g., display error message to user)
        }
    };
    

    return (
        <div>
            <div><Logo /></div>
            <div><Navbar /></div>
            <div>
                <div className="card mt-3 border-dark">
                    <div className="row">
                        <div className="col-sm-4 d-flex align-items-stretch" >
                            <div className="card-body">
                                <div className="card h-100 border-dark">
                                    <div className="card-body tex-center">
                                        <h3>Compaint Registration</h3>
                                        <div className='card '>
                                            <div className='card-body'>
                                                <div><Link to="#" className="card-link fs-4 text-center" onClick={() => scrollToSection('personal-information')}>Personal Information:</Link>
                                                </div>
                                                <div> <Link to="#" className="card-link fs-4 text-center" onClick={() => scrollToSection('address-details')}>Address Details</Link>
                                                </div>
                                                <div><Link to="#" className="card-link fs-4 text-center" onClick={() => scrollToSection('complaint-details')}>Complaint Details</Link>
                                                </div>
                                                <div><Link to="#" className="card-link fs-4 text-center" onClick={() => scrollToSection('supporting-documents')}>Supporting Documents</Link>
                                                </div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-8 " >
                            <div className="card-body">
                                <div className="card border-white ">
                                    <div className="card-body">
                                        <div className="card border-dark" id="personal-information">
                                            <div className="card-body">
                                                <h3 className="card-title">Personal Information:</h3>
                                                <div>
                                                    <form>

                                                        <div className="mb-3">
                                                            <label htmlFor="name" className="form-label fs-5">Full Name</label>
                                                            <input type="text" className="form-control border-dark ${ editStatus.personalInformation ? '' : 'readonly'}" name='fullName' value={complaintData.personalInformation.fullName} onChange={(event) => onChange('personalInformation', event)}/>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                            <input type="email" className="form-control border-dark ${ editStatus.personalInformation ? '' : 'readonly'}" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={complaintData.personalInformation.email} onChange={(event) => onChange('personalInformation', event)}/>
                                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label htmlFor="contact" className="form-label">Phone Number</label>
                                                            <input type="text" className="form-control border-dark ${ editStatus.personalInformation ? '' : 'readonly'}" name='phoneNumber' id="contact" value={complaintData.personalInformation.phoneNumber} onChange={(event) => onChange('personalInformation', event)}/>
                                                        </div>
                                                        <div className='d-flex'>
                                                        { editStatus.personalInformation ? (
                                                        <button type="button" className="btn btn-primary mx-1" onClick={() => handleSave('personalInformation')}>Save</button>
                                                    ) : (
                                                        <button type="button" className="btn btn-success mx-1" onClick={() => handleUpdate('personalInformation')}>Update</button>
                                                    )}
                                                      </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3 border-dark " id="address-details">
                                            <div className="card-body">
                                                <h5 className="card-title">Address Details:</h5>
                                                <div>
                                                    <form >
                                                        <div className="row g-2">
                                                            <div className="col-sm-6">
                                                                <label htmlFor="street" className="form-label">Street Address</label>
                                                                <input type="text" className="form-control border-dark ${editStatus.addressDetails ? '' : 'readonly'}" id="street" name='streetAddress' value={complaintData.addressDetails.streetAddress} onChange={(event) => onChange('addressDetails', event)} />
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <label htmlFor="city" className="form-label">City</label>
                                                                <input type="text" className="form-control border-dark ${editStatus.addressDetails ? '' : 'readonly'}" id="city" name='city'value={complaintData.addressDetails.city} onChange={(event) => onChange('addressDetails', event)} />
                                                            </div>
                                                        </div>
                                                        <div className="row g-3">
                                                            <div className="col-sm-3">
                                                                <label htmlFor="state" className="form-label mt-3">State/Province/Region</label>
                                                                <select className="form-select border-dark ${editStatus.addressDetails ? '' : 'readonly'}" aria-label="Default select example" name='state' value={complaintData.addressDetails.state} onChange={(event) => onChange('addressDetails', event)}>
                                                                    <option selected>Select The State</option>
                                                                    <option value="Maharashtra">Maharashtra</option>
                                                                    <option value="Gujarat">Gujarat</option>
                                                                    <option value="Rajsthan">Rajsthan</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <label htmlFor="pincode" className="form-label mt-3">Postal Code/ZIP Code</label>
                                                                <input type="text" className="form-control border-dark ${editStatus.addressDetails ? '' : 'readonly'}" id="pincode" name='postalCode' value={complaintData.addressDetails.postalCode} onChange={(event) => onChange('addressDetails', event)} />
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <label htmlFor="country" className="form-label mt-3">Country</label>
                                                                <select className="form-select border-dark ${editStatus.addressDetails ? '' : 'readonly'}" aria-label="Default select example" name='country' value={complaintData.addressDetails.country} onChange={(event) => onChange('addressDetails', event)}>
                                                                     <option selected >country</option>
                                                                     <option value="India" >India</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className='d-flex'>
                                                        {editStatus.addressDetails ? (
                                                        <button type="button" className="btn btn-primary mx-1 mt-3" onClick={() => handleSave('addressDetails')}>Save</button>
                                                    ) : (
                                                        <button type="button" className="btn btn-success mx-1 mt-3" onClick={() => handleUpdate('addressDetails')}>Update</button>
                                                    )}
                                                      </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3 border-dark" id="complaint-details">
                                            <div className="card-body">
                                                <h5 className="card-title">Complaint Details:</h5>
                                                <form>

                                                    <div className="mb-3">
                                                        <label htmlFor="Category" className="form-label mt-2">Category/Subcategory Selection</label>
                                                        <select className="form-select border-dark  ${editStatus.complaintDetails ? '' : 'readonly'}" aria-label="Default select example" name='category'value={complaintData.complaintDetails.category} onChange={(event) => onChange('complaintDetails', event)}>
                                                            <option  selected>Choose Complaint Category</option>
                                                            <option value="Noise Complaint">Noise Complaint</option>
                                                            <option value="Public Facility Maintenance">Public Facility Maintenance</option>
                                                            <option value="Law Enforcement Concerns">Law Enforcement Concerns</option>
                                                            <option value="Housing and Property Concerns">Housing and Property Concerns</option>
                                                            <option value="Infrastructure Issues">Infrastructure Issues</option>
                                                            <option value="Public Health and Safety">Public Health and Safety</option>
                                                            <option value="Environmental Concerns">Environmental Concerns</option>
                                                            <option value="Transportation and Traffic Issues">Transportation and Traffic Issues</option>
                                                        </select>
                                                    </div>  <div className="mb-3">
                                                        <label htmlFor="location" className="form-label">Location of Incident:</label>
                                                        <input type="text" className="form-control border-dark  ${editStatus.complaintDetails ? '' : 'readonly'}" name='locationOfIncident' id="location"  value={complaintData.complaintDetails.locationOfIncident} onChange={(event) => onChange('complaintDetails', event)}/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description of the Complaint</label>
                                                        <textarea className="form-control border-dark  ${editStatus.complaintDetails ? '' : 'readonly'}" id="exampleFormControlTextarea1" rows="3"  name='description' value={complaintData.complaintDetails.description} onChange={(event) => onChange('complaintDetails', event)}></textarea>
                                                    </div>
                                                    <div className='d-flex'>
                                                    {editStatus.complaintDetails ? (
                                                        <button type="button" className="btn btn-primary mx-1" onClick={() => handleSave('complaintDetails')}>Save</button>
                                                    ) : (
                                                        <button type="button" className="btn btn-success mx-1" onClick={() => handleUpdate('complaintDetails')}>Update</button>
                                                    )}
                                                      </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card mt-3 border-dark" id="supporting-documents">
                                            <div className="card-body">
                                                <h5 className="card-title">Supporting Documents:</h5>
                                                <div><div className="mb-3">
                                                    <label htmlFor="formFile" className="form-label">Upload  Supporting Documents</label>
                                                    <input className="form-control border-dark  ${editStatus.supportingDocuments ? '' : 'readonly'}" type="file" id="formFile"  name='documents' value={complaintData.supportingDocuments.documents} onChange={(event) => onChange('supportingDocuments', event)} />
                                                    <div className='d-flex'>
                                                    {editStatus.supportingDocuments ? (
                                                        <button type="button" className="btn btn-primary mx-1" onClick={() => handleSave('supportingDocuments')}>Save</button>
                                                    ) : (
                                                        <button type="button" className="btn btn-success mx-1" onClick={() => handleUpdate('supportingDocuments')}>Update</button>
                                                    )}
                                                      </div>
                                                </div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='xyz text-center'>
                                    <button type="submit" className="btn btn-primary mx-1 mt-3 text-center" onClick={handleSubmitbutton}>Submit</button>
                                                 
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
