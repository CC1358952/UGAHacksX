import React from 'react';

const Profile = ({ userData }) => {
    if (!userData) {
        return (<div><h2>Earned Badges</h2><p>No badges earned yet.</p><h2>User Stats</h2><p>Questions Attempted: </p><p>Questions Correct: </p><p>Correct Answer Percentage: </p></div>);
    }

    return (
        <div>
            <h2>Earned Badges</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {userData.badges.map((badge, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        <strong>{badge.badgeName}</strong>
                        <div>Earned on: {new Date(badge.dateEarned).toLocaleDateString()}</div>
                    </div>
                ))}
            </div>
            <h2>User Stats</h2>
            <p>Questions Attempted: </p>
            <p>Questions Correct: </p>
            <p>Correct Answer Percentage: </p>
        </div>
    );
};

export default Profile;