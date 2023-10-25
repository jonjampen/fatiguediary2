import React from 'react'
import Form from '@/components/Form'

export default function Login() {
    let fields = [
        {
            title: "Password",
            placeholder: "Enter a new password",
            name: "password",
            type: "password",
        },
        {
            title: "Password Confirmation",
            placeholder: "Repeat your new password",
            name: "passwordConf",
            type: "password",
        },
    ]
    return (
        <Form title="Reset Your Password" description="Enter your new password." fields={fields} info="After setting your new password " link="/login" linkText="log in." />
    )
}
