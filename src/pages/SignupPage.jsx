import { useContext, useState } from "react";
import PageContext from "../context/PageContext";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const { setPageIndex } = useContext(PageContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        password: "",
        company: "",
        agency: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Submitted:", formData);

        

        if (!formData.name || !formData.email || !formData.password) {
            alert("Please fill all required fields");
            return;
        }

        setPageIndex(3);
        navigate("/profile");
    };

    return (
        <div className="container login-container">
            <h1 className="text heading">Create your <br />PopX account</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-container">

                    <fieldset className="fieldset">
                        <legend>Name <span className="star">*</span></legend>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            className="text-input"
                            onChange={handleChange}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Number <span className="star">*</span></legend>
                        <input
                            type="tel"
                            name="number"
                            placeholder="Enter your mobile number"
                            className="text-input"
                            onChange={handleChange}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Email <span className="star">*</span></legend>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="text-input"
                            onChange={handleChange}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Password <span className="star">*</span></legend>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="text-input"
                            onChange={handleChange}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Company </legend>
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter your company name"
                            className="text-input"
                            onChange={handleChange}
                        />
                    </fieldset>
                </div>

                <p className="text">Are you an agency?</p>
                <div className="radio-container text">
                    <label>
                        <input
                            type="radio"
                            name="agency"
                            value="Yes"
                            onChange={handleChange}
                        /> Yes
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="agency"
                            value="No"
                            onChange={handleChange}
                        /> No
                    </label>
                </div>

                <button type="submit" className="btn create-btn create-btn-position">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupPage;
