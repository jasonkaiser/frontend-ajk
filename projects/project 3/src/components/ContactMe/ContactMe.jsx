import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
  },
});

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formValues.name) {
      errors.name = 'Name is required';
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formValues.message) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form submitted successfully', formValues);
      setIsSubmitted(true);
      setFormValues({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact">
      <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{ mt: 3 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formValues.name}
          onChange={handleChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#6751b9', 
              },
              '&:hover fieldset': {
                borderColor: '#6751b9', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#6751b9', 
              },
              backgroundColor: 'transparent', 
            },
            '& .MuiInputLabel-root': {
              color: '#6751b9', 
            },
            '& .MuiOutlinedInput-input': {
              color: 'white', 
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formValues.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#6751b9', 
              },
              '&:hover fieldset': {
                borderColor: '#6751b9', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#6751b9', 
              },
              backgroundColor: 'transparent', 
            },
            '& .MuiInputLabel-root': {
              color: '#6751b9', 
            },
            '& .MuiOutlinedInput-input': {
              color: 'white', 
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          value={formValues.message}
          onChange={handleChange}
          error={!!formErrors.message}
          helperText={formErrors.message}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#6751b9', 
              },
              '&:hover fieldset': {
                borderColor: '#6751b9', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#6751b9', 
              },
              backgroundColor: 'transparent', 
            },
            '& .MuiInputLabel-root': {
              color: '#6751b9', 
            },
            '& .MuiOutlinedInput-input': {
              color: 'white', 
            },
          }}
        />
        <Button
          type="submit"
          fullWidth
          sx={{
            fontSize: '1rem',
            fontWeight: 500,
            color: '#fff',
            border: '1.5px solid #a892fe',
            borderRadius: '0.6rem',
            background: 'linear-gradient(90deg, #a892fe 0%, #8064e8 100%)',
            padding: '0.7rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              color: '#a892fe',
              background: 'transparent',
            },
          }}
        >
          Submit
        </Button>
        {isSubmitted && (
          <Typography
            variant="body1"
            color="success"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            Thank you for your message!
          </Typography>
        )}
      </Box>
    </Container>
    </ThemeProvider>
    </section>
  );
};

export default ContactForm;