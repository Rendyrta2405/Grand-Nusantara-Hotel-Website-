import { LayoutDashboard, Bed, Users, Calendar, CheckCircle, DollarSign, TrendingUp } from 'lucide-react'
import '../App.css'

const Dashboard = ({ user, onLogout }) => {
  const stats = [
    { title: 'Total Rooms', value: '250', icon: Bed, color: '#3F6E24' },
    { title: 'Occupied Rooms', value: '187', icon: CheckCircle, color: '#17A2B8' },
    { title: 'Available Rooms', value: '63', icon: LayoutDashboard, color: '#FFC107' },
    { title: 'Today\'s Check-ins', value: '24', icon: Users, color: '#28A745' },
    { title: 'Today\'s Check-outs', value: '18', icon: Calendar, color: '#DC3545' },
    { title: 'Pending Reservations', value: '12', icon: TrendingUp, color: '#3F6E24' },
  ]

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Grand Nusantara</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item active">
            <LayoutDashboard size={20} />
            Dashboard
          </a>
          <a href="/rooms" className="nav-item">
            <Bed size={20} />
            Data Kamar
          </a>
          <a href="/guests" className="nav-item">
            <Users size={20} />
            Data Tamu
          </a>
          <a href="/reservations" className="nav-item">
            <Calendar size={20} />
            Reservasi
          </a>
          <a href="/checkin" className="nav-item">
            <CheckCircle size={20} />
            Check-In
          </a>
          <a href="/checkout" className="nav-item">
            <DollarSign size={20} />
            Check-Out
          </a>
          <a href="/search" className="nav-item">
            <TrendingUp size={20} />
            Pencarian
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <header className="top-bar">
          <h2 style={{ color: 'var(--text-primary)' }}>Dashboard</h2>
          <div className="user-info">
            <div className="user-avatar">
              {user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <span style={{ color: 'var(--text-secondary)' }}>{user?.name || 'Admin'}</span>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          <div className="page-header">
            <h1>Welcome back, {user?.name || 'Admin'}!</h1>
            <p>Here's what's happening at Grand Nusantara Hotel today</p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card accent">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3>{stat.title}</h3>
                    <div className="value">{stat.value}</div>
                  </div>
                  <stat.icon size={32} color={stat.color} />
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity Card */}
          <div className="card">
            <div className="card-header">
              <h3>Recent Activity</h3>
            </div>
            <div className="card-body">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Activity</th>
                      <th>Room</th>
                      <th>Guest</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09:45 AM</td>
                      <td>Check-in</td>
                      <td>305</td>
                      <td>John Doe</td>
                      <td><span className="status-badge status-available">Completed</span></td>
                    </tr>
                    <tr>
                      <td>10:15 AM</td>
                      <td>Check-out</td>
                      <td>212</td>
                      <td>Jane Smith</td>
                      <td><span className="status-badge status-available">Completed</span></td>
                    </tr>
                    <tr>
                      <td>10:30 AM</td>
                      <td>Reservation</td>
                      <td>408</td>
                      <td>Michael Brown</td>
                      <td><span className="status-badge status-maintenance">Pending</span></td>
                    </tr>
                    <tr>
                      <td>11:00 AM</td>
                      <td>Check-in</td>
                      <td>501</td>
                      <td>Sarah Wilson</td>
                      <td><span className="status-badge status-available">Completed</span></td>
                    </tr>
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

export default Dashboard