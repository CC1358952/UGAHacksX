import React from 'react';

const Profile = ({userData}) => {
    return (
        <div>
            <h2>Earned Badges</h2>
            {userData.badges.length === 0 ? (
                <p>No badges earned yet.</p>
            ) : (
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    {userData.badges.map((badge, index) => (

                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                            <strong>{badge.badgeName}</strong>
                            <div>Earned on: {newDate(badge.dateEarned).toLocaleDataString()}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Profile;