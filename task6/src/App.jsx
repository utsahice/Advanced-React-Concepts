import { useFormik } from 'formik'
import BasicSchema from './schema'
function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        dateOfBirth: '',
      },
      validationSchema: BasicSchema,
      onSubmit: (vals) => {
        console.log('Submitted:', vals)
      },
    })
  console.log(errors)
  return (
    <>
      <p>Registration Form</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name='name'
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          type='text'
        />
        {touched.name && errors.name && (
          <span style={{ color: 'red', marginLeft: 8 }}>{errors.name}</span>
        )}
        <br />
        <label>Email</label>
        <input
          name='email'
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          type='email'
        />
        {touched.email && errors.email && (
          <span style={{ color: 'red', marginLeft: 8 }}>{errors.email}</span>
        )}
        <br />
        <label>Password</label>
        <input
          name='password'
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          type='password'
        />
        {touched.password && errors.password && (
          <span style={{ color: 'red', marginLeft: 8 }}>{errors.password}</span>
        )}
        <br />
        <label>Age</label>
        <input
          name='age'
          value={values.age}
          onBlur={handleBlur}
          onChange={handleChange}
          type='number'
        />
        {touched.age && errors.age && (
          <span style={{ color: 'red', marginLeft: 8 }}>{errors.age}</span>
        )}
        <br />
        <label>Gender</label>
        <select
          name='gender'
          value={values.gender}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          <option value=''>Select gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
        {touched.gender && errors.gender && (
          <span style={{ color: 'red', marginLeft: 8 }}>{errors.gender}</span>
        )}
        <br />
        <label>Date of Birth</label>
        <input
          name='dateOfBirth'
          value={values.dateOfBirth}
          onBlur={handleBlur}
          onChange={handleChange}
          type='date'
        />
        {touched.dateOfBirth && errors.dateOfBirth && (
          <span style={{ color: 'red', marginLeft: 8 }}>
            {errors.dateOfBirth}
          </span>
        )}
        <br />
        <button type='submit'>Register</button>
      </form>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <th style={{ border: '1px solid black' }}>name</th>
        <th style={{ border: '1px solid black' }}>email</th>
        <th style={{ border: '1px solid black' }}>password</th>
        <th style={{ border: '1px solid black' }}>age</th>
        <th style={{ border: '1px solid black' }}>gender</th>
        <th>dateOfBirth</th>
        <tr style={{ border: '1px solid black' }}>
          <td style={{ border: '1px solid black' }}>{values.name}</td>
          <td style={{ border: '1px solid black' }}>{values.email}</td>
          <td style={{ border: '1px solid black' }}>{values.password}</td>
          <td style={{ border: '1px solid black' }}>{values.age}</td>
          <td style={{ border: '1px solid black' }}>{values.gender}</td>
          <td style={{ border: '1px solid black' }}>{values.dateOfBirth}</td>
        </tr>
      </table>
    </>
  )
}

export default App
