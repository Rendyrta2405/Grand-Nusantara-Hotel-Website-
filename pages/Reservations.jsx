import { Calendar, Plus, Edit, Trash2, Search } from 'lucide-react'
import '../App.css'

const Reservations = ({ user, onLogout }) => {
  const reservations = [
    { id: 1, guest: 'Michael Brown', room: '408', checkIn: '2026-08-01', checkOut: '2026-08-05', guests: 2, status: 'Pending' },
    { id: 2, guest: 'Emily Davis', room: '315', checkIn: '2026-08-02', checkOut: '2026-08-07', guests: 3, status: 'Confirmed' },
    { id: 3, guest: 'Robert Johnson', room: '520', checkIn: '2026-08-03', checkOut: '2026-08-06', guests: 1, status: 'Pending' },
  ]

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header"><h2>Grand Nusantara</h2></div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item"><Calendar size={20} />Dashboard</a>
          <a href="/rooms" className="nav-item"><Calendar size={20} />Data Kamar</a>
          <a href="/guests" className="nav-item"><Calendar size={20} />Data Tamu</a>
          <a href="/reservations" className="nav-item active"><Calendar size={20} />Reservasi</a>
          <a href="/checkin" className="nav-item"><Calendar size={20} />Check-In</a>
          <a href="/checkout" className="nav-item"><Calendar size={20} />Check-Out</a>
          <a href="/search" className="nav-item"><Calendar size={20} />Pencarian</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="top-bar">
          <h2 style={{ color: 'var(--text-primary)' }}>Reservasi</h2>
          <div className="user-info">
            <div className="user-avatar">{user?.name?.charAt(0).toUpperCase() || 'A'}</div>
            <span style={{ color: 'var(--text-secondary)' }}>{user?.name || 'Admin'}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </header>
        <div className="page-content">
          <div className="page-header"><h1>Reservation Management</h1><p>Manage all room reservations</p></div>
          <div className="card">
            <div className="card-header"><h3>All Reservations</h3><button className="btn-sm"><Plus size={16} style={{marginRight: '0.5rem'}}/>New Reservation</button></div>
            <div className="card-body">
              <div className="search-bar"><input type="text" placeholder="Search reservations..." /><button><Search size={18} /></button></div>
              <div className="table-container">
                <table>
                  <thead><tr><th>Guest</th><th>Room</th><th>Check-In</th><th>Check-Out</th><th>Guests</th><th>Status</th><th>Actions</th></tr></thead>
                  <tbody>
                    {reservations.map(res => (
                      <tr key={res.id}>
                        <td>{res.guest}</td><td>{res.room}</td><td>{res.checkIn}</td><td>{res.checkOut}</td><td>{res.guests}</td>
                        <td><span className={`status-badge ${res.status === 'Confirmed' ? 'status-available' : 'status-maintenance'}`}>{res.status}</span></td>
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
export default Reservations