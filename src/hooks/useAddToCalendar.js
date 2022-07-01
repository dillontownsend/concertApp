import React from 'react'
import * as Calendar from 'expo-calendar'

const useAddToCalendar = (date, name, location) => {
	const addToCalendar = async () => {
		const { status } = await Calendar.requestCalendarPermissionsAsync()
		if (status === 'granted') {
			const defaultCalendar = await Calendar.getDefaultCalendarAsync()
			const calendarId = defaultCalendar.id

			const eventData = {
				title: `${name} at ${location}`,
				startDate: date,
				endDate: date,
			}
			try {
				const eventId = await Calendar.createEventAsync(
					calendarId,
					eventData
				)

				return false
			} catch (error) {
				return true
			}
		}
	}

	return { addToCalendar }
}

export default useAddToCalendar
