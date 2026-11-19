import { useState, type ChangeEvent, type FormEvent } from 'react';

interface FormData {
  username: string;
  email: string;
  message: string;
}

interface ErrorData {
  error: boolean;
  message: string;
}

const initialErrorData: ErrorData = {
  error: false,
  message: '',
};

const initialFormData: FormData = {
  username: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [successMessageShown, setSuccessMessageShown] = useState(false);
  const [errorData, setErrorData] = useState<ErrorData>(initialErrorData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof FormData
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [key]: value.trim() }));
    setSuccessMessageShown(false);
  };

  // const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const usernameInput = e.target.value;
  //   setFormData((prev) => ({ ...prev, username: usernameInput.trim() }));
  //   setSuccessMessageShown(false);
  // };

  // const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const emailInput = e.target.value;
  //   setFormData((prev) => ({ ...prev, email: emailInput.trim() }));
  //   setSuccessMessageShown(false);
  // };

  // const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   const messageInput = e.target.value;
  //   setFormData((prev) => ({ ...prev, message: messageInput.trim() }));
  //   setSuccessMessageShown(false);
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.username === '' ||
      formData.email === '' ||
      formData.message === ''
    ) {
      setErrorData({
        error: true,
        message: 'All fields are required.',
      });
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorData({
        error: true,
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setErrorData(initialErrorData);
    setFormData(initialFormData);
    setSuccessMessageShown(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Name</label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={(e) => handleChange(e, 'username')}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={(e) => handleChange(e, 'email')}
        />

        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          value={formData.message}
          onChange={(e) => handleChange(e, 'message')}
        ></textarea>
        <button type='submit'>Send Message</button>
      </form>
      {errorData.error && <p>{errorData.message}</p>}
      {successMessageShown && <p>Message sent successfully!</p>}
    </div>
  );
};

export default ContactForm;
