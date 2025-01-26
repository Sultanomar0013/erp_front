import React, { useState } from 'react';
import useFetch from '../../useFetch/useFetch';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Button, Typography, Paper } from '@mui/material';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [showSignUp, setShowSignUp] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { fetchData, loadingFetch, errorFetch } = useFetch();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const url = `${import.meta.env.VITE_ADRESS}/api/signup`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, userName, password }),
        };

        const data = await fetchData(url, options);

        if (data) {
            if (data.success) {
                console.log('Sign-up successful:', data);
                setShowSignUp(false); // Hide sign-up form on success
                navigate('/'); // Navigate to home or a different page on success
            } else {
                setError(data.message || 'Sign-up failed. Please try again.');
            }
        } else if (errorFetch) {
            setError(errorFetch);
        }

        setLoading(false);
    };
    // const urls = import.meta.env.VITE_ADRESS;
    // console.log(urls);
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // const url = `${import.meta.env.VITE_ADRESS}/api/login`;
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email, password }),
        // };

        // const data = await fetchData(url, options);
        // console.log('Data received from fetchData:', data);
        // if (data) {
        //     if (data.success) {
        //         console.log('Login successful:', data);
        //         localStorage.setItem('token', data.token);
        //         navigate('/home');
        //     } else {
        //         setError(data.message || 'Login failed. Please try again.');
        //     }
        // } else if (errorFetch) {
        //     setError(errorFetch);
        // }

        // setLoading(false);
        navigate('/userMod/home');
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', padding: '20px' }}>
            <Grid item xs={12} sm={8} md={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <Typography variant="h5" align="center">
                        {showSignUp ? 'Sign Up' : 'Log In'}
                    </Typography>
                    <Grid container spacing={2} style={{ marginTop: '10px' }}>
                        {showSignUp && (
                            <>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="User Name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                            </>
                        )}
                        {!showSignUp && (
                            <>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                            </>
                        )}
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={showSignUp ? handleSignUp : handleLogin}
                                disabled={loading || loadingFetch}
                                fullWidth
                            >
                                {loading || loadingFetch
                                    ? (showSignUp ? 'Signing Up...' : 'Logging In...')
                                    : (showSignUp ? 'Sign Up' : 'Log In')}
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                color="secondary"
                                onClick={() => setShowSignUp(!showSignUp)}
                                fullWidth
                            >
                                {showSignUp ? 'Already have an account? Log In' : 'Need an account? Sign Up'}
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default LogIn;
