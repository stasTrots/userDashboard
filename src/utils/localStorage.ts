export const localStorageUtil = () => {

  return {
    get(key: string) {
      return localStorage.getItem(key)
    },
    set(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key: string) {
      localStorage.removeItem(key)
    }
  }
}