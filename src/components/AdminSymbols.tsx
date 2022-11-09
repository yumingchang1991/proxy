import '../styles/symbols.css'
import { useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import LinearProgress from '@mui/material/LinearProgress'
import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

export default function AdminSymbols () {
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  const [systemLog, setLog] = useState('')
  const [displayLinearProgress, setDisplay] = useState(false)

  const toggleDisplayProgress = () => {
    const fileInput: HTMLInputElement = document.querySelector('input#file-input') as HTMLInputElement
    const uploadButton: HTMLButtonElement = document.querySelector('button.upload-button') as HTMLButtonElement
    fileInput.disabled = !fileInput.disabled
    uploadButton.disabled = !uploadButton.disabled
    setDisplay(prevState => !prevState)
  }

  const handleUpload = async () => {
    // initialize log message
    setLog('')

    // get the file object
    const fileInput: HTMLInputElement = document.querySelector('#file-input') as HTMLInputElement
    const fileList: FileList = fileInput.files as FileList
    const file: File = fileList[0]
    if (!file) return setLog('Please select a file to upload')

    // save the file object to formdata
    const formData: FormData = new FormData()
    formData.append('file', file)

    // set API End Point
    const API_ENDPOINT = `/api/symbols`

    toggleDisplayProgress()
    setLog('uploading file...')

    let axiosRes
    try {
      axiosRes = await axiosPrivate.post(
        API_ENDPOINT,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
    } catch (e) {
      toggleDisplayProgress()
      console.error(e)
    }

    if (axiosRes) {
      toggleDisplayProgress()
      if (axiosRes.status === 401) {
        return navigate('/proxy-frontend/login', { state: { from: location }, replace: true })
      }
      setLog(axiosRes.data.message)
    }
  }

  return (
    <main className="symbols-form">
        {
          displayLinearProgress
          ? <Box width='50%'><LinearProgress /></Box>
          : ''
        }
        
        <div className='file-input-block'>
          <label htmlFor='file-input'>Select a file (CSV or TXT)</label>
          <input id='file-input' name='fileInput' type='file' accept='.csv, .txt' />
          <button className='upload-button' onClick={handleUpload}>Upload</button>
          {systemLog === '' ? '' : <p className='log-message'>{systemLog}</p>}
        </div>  
    </main>
  )
}
