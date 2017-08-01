import I18n from 'react-native-i18n'
import en from './en'
import th from './th'

const capitalize = string => string.replace(/(^| )(\w)/g, x => x.toUpperCase())

const languageList = ['en', 'th']

I18n.fallbacks = true
I18n.translations = {
  en,
  th
}

I18n.getTrashText = (textObj, options = { capitalize: false }) => {
  let myLocale = I18n.locale.split('-')[0]
  if (languageList.indexOf(myLocale) === -1) {
    myLocale = 'en'
  }
  let text = textObj[myLocale]
  if (options.capitalize && myLocale === 'en') {
    text = capitalize(text)
  }
  return text
}
export default I18n
