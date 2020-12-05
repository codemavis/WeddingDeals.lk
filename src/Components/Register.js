import React, { useState } from 'react';
import PageInfo from './PageInfo';

const pageName = "Create Account";
const pageLink = "register";

export default function Register() {

    const initialEntity = {
        firstname: '',
        lastname: '',
        company: '',
        phone: '',
        email: '',
        website: '',
        issupplier: false,
        iscustomer: true,
        pricelevel: 1,
        password: ''
    };

    const initialAddress = {
        addr1: '',
        addr2: '',
        city: '',
        zip: '',
        province: ''
    }

    const [entity, setEntity] = useState(initialEntity);

    const [address, setAddress] = useState(initialAddress);

    const [confirmPwd, setConfirmPwd] = useState('');

    const onSubmit = async (e) => {

        e.preventDefault();

        if (!validateEntries()) return false;

        //API Call
        let isSaved = await saveData();

        console.log('isSaved', isSaved);
        if (isSaved) {
            setEntity(initialEntity);
            setAddress(initialAddress);
        }

    }

    const handleChange = (e) => {

        const newEntity = { ...entity };
        const newAddress = { ...address };

        switch (e.target.name) {
            case 'firstname':
                newEntity.firstname = e.target.value;
                break;
            case 'lastname':
                newEntity.lastname = e.target.value;
                break;
            case 'company':
                newEntity.company = e.target.value;
                break;
            case 'address':
                newEntity.address = e.target.value;
                break;
            case 'phone':
                newEntity.phone = e.target.value;
                break;
            case 'email':
                newEntity.email = e.target.value.toLowerCase();
                break;
            case 'website':
                newEntity.website = e.target.value;
                break;
            case 'password':
                newEntity.password = e.target.value;
                break;
            case 'confirmpassword':
                setConfirmPwd(e.target.value);
                break;
            case 'addr1':
                newAddress.addr1 = e.target.value;
                break;
            case 'addr2':
                newAddress.addr2 = e.target.value;
                break;
            case 'city':
                newAddress.city = e.target.value;
                break;
            case 'zip':
                newAddress.zip = e.target.value;
                break;
            case 'province':
                newAddress.province = e.target.value;
                break;

            default:
                break;
        }
        setEntity(newEntity);
        setAddress(newAddress);
    }

    const validateEntries = () => {
        if (entity.password !== confirmPwd) {
            alert('Those passwords didn\'t match. Try again.');
            return false;
        }

        return true;
    }

    const saveData = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entity)
        };
        const response = await fetch('http://localhost:5000/entity', requestOptions);
        const data = await response.json();
        console.log('data', data);

        alert(data.message);

        return true;
    }

    return (
        <div>
            <PageInfo pageName={pageName} pageLink={pageLink} />
            <section className="checkout-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-2 order-lg-1">
                            <form className="checkout-form" onSubmit={onSubmit}>
                                <div className="cf-title">Create Your WeddingDeals.lk Account</div>

                                <div className="row basic-inputs">
                                    <div className="col-md-6">
                                        <input type="text" name="firstname" required id="firstname" placeholder="First Name" value={entity.firstname} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="lastname" required id="lastname" placeholder="Last Name" value={entity.lastname} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" name="company" id="company" placeholder="Company" value={entity.company} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="email" name="email" id="email" required placeholder="Email" value={entity.email} pattern="[ A-Za-z0-9._%+-]+@[ A-Za-z0-9.-]+\.[ A-Za-z]{2,4}$" onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <input type="password" name="password" id="password" required placeholder="Password" value={entity.password} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="password" name="confirmpassword" id="confirmpassword" required placeholder="Confirm Password" value={confirmPwd} onChange={handleChange} />
                                    </div>

                                </div>

                                <div className="cf-title">Contact Info</div>

                                <div className="row address-inputs">

                                    <div className="col-md-12">
                                        <input type="text" name="addr1" id="addr1" required placeholder="Address Line 1" value={address.addr1} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" name="addr2" id="addr2" placeholder="Address Line 2" value={address.addr2} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-4">
                                        <input type="text" name="city" id="city" required placeholder="City" value={address.city} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" name="zip" id="zip" required placeholder="Zip" value={address.zip} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" name="province" id="province" placeholder="Province" value={address.province} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="phone" id="phone" required placeholder="Phone No." value={entity.phone} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="website" id="website" placeholder="Website" value={entity.website} onChange={handleChange} />
                                    </div>

                                </div>

                                <button type="submit" className="site-btn submit-order-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
