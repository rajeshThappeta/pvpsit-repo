import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootLayout() {
    return (
        <div>
            <Header />
            {/* placeholder for selected components */}
            <div style={{minHeight:'80vh'}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout