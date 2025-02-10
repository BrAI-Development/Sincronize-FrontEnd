import React, { useState } from 'react';
import { LeaveRequestsTemplate } from '../components/templates/LeaveRequestsTemplate';

export function LeaveRequestsPage() {
  const [searchDoc, setSearchDoc] = useState('');
  const [searchName, setSearchName] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');

  const leaveRequests = [
    {
      id: '1',
      employeeName: 'Oscar Alvarez',
      documentId: '1097120810',
      dateRange: {
        start: 'May 12, 2025',
        end: 'Jun 23, 2025'
      },
      type: 'Vacation',
      reason: 'Annual leave',
      status: 'pending'
    },
    {
      id: '2',
      employeeName: 'Maria Rodriguez',
      documentId: '1097120811',
      dateRange: {
        start: 'Feb 15, 2025',
        end: 'Feb 20, 2025'
      },
      type: 'Sick',
      reason: 'Medical condition',
      status: 'pending'
    },
    {
        id: 3,
        employeeName: 'Oscar Alvarez',
        documentId: '1097120810',
        dateRange: {
          start: 'May 12, 2025',
          end: 'Jun 23, 2025'
        },
        type: 'Vacation',
        reason: 'Annual leave',
        status: 'pending'
      },
      {
        id: 4,
        employeeName: 'Maria Rodriguez',
        documentId: '1097120811',
        dateRange: {
          start: 'Feb 15, 2025',
          end: 'Feb 20, 2025'
        },
        type: 'Sick',
        reason: 'Medical condition',
        status: 'pending'
      },
  ];

  return (
    <LeaveRequestsTemplate
      leaveRequests={leaveRequests}
      searchDoc={searchDoc}
      searchName={searchName}
      selectedType={selectedType}
      onSearchDocChange={(e) => setSearchDoc(e.target.value)}
      onSearchNameChange={(e) => setSearchName(e.target.value)}
      onTypeChange={(e) => setSelectedType(e.target.value)}
    />
  );
}