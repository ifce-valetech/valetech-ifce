import './styles/App.scss';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SectionCenter from './components/SectionCenter'
import SectionHeader from './components/SectionHeader'
import Sections from './components/Sections'

function App() {

    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                {/* <header> */}
                <SectionHeader />
                <Sections />
                <SectionCenter />
                {/* </header> */}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default App
