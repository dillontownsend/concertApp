import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Styles'
import SearchBar from '../SearchBar/SearchBar'
import ListItem from '../ListItem/ListItem'
import cityObjects from '../../../assets/cities'

const CityList = ({ navigation, route }) => {
	const [input, setInput] = useState('')
	const [filteredData, setFilteredData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setFilteredData(cityObjects)
	}, [])

	const searchFilter = (text) => {
		if (text) {
			const newData = cityObjects.filter((item) => {
				const itemData = item.city
					? item.city.toUpperCase()
					: ''.toUpperCase()

				const textData = text.toUpperCase()
				return itemData.indexOf(textData) > -1
			})
			setFilteredData(newData)
			setInput(text)
		} else {
			setFilteredData(cityObjects)
			setInput(text)
		}
	}

	if (loading) {
		return (
			<ActivityIndicator
				size={'large'}
				color={'white'}
				style={styles.spinner}
			/>
		)
	}

	return (
		<FlatList
			data={filteredData}
			keyExtractor={(city) => city.id}
			ListHeaderComponent={
				<SearchBar
					input={input}
					searchFilter={searchFilter}
					navigation={navigation}
				/>
			}
			stickyHeaderIndices={[0]}
			showsVerticalScrollIndicator={false}
			renderItem={({ item, index }) => {
				return (
					<ListItem
						city={item.city}
						state={item.state}
						index={index}
						setLoading={setLoading}
                        navigation={navigation}
                        route={route}
					/>
				)
			}}
		/>
	)
}

export default CityList
