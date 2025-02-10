export type LeaveRequest = {
    id: string;
    employeeName: string;
    documentId: string;
    dateRange: {
      start: string;
      end: string;
    };
    type: string;
    reason: string;
    status: 'pending' | 'approved' | 'rejected';
  };