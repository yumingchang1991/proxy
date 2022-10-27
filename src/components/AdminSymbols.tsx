import { useState } from 'react'
import '../styles/symbols.css'
import useAxiosPrivate from '../hooks/useAxiosPrivate'

export default function AdminSymbols () {
  const axiosPrivate = useAxiosPrivate()
  const [systemLog, setLog] = useState('')

  const handleUpload = () => {
    // initialize log message
    setLog('')

    // get the file object
    const fileInput: HTMLInputElement = document.querySelector('#file-input') as HTMLInputElement
    const fileList: FileList = fileInput.files as FileList
    const file: File = fileList[0]
    if (!file) setLog('Please select a file to upload')

    // save the file object to formdata
    const formData: FormData = new FormData()
    formData.append('file', file)

    // set API End Point

    const API_ENDPOINT = `/api/symbols`
    if (file) {
      setLog('uploading file...')

      const fileInput: HTMLInputElement = document.querySelector('input#file-input') as HTMLInputElement
      const uploadButton: HTMLButtonElement = document.querySelector('button.upload-button') as HTMLButtonElement
      fileInput.disabled = true
      uploadButton.disabled = true

      axiosPrivate.post(
        API_ENDPOINT,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(axiosRes => {
        setLog(axiosRes.data.message)
        fileInput.disabled = false
        uploadButton.disabled = false
      })
    }
  }

  return (
    <main className="symbols-form">
        <div className='file-input-block'>
          <label htmlFor='file-input'>Select a file (CSV or TXT)</label>
          <input id='file-input' name='fileInput' type='file' accept='.csv, .txt' />
          <button className='upload-button' onClick={handleUpload}>Upload</button>
          {systemLog === '' ? '' : <p className='system-log'>{systemLog}</p>}
        </div>
    </main>
  )
}
