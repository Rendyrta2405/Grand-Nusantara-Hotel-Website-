import { DollarSign, Search } from 'lucide-react'
import '../App.css'

const CheckOut = ({ user, onLogout }) => {
  const pendingCheckOuts = [
    { id: 1, guest: 'John Doe', room: '305', checkInDate: '2026-07-28', checkOutDate: '2026-07-30', totalBill: '$450', status: 'Unpaid' },
    { id: 2, guest: 'Sarah Wilson', room: '501', checkInDate: '2026-07-29', checkOutDate: '2026-07-30', totalBill: '$250', status: 'Unpaid' },
  ]

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header"><h2>Grand Nusantara</h2></div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item"><DollarSign size={20} />Dashboard</a>
          <a href="/rooms" className="nav-item"><DollarSign size={20} />Data Kamar</a>
          <a href="/guests" className="nav-item"><DollarSign size={20} />Data Tamu</a>
          <a href="/reservations" className="nav-item"><DollarSign size={20} />Reservasi</a>
          <a href="/checkin" className="nav-item"><DollarSign size={20} />Check-In</a>
          <a href="/checkout" className="nav-item active"><DollarSign size={20} />Check-Out</a>
          <a href="/search" className="nav-item"><DollarSign size={20} />Pencarian</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="top-bar">
          <h2 style={{ color: 'var(--text-primary)' }}>Check-Out</h2>
          <div className="user-info">
            <div className="user-avatar">{user?.name?.charAt(0).toUpperCase() || 'A'}</div>
            <span style={{ color: 'var(--text-secondary)' }}>{user?.name || 'Admin'}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </header>
        <div className="page-content">
          <div className="page-header"><h1>Check-Out Management</h1><p>Process guest check-outs and payments</p></div>
          <div className="card">
            <div className="card-header"><h3>Pending Check-Outs Today</h3></div>
            <div className="card-body">
              <div className="search-bar"><input type="text" placeholder="Search by name or room..." /><button><Search size={18} /></button></div>
              <div className="table-container">
                <table>
                  <thead><tr><th>Guest</th><th>Room</th><th>Check-In</th><th>Check-Out</th><th>Total Bill</th><th>Status</th><th>Actions</th></tr></thead>
                  <tbody>
                    {pendingCheckOuts.map(item => (
                      <tr key={item.id}>
                        <td>{item.guest}</td><td>{item.room}</td><td>{item.checkInDate}</td><td>{item.checkOutDate}</td><td>{item.totalBill}</td>
                        <td><span className="status-badge status-occupied">{item.status}</span></td>
                        <td><button className="btn-sm btn-success">Process Payment & Check-Out</button></td>
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
export default CheckOut