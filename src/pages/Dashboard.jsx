import React from 'react'
import TopSelectedPackage from '../components/TopSelectedPackage'
import NewCustomerTable from '../components/NewCustomerTable'

const Dashboard = () => {
  return (
    <div className=' mx-6'>
      <TopSelectedPackage/>
      <NewCustomerTable/>
    </div>
  )
}

export default Dashboard