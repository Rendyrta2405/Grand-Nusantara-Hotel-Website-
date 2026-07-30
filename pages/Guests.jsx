import { Users, Plus, Edit, Trash2, Search } from 'lucide-react'
import '../App.css'

const Guests = ({ user, onLogout }) => {
  const guests = [
    { id: 1, name: 'John Doe', email: 'john@email.com', phone: '+62 812-3456-7890', room: '305', checkIn: '2026-07-28', status: 'Checked In' },
    { id: 2, name: 'Jane Smith', email: 'jane@email.com', phone: '+62 813-4567-8901', room: '212', checkIn: '2026-07-29', status: 'Checked Out' },
    { id: 3, name: 'Michael Brown', email: 'michael@email.com', phone: '+62 814-5678-9012', room: '-', checkIn: '2026-08-01', status: 'Reserved' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@email.com', phone: '+62 815-6789-0123', room: '501', checkIn: '2026-07-30', status: 'Checked In' },
  ]

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header"><h2>Grand Nusantara</h2></div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item"><Users size={20} />Dashboard</a>
          <a href="/rooms" className="nav-item"><Users size={20} />Data Kamar</a>
          <a href="/guests" className="nav-item active"><Users size={20} />Data Tamu</a>
          <a href="/reservations" className="nav-item"><Users size={20} />Reservasi</a>
          <a href="/checkin" className="nav-item"><Users size={20} />Check-In</a>
          <a href="/checkout" className="nav-item"><Users size={20} />Check-Out</a>
          <a href="/search" className="nav-item"><Users size={20} />Pencarian</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="top-bar">
          <h2 style={{ color: 'var(--text-primary)' }}>Data Tamu</h2>
          <div className="user-info">
            <div className="user-avatar">{user?.name?.charAt(0).toUpperCase() || 'A'}</div>
            <span style={{ color: 'var(--text-secondary)' }}>{user?.name || 'Admin'}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </header>
        <div className="page-content">
          <div className="page-header"><h1>Guest Management</h1><p>View and manage all guest information</p></div>
          <div className="card">
            <div className="card-header"><h3>All Guests</h3><button className="btn-sm"><Plus size={16} style={{marginRight: '0.5rem'}}/>Add Guest</button></div>
            <div className="card-body">
              <div className="search-bar"><input type="text" placeholder="Search guests..." /><button><Search size={18} /></button></div>
              <div className="table-container">
                <table>
                  <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Room</th><th>Check-In</th><th>Status</th><th>Actions</th></tr></thead>
                  <tbody>
                    {guests.map(guest => (
                      <tr key={guest.id}>
                        <td>{guest.name}</td><td>{guest.email}</td><td>{guest.phone}</td><td>{guest.room}</td><td>{guest.checkIn}</td>
                        <td><span className="status-badge status-available">{guest.status}</span></td>
                        <td><div className="actions"><button className="btn-sm"><Edit size={14} /></button><button className="btn-sm btn-danger"><Trash2 size={14} /></button></div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Guests