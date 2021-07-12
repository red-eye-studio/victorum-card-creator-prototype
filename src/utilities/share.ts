export const shareImport = (type: string = 'text/plain'): Promise<File[]> =>
  new Promise((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = type
    input.multiple = true

    const handleChange = () => {
      input.removeEventListener('change', handleChange)
      resolve(input.files?.length ? Array.from(input.files) : [])
    }

    input.addEventListener('change', handleChange)
    input.click()
  })

export const shareExport = (filename: string, content: BlobPart, type: string = 'text/plain') => {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  queueMicrotask(() => {
    URL.revokeObjectURL(url)
  })
}
