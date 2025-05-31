'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitContactForm, type ContactFormState } from '../actions/contact'
import { useRef, useEffect } from 'react'

const initialState: ContactFormState = {
    success: false,
    message: '',
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            className="contact-submit button-primary mx-auto"
            disabled={pending}
        >
            <span className="button-primary-lbl">
                {pending ? 'Sending...' : 'Submit'}
            </span>
            <svg
                className="button-primary-icon"
                width="17"
                height="12"
                viewBox="0 0 17 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.0003 6.00536C15.0003 5.74015 14.8949 5.4858 14.7074 5.29826C14.5198 5.11073 14.2655 5.00537 14.0003 5.00537H1.50036C1.23515 5.00537 0.980793 5.11073 0.793258 5.29826C0.605723 5.4858 0.500366 5.74015 0.500366 6.00536C0.500366 6.27058 0.605723 6.52493 0.793258 6.71247C0.980793 6.9 1.23515 7.00536 1.50036 7.00536H14.0003C14.2655 7.00536 14.5198 6.9 14.7074 6.71247C14.8949 6.52493 15.0003 6.27058 15.0003 6.00536Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="0.6"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4997 6.00591C16.4996 5.74071 16.3942 5.4864 16.2067 5.29891L11.7067 0.798939C11.6145 0.703429 11.5041 0.627247 11.3821 0.574839C11.2601 0.52243 11.1289 0.494844 10.9961 0.49369C10.8633 0.492536 10.7317 0.517838 10.6088 0.568119C10.4859 0.618399 10.3742 0.692652 10.2803 0.786544C10.1864 0.880436 10.1122 0.992087 10.0619 1.11498C10.0116 1.23788 9.98631 1.36956 9.98746 1.50234C9.98862 1.63511 10.0162 1.76633 10.0686 1.88834C10.121 2.01034 10.1972 2.12068 10.2927 2.21293L14.0857 6.00591L10.2927 9.79888C10.1051 9.98639 9.99961 10.2408 9.99951 10.506C9.99942 10.7713 10.1047 11.0257 10.2922 11.2134C10.4797 11.401 10.7341 11.5065 10.9994 11.5066C11.2646 11.5067 11.5191 11.4014 11.7067 11.2139L16.2067 6.7139C16.2997 6.62095 16.3734 6.51057 16.4237 6.38908C16.474 6.26759 16.4998 6.13738 16.4997 6.00591Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="0.6"
                />
            </svg>
        </button>
    )
}

export default function ContactSection() {
    const [state, formAction] = useFormState(submitContactForm, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    // Reset form on successful submission
    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset()
        }
    }, [state.success])

    return (
        <section className="contact-wrapper page-spacing page-width">
            <div className="contact-heading-wrapper heading-wrapper">
                <h2 className="contact-us-title section-title">Contact Us</h2>
            </div>

            <div className="contact-main-inner">
                <div className="contact-info-wrapper">
                    <h6 className="let-s-work-together">Let's Work Together</h6>

                    <div className="contact-info-item contact-info-item-1">
                        <p className="contact-info-item-first">
                            For Microbiome Consultation &amp; Testing
                        </p>
                        <a href="mailto:smita@rejuvome.com" className="contact-info-item-second">
                            smita@rejuvome.com
                        </a>
                    </div>

                    <div className="contact-info-item contact-info-item-2">
                        <div className="contact-info-item-first">
                            For Partnering Opportunities &amp; Collaborations
                        </div>
                        <a href="mailto:darshit@rejuvome.com" className="contact-info-item-second">
                            darshit@rejuvome.com
                        </a>
                    </div>

                    <div className="contact-info-item contact-info-item-3">
                        <div className="contact-info-item-first">Need more information?</div>
                        <div className="contact-info-item-second cust-contact-info-item-second">
                            Send us a message and we will get back to you!
                        </div>
                    </div>
                </div>

                <form ref={formRef} action={formAction} className="contact-fields-wrapper">
                    <div className="input-group">
                        <div className="input-lbl">Your Name</div>
                        <input
                            type="text"
                            name="user_name"
                            className="input-field"
                            placeholder="Enter your name"
                            required
                        />
                        {state.errors?.user_name && (
                            <div className="error-message" style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>
                                {state.errors.user_name[0]}
                            </div>
                        )}
                    </div>

                    <div className="input-group">
                        <div className="input-lbl">Phone Number</div>
                        <input
                            type="tel"
                            name="contact_number"
                            className="input-field"
                            placeholder="Enter your phone number"
                            required
                        />
                        {state.errors?.contact_number && (
                            <div className="error-message" style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>
                                {state.errors.contact_number[0]}
                            </div>
                        )}
                    </div>

                    <div className="input-group">
                        <div className="input-lbl">Email Address</div>
                        <input
                            type="email"
                            name="user_email"
                            className="input-field"
                            placeholder="Enter your email address"
                            required
                        />
                        {state.errors?.user_email && (
                            <div className="error-message" style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>
                                {state.errors.user_email[0]}
                            </div>
                        )}
                    </div>

                    <div className="input-group">
                        <div className="input-lbl">How can we assist you?</div>
                        <textarea
                            name="message"
                            rows={4}
                            className="input-field"
                            placeholder="Type your message here..."
                            required
                        />
                        {state.errors?.message && (
                            <div className="error-message" style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>
                                {state.errors.message[0]}
                            </div>
                        )}
                    </div>

                    <SubmitButton />

                    {/* Status Message */}
                    {state.message && (
                        <div
                            className={`response-message ${state.success ? 'success' : 'error'}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '12px 16px',
                                marginTop: '16px',
                                borderRadius: '8px',
                                backgroundColor: state.success ? '#d4edda' : '#f8d7da',
                                color: state.success ? '#155724' : '#721c24',
                                border: `1px solid ${state.success ? '#c3e6cb' : '#f5c6cb'}`,
                                textAlign: 'center'
                            }}
                        >
                            {state.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}