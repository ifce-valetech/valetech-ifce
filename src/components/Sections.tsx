import React from 'react';
// import '../styles/Sections.css';
import Section1 from './Section-1';
import Section2 from './Section-2';
import Section3 from './Section-3';
import Section4 from './Section-4';
import Section5 from './Section-5';
function Sections() {
    return(
        <section className="sections">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
        </section>
    )
}
export default Sections;