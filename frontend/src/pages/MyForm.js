import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/myForm.css';
import FormLayout from '../components/FormLayout';
import { baseUrl } from '../constants';

export default function MyForm({ email, setEmail }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLasttName] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();
    let user = {
      firstName,
      lastName,
      email,
      state,
      country,
      city,
      street,
      zip,
      phone,
    };

    setTimeout(() => {
      navigate('/card');
    }, 2000);

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
        }
      });
  };
  return (
    <>
      <FormLayout>
        <form onSubmit={sendEmail}>
          <div className="d-flex">
            <div className="form-floating left-input">
              <input
                value={firstName}
                type="text"
                className="form-control"
                id="floatingInput"
                name="firstName"
                minLength={3}
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingInput">
                First Name &#42;
              </label>
            </div>
            <div className="form-floating right-input">
              <input
                value={lastName}
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Middle Name"
                onChange={(e) => {
                  setLasttName(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingPassword">
                Last Name
              </label>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-floating email">
              <input
                value={email}
                type="email"
                className="form-control"
                id="floatingPassword"
                placeholder="Middle Name"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingPassword">
                Email
              </label>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-floating left-input">
              <input
                value={country}
                type="text"
                className="form-control"
                id="floatingInput"
                name="firstName"
                minLength={3}
                placeholder="First Name"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingInput">
                Country &#42;
              </label>
            </div>
            <div className="form-floating right-input">
              <input
                value={state}
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Middle Name"
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingPassword">
                State
              </label>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-floating left-input">
              <input
                value={city}
                type="text"
                className="form-control"
                id="floatingInput"
                name="firstName"
                minLength={3}
                placeholder="First Name"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingInput">
                City &#42;
              </label>
            </div>
            <div className="form-floating right-input">
              <input
                value={street}
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Middle Name"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingPassword">
                Street
              </label>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-floating left-input">
              <input
                value={zip}
                type="text"
                className="form-control"
                id="floatingInput"
                name="firstName"
                minLength={3}
                placeholder="First Name"
                onChange={(e) => {
                  setZip(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingInput">
                Zip &#42;
              </label>
            </div>
            <div className="form-floating right-input">
              <input
                value={phone}
                type="tel"
                className="form-control"
                id="floatingPassword"
                placeholder="Middle Name"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="floatingPassword">
                Phone Number
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="btn" id="submit">
              Submit
            </button>
          </div>
        </form>
      </FormLayout>
    </>
  );
}
