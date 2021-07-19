const cache: Record<string, HTMLImageElement> = {}
export const getImageFromString = (string: string | null): Promise<HTMLImageElement | null> => new Promise((resolve, reject) => {
  if (!string) return resolve(null)
  if (string in cache) return resolve(cache[string])

  const image = document.createElement('img')

  const handleLoad = () => {
    image.removeEventListener('load', handleLoad)
    image.removeEventListener('error', handleError)
    
    cache[string] = image

    resolve(image)
  }
  const handleError = () => {
    image.removeEventListener('load', handleLoad)
    image.removeEventListener('error', handleError)

    reject()
  }
  
  image.addEventListener('load', handleLoad)
  image.addEventListener('error', handleError)
  image.src = string
})
