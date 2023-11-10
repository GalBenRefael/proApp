import { useNavigate } from 'react-router-dom';
import '../styles/processing.css';
import { useEffect } from 'react';
import { baseUrl } from '../constants';

function Processing2({ email }) {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      fetch(`${baseUrl}/email/otp-status/${encodeURIComponent(email)}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.isOtp) {
            navigate('/otp');
          }
        });
    }, [5_000]);

    return () => {
      clearInterval(id);
    };
  }, [email, navigate]);

  return (
    <>
      <div className="center-loader">
        <div className="loader"></div>
      </div>
    </>
  );
}

export default Processing2;
