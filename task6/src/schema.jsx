import * as yup from 'yup'
const BasicSchema = yup.object().shape(
    {
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(3, 'Password must be at least 3 characters').required('Password is required'),
        name: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
        age: yup.number().min(18, 'Age must be at least 18').required('Age is required'),
        gender: yup.string().oneOf(['male', 'female', 'other'], 'Invalid gender').required('Gender is required'),
        dateOfBirth: yup.date().required('Date of Birth is required'),
    }
)


export default BasicSchema