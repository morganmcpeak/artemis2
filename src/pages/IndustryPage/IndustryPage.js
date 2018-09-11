import React from 'react';
import './style.css';
import Nav from '../../components/Nav';

const IndustryPage = () => {
    return (
        <div className="industry-page">
        <div id="tiptop">
    <h1 className="title">Industry Expertise</h1>
    <div id="links">
    <a href="#defense" className="pagelink">Defense</a>
    <a href="#automotive" className="pagelink">Automotive</a>
    <a href="#materials" className="pagelink">Advanced Materials</a>
    <a href="#building"className="pagelink">Building Materials</a>
    <a href="#aerospace"className="pagelink2">Aerospace</a>
    </div>
    </div>
    <p>Artemis Search Group has developed extensive relationships with manufacturing leaders of
        small and mid-market tier suppliers. We specialize in delivering on senior leadership
        engagements within the fastest growing areas of industry.</p>


    <div id="defense" className="industry">
    <h1>Defense</h1>
    <img src="assets/images/defense.jpg" className="industrypic"></img>
    <p>The unique aspects of the US and International defense sector present specific challenges when
                it comes to identifying talent. We understand mission critical requirements and speak the
                language of government acquisition. We serve those who protect our warfighters and security
                personnel.</p>
                <a href="#tiptop" className="top">top</a>
    </div>
    <div id="automotive" className="industry">
    <h1>Automotive</h1>
    <img src="assets/images/automotive.jpg" className="industrypic"></img>
    <p>We excel in the ultra-competitive automotive tier supply world. If you need expertise in your
                engineering, operations, quality, program management, product management, continuous
                improvement or sales functions, we can help. Our depth of experience within powertrain,
                torque conversion, injection and compression molding, stamping, energy storage and composite
                applications allow us to serve a wide portion of the industry.</p>
                <a href="#tiptop" className="top">top</a>
    </div>
    <div id="materials" className="industry">
    <h1>Advanced Materials</h1>
    <img src="assets/images/materials.jpg" className="industrypic"></img>
    <p>This rapidly expanding group of material solutions may be the fastest growing segment of
                American and global industry. It is the thread of continuity that runs through our firm. We are
                composite experts! If your need is carbon fiber, thermoplastic, thermoset, FRP, TFL, or even
                raw material, we are the ones the call. We are deeply embedded within the world of advanced
                composite applications for structural aerospace, specialty vehicle, wind energy, RV, off-
                highway, and architectural/designed interiors. We are strongly tied to life-saving application
                providers of armor and survivability solutions. Bottom line, if you are involved with composites
                we can help you.</p>
                <a href="#tiptop" className="top">top</a>
    </div>
    <div id="building" className="industry">
    <h1>Building Materials</h1>
    <img src="assets/images/buildingmaterials.jpg" className="industrypic"></img>
    <p>Our building and construction materials practice clients fall predominantly into two categories.
                With decades of direct experience with manufacturers of architecturally/specified interior
                products (CSI: 08, 09, 10, 12) and materials (CSI: 03, 04, 05, 06) product classifications. We
                have worked with commercial and residential product manufacturers as well as the two-step
                distributors of materials, consumables, hardware and MRO products. If your tradesman
                need it or if your architect or designer has specified it, we have most likely worked with the
                manufacturer. We can help!</p>
                <a href="#tiptop" className="top">top</a>
    </div>
    <div id="aerospace" className="industry">
    <h1>Aerospace</h1>
    <img src="assets/images/aerospace.jpg" className="industrypic"></img>
    <p>Our depth of knowledge extends to both fixed wing or rotary wing aircraft for defense, security
                forces or commercial applications. We are particularly experienced with structural composites,
                survivability solutions, stampings, machined parts and fabricated metals.</p>
                <a href="#tiptop" className="top">top</a>
    </div>
        </div>
    );
}

export default IndustryPage;