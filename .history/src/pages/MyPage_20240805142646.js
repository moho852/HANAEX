import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'

const MyPage = () => {
  return (
    <div className='w-[1140px] h-[calc(100vh-60px)] bg-slate-500 flex flex-col py-10 px-10'>
      <div className='bg-slate-50 p-10'>
        <Tabs position='relative' variant='unstyled' className='bg-slate-200'>
          <TabList>
            <Tab>내 계좌</Tab>
            <Tab>보유외환</Tab>
            <Tab>나의관심</Tab>
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
          <TabPanels>
            <TabPanel>
              <p>내 외환</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default MyPage
