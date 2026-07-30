import { Bed, Plus, Edit, Trash2, Search } from 'lucide-react'
import '../App.css'

const Rooms = ({ user, onLogout }) => {
  const rooms = [
    { id: 1, number: '101', type: 'Standard', floor: '1', status: 'Available', price: '$150' },
    { id: 2, number: '102', type: 'Deluxe', floor: '1', status: 'Occupied', price: '$250' },
    { id: 3, number: '201', type: 'Suite', floor: '2', status: 'Available', price: '$400' },
    { id: 4, number: '202', type: 'Standard', floor: '2', status: 'Maintenance', price: '$150' },
    { id: 5, number: '301', type: 'Deluxe', floor: '3', status: 'Occupied', price: '$250' },
    { id: 6, number: '302', type: 'Suite', floor: '3', status: 'Available', price: '$400' },
  ]

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'available': return 'status-available'
      case 'occupied': return 'status-occupied'
      case 'maintenance': return 'status-maintenance'
      default: return ''
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Grand Nusantara</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item"><Bed size={20} />Dashboard</a>
          <a href="/rooms" className="nav-item active"><Bed size={20} />Data Kamar</a>
          <a href="/guests" className="nav-item"><Bed size={20} />Data Tamu</a>
          <a href="/reservations" className="nav-item"><Bed size={20} />Reservasi</a>
          <a href="/checkin" className="nav-item"><Bed size={20} />Check-In</a>
          <a href="/checkout" className="nav-item"><Bed size={20} />Check-Out</a>
          <a href="/search" className="nav-item"><Bed size={20} />Pencarian</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <h2 style={{ color: 'var(--text-primary)' }}>Data Kamar</h2>
          <div className="user-info">
            <div className="user-avatar">{user?.name?.charAt(0).toUpperCase() || 'A'}</div>
            <span style={{ color: 'var(--text-secondary)' }}>{user?.name || 'Admin'}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </header>

        <div className="page-content">
          <div className="page-header">
            <h1>Room Management</h1>
            <p>Manage all hotel rooms and their status</p>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>All Rooms (250)</h3>
              <button className="btn-sm"><Plus size={16} style={{marginRight: '0.5rem'}}/>Add Room</button>
            </div>
            <div className="card-body">
              <div className="search-bar">
                <input type="text" placeholder="Search rooms..." />
                <button><Search size={18} /></button>
              </div>

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Room No</th>
                      <th>Type</th>
                      <th>Floor</th>
                      <th>Price/Night</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map(room => (
                      <tr key={room.id}>
                        <td>{room.number}</td>
                        <td>{room.type}</td>
                        <td>{room.floor}</td>
                        <td>{room.price}</td>
                        <td><span className={`status-badge ${getStatusClass(room.status)}`}>{room.status}</span></td>
                        <td>
                          <div className="actions">
                            <button className="btn-sm"><Edit size={14} /></button>
                            <button className="btn-sm btn-danger"><Trash2 size={14} /></button>
                          </div>
                        </td>
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

export default Rooms