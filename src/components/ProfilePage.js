import React, { useState, useEffect } from 'react';

const ProfilePage = ({setLoginStatus}) => {
    const[userExtendedDetails, setUserExtendedDetails] = useState({});

    function fetchUserDetails() {
        const userPrimaryDetails = JSON.parse(localStorage.getItem('userPrimaryDetails'));

        fetch(`https://dummyjson.com/users/${userPrimaryDetails.id}`)
            .then(res => res.json())
            .then((responseBody)=> {
                localStorage.setItem('userExtendedDetails', JSON.stringify(responseBody));
                setUserExtendedDetails(responseBody);
                console.log(userExtendedDetails);                
            })
            .catch(e=>console.log);
        
    }

    useEffect(fetchUserDetails, []);    

    return (
        <div className="profile-page-container">
            <h1>Your Profile</h1>
            <button className="sign-out-button" onClick={(e)=>setLoginStatus('PENDING')}>Sign out</button>
            <table>
                
                {
                    Object.entries(userExtendedDetails).map((item)=>{
                        if (item[0]==="address") {
                            const address = item[1].address + ", " +item[1].address.city + ", "+item[1].address.state;
                            return (
                                <tr>
                                    <td>ADDRESS</td>
                                    <td>{address}</td>
                                </tr>
                            )
                        }
                        else if (item[0] === 'company') {
                            const company = item[1].name;
                            return (
                                <tr>
                                    <td>COMPANY</td>
                                    <td>{company}</td>
                                </tr>
                            )
                        }
                        else if ((typeof item[1]) === "object") {
                            return "";
                        }
                        else {
                            return (
                                <tr>
                                    <td style={{textTransform:'capitalize'}}>{item[0]}</td>
                                    <td>{item[1]}</td>
                                </tr>
                            )
                        }

                    })
                }

            </table>
        </div>
    )
}
export default ProfilePage;