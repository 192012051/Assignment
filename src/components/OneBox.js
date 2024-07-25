// src/components/Onebox.js
import React,{useState,useEffect}from 'react';
import axios from 'axios';
import './OneBox.css';
import OneBoxIcon from './OneBoxImg.png';


const OneBox = () => {

    const [emails, setEmails] = useState([]);
    const [error, setError] = useState(null);

    const fetchEmails = async () => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            setError('No token found');
            return;
        }

        try {
            const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setEmails(response.data);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError('Error fetching emails');
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        // Optionally, fetch emails on component mount
        // fetchEmails();
    }, []);

    return (
        <div className="onebox">
            <div className="sidebar">
                <div className="logo">M</div>
                <div className="icon home-icon">🏠</div>
                <div className="icon user-icon">👤</div>
                <div className="icon mail-icon" onClick={fetchEmails}>📧</div>
                <div className="icon send-icon">✈️</div>
                <div className="icon chart-icon">📊</div>
                <div className="icon notifications-icon">🔔</div>
                <div className="profile-icon">AS</div>
            </div>
            <div className="main-content">
                <div className="header">
                    <div className="workspace-dropdown">Tim's Workspace ▾</div>
                </div>
                
                <div className="center-content">
                     {error && <p style={{ color: 'red' }}>{error}</p>}
                     <ul>
                         {emails.length > 0 ? (
                             emails.map((email, index) => (
                                 <li key={index} style={{ marginBottom: '10px' }}>
                                     <strong>Subject:</strong> {email.subject} <br />
                                     <strong>Sender:</strong> {email.sender}
                                 </li>
                             ))
                         ) : (
                             <li><img src={OneBoxIcon} alt="Email Illustration" className="center-image" />
                             <h1 className="main-heading">It's the beginning of a legendary sales pipeline</h1>
                             <p className="sub-heading">When you have inbound E-mails you'll see them here</p></li>
                         )}
                     </ul>
                    
                </div>
            
            </div>
        </div>
    );
};

export default OneBox;
