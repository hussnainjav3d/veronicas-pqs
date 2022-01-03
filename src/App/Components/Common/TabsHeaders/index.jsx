import React from 'react'
import { TabUl, TabLi, TabItem } from './style'

export const TabsHeaders = ({ openTab, tabs, getActiveTab }) => {
  return (
    <TabUl role="tablist">
      {tabs?.map((tab, index) => {
        return (
          <TabLi key={index}>
            <TabItem
              opentab={openTab}
              tnumber={tab.tNumber}
              onClick={(e) => {
                e.preventDefault()
                getActiveTab(tab.tNumber)
              }}
              data-toggle="tab"
              role="tablist"
            >
              {tab.tName}
            </TabItem>
          </TabLi>
        )
      })}
    </TabUl>
  )
}
