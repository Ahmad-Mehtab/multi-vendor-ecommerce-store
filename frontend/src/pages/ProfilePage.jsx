import React from 'react'
import styles from '../styles/styles'
import ProfileSideBar from '../components/Profile/ProfileSideBar.jsx'
import ProfileContent from '../components/Profile/ProfileContent.jsx'

function ProfilePage() {
  return (
    <div className={`${styles.section} flex bg-[#f5f5f5] py-5`}>
        <div className='w-[335px]'>
        <ProfileSideBar />
        </div>
        <ProfileContent />
    </div>
  )
}

export default ProfilePage