import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {

  const getItem = async (key) => {
    try {

      const passwords = await AsyncStorage.getItem(key)
      return JSON.parse(passwords) || []

    } catch (error) {
      console.error("Erro ao buscar item ", error)
      return []
    }
  }

  const saveItem = async (key, value) => {
    try {

      let passwords = await getItem(key)
      passwords.push(value)

      await AsyncStorage.setItem(key, JSON.stringify(passwords))

    } catch (error) {
      console.error("Erro ao salvar item ", error)
    }
  }

  const removeItem = async (key, value) => {
    try {

      let passwords = await getItem(key)
      let myPasswords = passwords.filter(item => item !== value)

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
      return myPasswords

    } catch (error) {
      console.error("Erro ao remover item ", error)
    }
  }


  return {
    getItem,
    saveItem,
    removeItem
  }


}

export default useStorage;
