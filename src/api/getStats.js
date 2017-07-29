import config from '../data/config.js'

const { team_id, secret, apiUrl } = config
const query = {team_id, secret}
const queryParams = '?' + Object.keys(query)
                        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(query[key]))
                        .join("&")
                        .replace(/%20/g, '+')

export default async () => {
    try {
        const response = await fetch(apiUrl + queryParams)
        const statsObj = await response.json()
        return statsObj.data
    }
    catch (error) {
        throw new Error(error)
    }
}
