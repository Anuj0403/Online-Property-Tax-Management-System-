import React from "react";
import "./Contact.css";

function Contact(){
    document.title = "Contact Us";
    return (
        <div id="contact-main">
            <div className="contact-first">
                <p className="contact-heading">Contact Us</p>
                <table className="table-contact">
                    <tbody>
                        <tr>
                            <td className="first-col">Name</td>
                            <td className="second-col">Anuj Rajeev</td>
                        </tr>
                        <tr>
                            <td className="first-col">Address</td>
                            <td className="second-col">Om Pg,Nayapatty AN Block, Sector V, opposite to Technopolis, Kolkata - 700091</td>
                        </tr>
                        <tr>
                            <td className="first-col">Mobile No.</td>
                            <td className="second-col">8809468881</td>
                        </tr>
                        <tr>
                            <td className="first-col">Email Id</td>
                            <td className="second-col">nayan04rajeev@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Contact;