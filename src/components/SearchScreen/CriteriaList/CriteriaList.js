import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'
import Criteria from '../Criteria/Criteria'

const CriteriaList = ({ active, setActive, setQuery }) => {
	const criteria = [
		{
			name: 'Artist',
		},
		{
			name: 'City',
		},
		{
			name: 'Venue',
		},
	]

	return (
		<View style={styles.container}>
			{criteria.map((criteria) => {
				return (
					<Criteria
						criteria={criteria.name}
						active={active}
						setActive={setActive}
						setQuery={setQuery}
						key={criteria.name}
					/>
				)
			})}
		</View>
	)
}

export default CriteriaList
