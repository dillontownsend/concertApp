import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import useAddToCalendar from '../../../hooks/useAddToCalendar'

const Body = ({ name, date, time, location, city }) => {
	const [finished, setFinished] = useState(false)
	const [error, setError] = useState(false)

	const { addToCalendar } = useAddToCalendar(new Date(time), name, location)

	const handleAddToCalendar = async () => {
		if (!(await addToCalendar())) {
			setFinished(true)
		} else {
			setError(true)
		}
	}

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.name}>{name}</Text>

				<View style={styles.sectionContainer}>
					<View style={styles.sectionRow}>
						<Feather name="calendar" size={18} color="white" />
						<Text style={styles.sectionTitle}>
							{new Date(
								date.replace(/-/g, '/').replace(/T.+/, '')
							).toLocaleDateString('en-us', {
								weekday: 'long',
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							})}
						</Text>
					</View>
					<Text style={styles.sectionText}>
						{new Date(time).toLocaleTimeString('en-us', {
							hour: 'numeric',
							minute: '2-digit',
						})}
					</Text>
					{finished && (
						<Text style={styles.sectionLink}>
							Added To Calendar
						</Text>
					)}
					{error && (
						<Text style={styles.sectionLink}>
							Something Went Wrong
						</Text>
					)}
					{!finished && !error && (
						<TouchableOpacity onPress={() => handleAddToCalendar()}>
							<Text style={styles.sectionLink}>
								Add To Calendar
							</Text>
						</TouchableOpacity>
					)}
				</View>

				<View style={styles.sectionContainer}>
					<View style={styles.sectionRow}>
						<MaterialCommunityIcons
							name="map-marker-outline"
							size={18}
							color="white"
						/>
						<Text numberOfLines={1} style={styles.sectionTitle}>
							{location}
						</Text>
					</View>
					<Text style={styles.sectionText}>{city}</Text>
					<TouchableOpacity>
						<Text style={styles.sectionLink}>View on Maps</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.aboutTitle}>More Information</Text>
				<Text style={styles.aboutText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec ut tincidunt nunc. Morbi gravida a justo sit amet
					hendrerit. Ut vulputate, purus at tempus faucibus, mi quam
					viverra lectus, in porta odio sem eu augue.
				</Text>
			</View>
		</ScrollView>
	)
}

export default Body
