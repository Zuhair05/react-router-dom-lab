// src/App.jsx

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

const App = () => {

  const [mailbox, setMailbox] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);


  const addMailbox = (newMailbox) => {
    setMailbox([...mailbox, newMailbox]);
  };

  return (
    <div>
      <h1>Hello world!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/mailBox" element={<MailboxList mailbox={mailbox} />} />
        <Route path="/new-mailBox" element={<MailboxForm addMailbox={addMailbox} mailbox={mailbox} />} />
        <Route path="/mailBox/:mailboxId" element={<MailboxDetails mailbox={mailbox} />} />
      </Routes>
    </div>
  );
};

export default App;
