import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles, { fieldColor } from './Styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import SubmitButton from '../SubmitButton/SubmitButton'
import useAuth from '../../../hooks/useAuth'

const Form = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const { signUp } = useAuth()

	const handleSignUp = (name, email, password) => {
		setLoading(true)
		signUp(name, email, password).then(async (result) => {
			const res = await result
			if (res) {
				setError(res)
				setLoading(false)
			}
		})
	}

	const validationSchema = yup.object().shape({
		name: yup.string().min(3).required(),
		email: yup.string().email().required(),
		password: yup.string().min(6).required(),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match')
			.required('Confirm your password'),
	})

	if (loading) {
		return (
			<ActivityIndicator
				size={'large'}
				color={'white'}
				style={{ flex: 1 }}
			/>
		)
	}

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
			}}
			onSubmit={(values, actions) => {
				actions.resetForm()
				actions.validateForm()
				handleSignUp(values.name, values.email, values.password)
			}}
			validationSchema={validationSchema}
			validateOnMount
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched,
				isValid,
			}) => (
				<View style={styles.container}>
					{error && (
						<Text style={styles.topErrorText}>
							An account has already been created with that email
						</Text>
					)}

					<View style={styles.fieldContainer}>
						<Text style={styles.label}>Name</Text>
						<TextInput
							style={styles.field}
							placeholder="Jane Doe"
							placeholderTextColor={fieldColor.placeHolder}
							keyboardAppearance="dark"
							value={values.name}
							onChangeText={handleChange('name')}
							onBlur={handleBlur('name')}
						/>
						{errors.name && touched.name && (
							<Text style={styles.errorText}>{errors.name}</Text>
						)}
					</View>

					<View style={styles.fieldContainer}>
						<Text style={styles.label}>Email Address</Text>
						<TextInput
							style={styles.field}
							placeholder="name@example.com"
							placeholderTextColor={fieldColor.placeHolder}
							keyboardAppearance="dark"
                            keyboardType='email-address'
							value={values.email}
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
						/>
						{errors.email && touched.email && (
							<Text style={styles.errorText}>{errors.email}</Text>
						)}
					</View>

					<View style={styles.fieldContainer}>
						<Text style={styles.label}>Password</Text>
						<TextInput
							style={styles.field}
							placeholder="Enter your password"
							placeholderTextColor={fieldColor.placeHolder}
							keyboardAppearance="dark"
							value={values.password}
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							secureTextEntry
						/>
						{errors.password && touched.password && (
							<Text style={styles.errorText}>
								{errors.password}
							</Text>
						)}
					</View>

					<View style={styles.fieldContainer}>
						<Text style={styles.label}>Confirm Password</Text>
						<TextInput
							style={styles.field}
							placeholder="Re-enter your password"
							placeholderTextColor={fieldColor.placeHolder}
							keyboardAppearance="dark"
							value={values.confirmPassword}
							onChangeText={handleChange('confirmPassword')}
							onBlur={handleBlur('confirmPassword')}
							secureTextEntry
						/>
						{errors.confirmPassword && touched.confirmPassword && (
							<Text style={styles.errorText}>
								{errors.confirmPassword}
							</Text>
						)}
					</View>

					<SubmitButton
						isValid={isValid}
						handleSubmit={handleSubmit}
					/>
				</View>
			)}
		</Formik>
	)
}

export default Form
