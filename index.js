import React, { useState, useEffect } from 'react';

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

function UserCard({ user }) {
    const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`;
    
    return (
        <div>
            <img src={avatarUrl} alt={`${user.name}'s avatar`} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
}


import { Button, Card, Grid } from '@mantine/core';

function UserCard({ user }) {
    const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`;
    
    return (
        <Grid.Col span={4}>
            <Card>
                <img src={avatarUrl} alt={`${user.name}'s avatar`} />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <Button>Contact</Button>
            </Card>
        </Grid.Col>
    );
}
