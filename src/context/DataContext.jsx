import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: 'Admissions Open for D.Pharmacy 2025-26',
      content: 'Applications are now open for D.Pharmacy program for the academic year 2025-26. Last date for submission is 30th June 2025.',
      type: 'admission',
      priority: 'high',
      status: 'active',
      author: 'Admin',
      createdAt: '2024-12-15',
      updatedAt: '2024-12-15',
      attachments: ['admission-form.pdf', 'fee-structure.pdf']
    },
    {
      id: 2,
      title: 'Library Timings Extended',
      content: 'Library will now remain open from 8 AM to 8 PM on weekdays. Weekend timings remain 9 AM to 5 PM.',
      type: 'general',
      priority: 'medium',
      status: 'active',
      author: 'Admin',
      createdAt: '2024-12-14',
      updatedAt: '2024-12-14',
      attachments: []
    },
    {
      id: 3,
      title: 'Annual Sports Meet 2025',
      content: 'Annual Sports Meet will be held on 15th February 2025. All students are encouraged to participate.',
      type: 'event',
      priority: 'medium',
      status: 'active',
      author: 'Admin',
      createdAt: '2024-12-13',
      updatedAt: '2024-12-13',
      attachments: ['sports-schedule.pdf']
    }
  ]);

  const [results, setResults] = useState([
    {
      id: 1,
      title: 'First Year D.Pharmacy Results',
      examType: 'Semester',
      course: 'D.Pharmacy',
      year: '2024',
      semester: '1st',
      status: 'published',
      publishedDate: '2024-12-10',
      totalStudents: 45,
      passPercentage: 92,
      fileUrl: 'first-year-results.pdf'
    },
    {
      id: 2,
      title: 'Second Year D.Pharmacy Results',
      examType: 'Semester',
      course: 'D.Pharmacy',
      year: '2024',
      semester: '2nd',
      status: 'draft',
      publishedDate: '2024-12-08',
      totalStudents: 42,
      passPercentage: 88,
      fileUrl: 'second-year-results.pdf'
    }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Annual Sports Meet 2025',
      date: '15',
      month: 'Feb',
      year: '2025',
      type: 'sports',
      status: 'upcoming',
      description: 'Annual Sports Meet will be held on 15th February 2025. All students are encouraged to participate.',
      location: 'College Ground',
      time: '9:00 AM'
    },
    {
      id: 2,
      title: 'Technical Seminar on Pharmaceutical Technology',
      date: '20',
      month: 'Jan',
      year: '2025',
      type: 'academic',
      status: 'upcoming',
      description: 'Technical seminar on latest developments in pharmaceutical technology.',
      location: 'Seminar Hall',
      time: '2:00 PM'
    }
  ]);

  const [circulars, setCirculars] = useState([
    {
      id: 1,
      title: 'Direct Second Year Institute Level Round',
      date: 'September 05, 2024',
      type: 'admission',
      status: 'active',
      fileUrl: 'direct-second-year-round.pdf',
      snippet: 'Direct Second Year Institute Level Round - Important information for D.Pharmacy second year admissions...'
    },
    {
      id: 2,
      title: 'First Year Institute Level Round',
      date: 'September 05, 2024',
      type: 'admission',
      status: 'active',
      fileUrl: 'first-year-round.pdf',
      snippet: 'First Year Institute Level Round - Complete details about first year D.Pharmacy admissions...'
    }
  ]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedNotices = localStorage.getItem('notices');
    const savedResults = localStorage.getItem('results');
    const savedEvents = localStorage.getItem('events');
    const savedCirculars = localStorage.getItem('circulars');

    if (savedNotices) setNotices(JSON.parse(savedNotices));
    if (savedResults) setResults(JSON.parse(savedResults));
    if (savedEvents) setEvents(JSON.parse(savedEvents));
    if (savedCirculars) setCirculars(JSON.parse(savedCirculars));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('circulars', JSON.stringify(circulars));
  }, [circulars]);

  const addNotice = (notice) => {
    const newNotice = {
      ...notice,
      id: notices.length + 1,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setNotices([newNotice, ...notices]);
  };

  const updateNotice = (id, updatedNotice) => {
    setNotices(notices.map(notice => 
      notice.id === id 
        ? { ...notice, ...updatedNotice, updatedAt: new Date().toISOString().split('T')[0] }
        : notice
    ));
  };

  const deleteNotice = (id) => {
    setNotices(notices.filter(notice => notice.id !== id));
  };

  const addResult = (result) => {
    const newResult = {
      ...result,
      id: results.length + 1,
      publishedDate: new Date().toISOString().split('T')[0]
    };
    setResults([newResult, ...results]);
  };

  const updateResult = (id, updatedResult) => {
    setResults(results.map(result => 
      result.id === id 
        ? { ...result, ...updatedResult, publishedDate: new Date().toISOString().split('T')[0] }
        : result
    ));
  };

  const deleteResult = (id) => {
    setResults(results.filter(result => result.id !== id));
  };

  const addEvent = (event) => {
    const newEvent = {
      ...event,
      id: events.length + 1
    };
    setEvents([newEvent, ...events]);
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, ...updatedEvent } : event
    ));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const addCircular = (circular) => {
    const newCircular = {
      ...circular,
      id: circulars.length + 1
    };
    setCirculars([newCircular, ...circulars]);
  };

  const updateCircular = (id, updatedCircular) => {
    setCirculars(circulars.map(circular => 
      circular.id === id ? { ...circular, ...updatedCircular } : circular
    ));
  };

  const deleteCircular = (id) => {
    setCirculars(circulars.filter(circular => circular.id !== id));
  };

  const value = {
    notices,
    results,
    events,
    circulars,
    addNotice,
    updateNotice,
    deleteNotice,
    addResult,
    updateResult,
    deleteResult,
    addEvent,
    updateEvent,
    deleteEvent,
    addCircular,
    updateCircular,
    deleteCircular
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}; 