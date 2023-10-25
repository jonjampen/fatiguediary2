import React from 'react'
import Form from '@/components/Form'

export default function Login() {
    let fields = [
        {
            title: "Email",
            placeholder: "Email",
            name: "email",
            type: "email",
        },
    ]
    return (
        <Form title="Request Password Reset" description="Enter your email and check your inbox." fields={fields} info="You will receive an email with a reset link." link="" linkText="" />
    )
}
