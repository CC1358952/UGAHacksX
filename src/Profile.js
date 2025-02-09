import React from 'react';

const Profile = ({ userData }) => {
    if (!userData) {
        return <p>No badges earned yet.</p>;
    }

    return (
        <div>
            <h2>Earned Badges</h2>
            {userData.badges.length === 0 ? (
                <p>No badges earned yet.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {userData.badges.map((badge, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                            <strong>{badge.badgeName}</strong>
                            <div>Earned on: {new Date(badge.dateEarned).toLocaleDateString()}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;