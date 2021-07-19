export const fileToString = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader()

  const handleLoad = () => {
    reader.removeEventListener('load', handleLoad)
    reader.removeEventListener('error', handleError)

    resolve(reader.result as string)
  }
  const handleError = () => {
    reader.removeEventListener('load', handleLoad)
    reader.removeEventListener('error', handleError)

    reject(reader.error)
  }

  reader.addEventListener('load', handleLoad)
  reader.addEventListener('error', handleError)
  
  reader.readAsDataURL(file)
})