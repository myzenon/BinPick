import config from '../data/config.js'

const { team_id, secret, apiUrl } = config

export default async (bin_statistics = {}, waste_statistics = []) => {
    const data = {
        team_id,
        secret,
        waste_statistics,
        bin_statistics
    }
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const statsObj = await response.json()
        return statsObj.data
    }
    catch (error) {
        throw new Error(error)
    }
}