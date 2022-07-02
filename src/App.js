import React, {
  useState,
} from 'react'
import Modal from './ui/Modal'

const App = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <>
      <div className='bg-gray-200 w-fit p-5 cursor-pointer' onClick={() => setShowDeleteModal(true)}>Open modal</div>
      <Modal
        onClose={() => {
          setShowDeleteModal(false)
        }}
        onSubmit={() => {
          setShowDeleteModal(false)
        }}
        submitText='yes'
        closeText='no'
        title='Some title'
        message='Some message'
        isOpened={showDeleteModal}
      />
    </>
  )
}

export default App
