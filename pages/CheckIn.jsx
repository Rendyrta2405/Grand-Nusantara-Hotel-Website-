import { CheckCircle, Plus, Search } from 'lucide-react'
import '../App.css'

const CheckIn = ({ user, onLogout }) => {
  const pendingCheckIns = [
    { id: 1, guest: 'Michael Brown', reservation: 'RES-2026-001', room: '408', checkInDate: '2026-08-01', guests: 2 },
    { id: 2, guest: 'Emily Davis', reservation: 'RES-2026-002', room: '315', checkInDate: '2026-08-02', guests: 3 },
  ]

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header"><h2>Grand Nusantara</h2></div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item"><CheckCircle size={20} />Dashboard</a>
          <a href="/rooms" className="nav-item"><CheckCircle size={20} />Data Kamar</a>
          <a href="/guests" className="nav-item"><CheckCircle size={20} />Data Tamu</a>
          <a href="/reservations" className="nav-item"><CheckCircle size={20} />Reservasi</a>
          <a href="/checkin" className="nav-item active"><CheckCircle size={20} />Check-In</a>
          <a href="/checkout" className="nav-item"><CheckCircle size={20} />Check-Out</a>
          <a href="/search" className="nav-item"><CheckCircle size={20} />Pencarian</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="top-bar">
          <h2 style={{ color: 'var(--text-primary)' }}>Check-In</h2>
          <div className="user-info">
            <div className="user-avatar">{user?.name?.charAt(0).toUpperCase() || 'A'}</div>
            <span style={{ color: 'var(--text-secondary)' }}>{user?.name || 'Admin'}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </header>
        <div className="page-content">
          <div className="page-header"><h1>Check-In Management</h1><p>Process guest check-ins</p></div>
          <div className="card">
            <div className="card-header"><h3>Pending Check-Ins Today</h3></div>
            <div className="card-body">
              <div className="search-bar"><input type="text" placeholder="Search by name or reservation..." /><button><Search size={18} /></button></div>
              <div className="table-container">
                <table>
                  <thead><tr><th>Guest</th><th>Reservation</th><th>Room</th><th>Date</th><th>Guests</th><th>Actions</th></tr></thead>
                  <tbody>
                    {pendingCheckIns.map(item => (
                      <tr key={item.id}>
                        <td>{item.guest}</td><td>{item.reservation}</td><td>{item.room}</td><td>{item.checkInDate}</td><td>{item.guests}</td>
                        <td><button className="btn-sm btn-success"><CheckCircle size={14} style={{marginRight: '0.5rem'}}/>Process Check-In</button></td>
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
export default CheckIn
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
import { TrendingUp, Search } from 'lucide-react'
import '../App.css'

const SearchPage = ({ user, onLogout }) => {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header"><h2>Grand Nusantara</h2></div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item"><TrendingUp size={20} />Dashboard</a>
          <a href="/rooms" className="nav-item"><TrendingUp size={20} />Data Kamar</a>
          <a href="/guests" className="nav-item"><TrendingUp size={20} />Data Tamu</a>
          <a href="/reservations" className="nav-item"><TrendingUp size={20} />Reservasi</a>
          <a href="/checkin" className="nav-item"><TrendingUp size={20} />Check-In</a>
          <a href="/checkout" className="nav-item"><TrendingUp size={20} />Check-Out</a>
          <a href="/search" className="nav-item active"><TrendingUp size={20} />Pencarian</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="top-bar">
          <h2 style={{ color: 'var(--text-primary)' }}>Pencarian</h2>
          <div className="user-info">
            <div className="user-avatar">{user?.name?.charAt(0).toUpperCase() || 'A'}</div>
            <span style={{ color: 'var(--text-secondary)' }}>{user?.name || 'Admin'}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </header>
        <div className="page-content">
          <div className="page-header"><h1>Search Data</h1><p>Search across all hotel data</p></div>
          <div className="card">
            <div className="card-header"><h3>Advanced Search</h3></div>
            <div className="card-body">
              <div className="form-group">
                <label>Search Type</label>
                <select style={{width: '100%'}}>
                  <option>All</option>
                  <option>Guests</option>
                  <option>Rooms</option>
                  <option>Reservations</option>
                </select>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Enter search term..." style={{flex: 1}} />
                <button><Search size={18} /> Search</button>
              </div>
              <div style={{marginTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', padding: '3rem'}}>
                <Search size={48} style={{opacity: 0.5, marginBottom: '1rem'}} />
                <p>Enter your search criteria above to find data</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default SearchPage