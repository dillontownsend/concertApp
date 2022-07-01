import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles, { fieldColor } from './Styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import SubmitButton from '../../../components/SignInScreen/SubmitButton/SubmitButton'
import useAuth from '../../../hooks/useAuth'

const Form = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const { signIn } = useAuth()

	const handleSignIn = (email, password) => {
		setLoading(true)
		signIn(email, password).then(async (result) => {
			const res = await result
			if (res) {
				setError(res)
				setLoading(false)
			}
		})
	}

	const validationSchema = yup.object().shape({
		email: yup.string().email().required(),
		password: yup.string().required(),
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
			initialValues={{ email: '', password: '' }}
			onSubmit={(values, action) => {
				action.resetForm()
				action.validateForm()
				handleSignIn(values.email, values.password)
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
							There is no account with that email and password
						</Text>
					)}

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
