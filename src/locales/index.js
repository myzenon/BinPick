import I18n from 'react-native-i18n'
import en from './en'
import th from './th'

const capitalize = string => string.replace(/(^| )(\w)/g, x => x.toUpperCase())

I18n.fallbacks = true
I18n.translations = {
  en,
  th
}
I18n.getTrashText = (textObj, options = { capitalize: false }) => {
  const myLocale = I18n.locale.split('-')[0]
  let text = textObj[myLocale]
  if (options.capitalize && myLocale === 'en') {
    text = capitalize(text)
  }
  return text
}
export default I18n
